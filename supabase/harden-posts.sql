-- Run as postgres in this project's Supabase SQL Editor.
-- Scope: public.posts privileges only; no article data is changed.
-- Based on the security_audit CSV provided on 2026-10-08.
begin;

-- Stop if the policy configuration changed since the reviewed export.
do $guard$
begin
  if not exists (
    select 1 from pg_class c join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public' and c.relname = 'posts' and c.relrowsecurity
  ) or (select count(*) from pg_policies
        where schemaname = 'public' and tablename = 'posts') <> 1
    or not exists (
      select 1 from pg_policies
      where schemaname = 'public' and tablename = 'posts'
        and policyname = 'Allow public read published posts'
        and cmd = 'SELECT' and permissive = 'PERMISSIVE'
        and roles = array['anon']::name[] and qual = '(is_public = true)'
    ) then
    raise exception 'Posts security configuration changed. Run audit-posts.sql again before hardening.';
  end if;
end;
$guard$;

-- Table-level REVOKE also removes corresponding column privileges.
revoke all privileges on table public.posts from PUBLIC, anon, authenticated;
grant select on table public.posts to anon;

-- Verify effective permissions before committing; any failure rolls back.
do $verify$
declare
  client_role text;
  operation text;
begin
  if not has_table_privilege('anon', 'public.posts', 'SELECT') then
    raise exception 'Public article reading was not preserved.';
  end if;
  foreach client_role in array array['anon', 'authenticated'] loop
    foreach operation in array array['INSERT', 'UPDATE', 'DELETE', 'TRUNCATE', 'REFERENCES', 'TRIGGER'] loop
      if has_table_privilege(client_role, 'public.posts', operation) then
        raise exception 'Unexpected remaining % privilege for %.', operation, client_role;
      end if;
    end loop;
    foreach operation in array array['INSERT', 'UPDATE', 'REFERENCES'] loop
      if has_any_column_privilege(client_role, 'public.posts', operation) then
        raise exception 'Unexpected remaining column % privilege for %.', operation, client_role;
      end if;
    end loop;
  end loop;
  if has_any_column_privilege('authenticated', 'public.posts', 'SELECT') then
    raise exception 'Unexpected remaining authenticated read privilege.';
  end if;
end;
$verify$;

commit;

-- Result to share after successful execution.
select jsonb_build_object(
  'rls_enabled', (select relrowsecurity from pg_class where oid = 'public.posts'::regclass),
  'policy', (select jsonb_agg(to_jsonb(p)) from (
    select policyname, roles, cmd, qual from pg_policies
    where schemaname = 'public' and tablename = 'posts'
  ) p),
  'role_privileges', (select jsonb_agg(jsonb_build_object(
    'role', client_role,
    'select', has_table_privilege(client_role, 'public.posts', 'SELECT'),
    'insert', has_table_privilege(client_role, 'public.posts', 'INSERT'),
    'update', has_table_privilege(client_role, 'public.posts', 'UPDATE'),
    'delete', has_table_privilege(client_role, 'public.posts', 'DELETE')
  )) from unnest(array['anon', 'authenticated']) as client_role)
) as hardening_result;
