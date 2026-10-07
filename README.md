# Kiri — Private Archive

Personal website built with React 19 and Vite. Archive reads public articles
from Supabase and opens their full content in an accessible modal reader.

## Local development

Use Node.js 22.12 or newer. Run `npm ci`, copy `.env.example` to `.env.local`,
and set the Supabase project URL and publishable key. Run `npm run dev`.
See `SUPABASE.md` for article editing and database access rules.

`npm run lint`, `npm run typecheck`, and `npm run build` validate the source.
`npm run preview` serves the production build locally.

## Cloudflare static assets

The existing `wrangler.jsonc` serves `kiri_website_upload/`. This directory
contains the latest production build so the existing deployment entry remains
usable. To regenerate it from source, configure the two public Supabase
environment variables and run:

```sh
npm ci
npm run build -- --outDir kiri_website_upload
```

Commit the updated source and generated assets together when deploying from
the checked-in static directory. Environment files, dependencies, and local
logs are excluded from Git. The browser bundle contains only the Supabase
publishable key; never configure a secret or service-role key in a Vite variable.

Article-reader checks covered desktop/mobile opening, internal scrolling,
keyboard focus, closing, and reduced motion. Screenshots and live-data
verification records remain local and are excluded from this repository.
