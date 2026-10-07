# kiri.pet Supabase connection

The local React + Vite site reads `public.posts` using `@supabase/supabase-js`.
The homepage, Archive and category page use one shared client. The Archive no
longer imports demo articles. No remote rows or database policies were changed
during this integration.

## Configuration

Use `.env.local` with the two variables shown in `.env.example`:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY` (a public `sb_publishable_` key)

Every `VITE_` variable used by the client is included in the browser build.
Never put a secret key, service-role key, or database password there. The public
key is not an access-control mechanism; enforce access in Postgres with RLS and
grants. Environment files are ignored by Git. Production hosting must supply
these two public variables before running `npm run build`.

The client does not sign visitors in, persist sessions or write articles.
Add or edit articles in Supabase Table Editor for now, then refresh the website.
Set `is_public` to true to publish an article. Use only supported categories:
`kiri`, `fragments`, `games`, `places`, `others`.

## Database security: posts privileges hardened and result reviewed

On 2026-10-08 the user ran `supabase/harden-posts.sql` in Supabase SQL Editor
and supplied the resulting `hardening_result`. The result confirms:

- RLS remains enabled on `public.posts`.
- The sole SELECT policy permits `anon` to read only `is_public = true` rows.
- `anon` has SELECT and no INSERT, UPDATE or DELETE privileges.
- `authenticated` has none of these four table privileges.

After reviewing the result, a fresh read-only request using the website's
publishable key confirmed six visible public articles. The private-article
query returned zero rows; the earlier audit also reported zero private rows.
No real private draft was created for a runtime test.

The hardening script verifies the reviewed policy is unchanged, removes table
and corresponding column grants from PUBLIC/anon/authenticated, and restores
SELECT only to anon. Its pre-commit checks cover effective table and column
write privileges. It preserves article rows, policies, service-role grants and
administrator access. The website currently has no visitor login feature.

`supabase/audit-posts.sql` remains available for future read-only metadata checks.

This audit covers direct access to `public.posts`, not other tables, views,
RPC functions or Storage policies.

Existing image URLs use the public `pics` Storage bucket. Images in a public
bucket are accessible by URL independently of article privacy. Keep private
images in a private bucket; setting an article to private does not make an
existing public image URL private.

## Run and verify

### Article reading

Click an Archive title, cover or Read entry control to read the full `content`
inside the modal. The modal keeps category/page selections and restores the
clicked control and scroll position when dismissed. Plain text preserves
paragraph breaks; Markdown and sanitized article HTML support images and
formatting. Images inside `content` are independent of the optional cover in
`image_url`. Reader-specific verification records remain local.

Run `npm run dev` or double-click `start-local.bat`. For a production preview:
`npm run build`, then `npm run preview`.

On 2026-10-08, lint, TypeScript and production builds passed. Browser checks
confirmed six real published articles, category filtering, the category page,
and desktop/mobile rendering. Simulated checks covered a reduced server row
limit, pagination, escaped article text, failed requests, retry and empty data.
Live-data verification records and screenshots remain local.

Backups of the changed original files are in
`D:\tmp\kiri-supabase-backup-20261008`.

References:
- https://supabase.com/docs/guides/getting-started/quickstarts/reactjs
- https://supabase.com/docs/guides/getting-started/api-keys
- https://supabase.com/docs/guides/database/postgres/row-level-security
