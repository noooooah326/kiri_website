-- Read-only. Returns one JSON cell: copy that result back into the chat.
select jsonb_build_object(
  'table_security', (
    select jsonb_build_object('rls_enabled', c.relrowsecurity,
                             'rls_forced', c.relforcerowsecurity)
    from pg_class c join pg_namespace n on n.oid = c.relnamespace
    where n.nspname = 'public' and c.relname = 'posts'
  ),
  'policies', (
    select coalesce(jsonb_agg(to_jsonb(p)), '[]'::jsonb)
    from (
      select policyname, permissive, roles, cmd, qual, with_check
      from pg_policies where schemaname = 'public' and tablename = 'posts'
    ) p
  ),
  'role_privileges', (
    select jsonb_agg(jsonb_build_object(
      'role', role_name,
      'select', has_table_privilege(role_name, 'public.posts', 'SELECT'),
      'insert', has_table_privilege(role_name, 'public.posts', 'INSERT'),
      'update', has_table_privilege(role_name, 'public.posts', 'UPDATE'),
      'delete', has_table_privilege(role_name, 'public.posts', 'DELETE')
    )) from unnest(array['anon', 'authenticated']) as role_name
  ),
  'column_privileges', (
    select coalesce(jsonb_agg(to_jsonb(p)), '[]'::jsonb)
    from (
      select grantee, column_name, privilege_type
      from information_schema.column_privileges
      where table_schema = 'public' and table_name = 'posts'
        and grantee in ('PUBLIC', 'anon', 'authenticated')
    ) p
  ),
  'private_post_count', (
    select count(*) from public.posts where is_public is not true
  )
) as security_audit;
