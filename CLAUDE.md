# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IEEE PCC Student Branch website — a server-side rendered SvelteKit site deployed to Cloudflare Pages.

**Stack**: SvelteKit 2 + Svelte 5, TypeScript, Tailwind CSS 4, Skeleton Labs UI, Bun package manager.

## Commands

| Command               | Purpose                           |
| --------------------- | --------------------------------- |
| `bun dev --open`      | Start dev server (localhost:5173) |
| `bun run build`       | Build for Cloudflare Pages        |
| `bun run preview`     | Preview production build          |
| `bun run check`       | Svelte type-checking              |
| `bun run check:watch` | Type-checking in watch mode       |
| `bun run lint`        | Prettier + ESLint check           |
| `bun run format`      | Auto-format with Prettier         |

No test framework is configured.

## Architecture

### Server-Side Rendering

Pages are rendered on Cloudflare Workers via `@sveltejs/adapter-cloudflare`. Each page has a `+page.server.ts` that loads data at request time. Output goes to `.svelte-kit/cloudflare`.

### Routing (file-based)

- `/` — Home page (hero, event highlights, officer teaser, history preview)
- `/about` — Vision pillars and FAQ accordion
- `/events` — Events table + interactive calendar
- `/officers` — Officer directory (exec, committee, councilor)
- `/history` — Timeline of branch milestones
- `/admin` — Authenticated admin panel (CRUD for events, officers, timeline)

### Data Pattern

Content is stored in Cloudflare KV (`SITE_DATA` namespace) in production. In dev, the data layer (`src/lib/server/data.ts`) falls back to static JSON in `static/api/`. On first production load, KV auto-seeds from the static JSON files. Shared TypeScript types live in `src/lib/types.ts`.

### Admin Panel

Protected by session-cookie auth via `src/hooks.server.ts`. Password is set via `ADMIN_PASSWORD` environment variable (Cloudflare secret); defaults to `admin` in dev. CRUD operations for events, officers, and timeline use SvelteKit form actions.

### Component Organization

- `src/routes/` — Pages and layouts (SvelteKit file-based routing)
- `src/lib/` — Reusable components (Navbar, Footer, HeroHeader, Calendar, name cards, etc.)
- `src/lib/server/data.ts` — KV data access layer with dev fallback
- `src/lib/types.ts` — Shared TypeScript interfaces
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `static/` — Images, officer photos, JSON data, favicon

### Theming & Styling

- `src/ieeetheme.css` — Custom Skeleton theme (oklch color tokens, applied via `data-theme="ieeetheme"`)
- `src/app.css` — Global styles, Tailwind/Skeleton imports, nav animation effects
- Dark mode on by default (`<html class="dark">`), toggled via Navbar switch, persisted in localStorage

## Code Conventions

- **Svelte 5 runes**: `$props()`, `$state()`, `$derived()`, `$effect()`, `{#snippet}`, `{@render}`
- **Formatting**: Tabs, single quotes, no trailing commas, 100 char print width (enforced by Prettier)
- **Components**: PascalCase filenames, TypeScript `<script lang="ts">`
- **Icons**: Font Awesome (`@fortawesome/fontawesome-free`), Lucide Svelte, Flowbite Svelte Icons
- **UI components**: Skeleton Labs (`@skeletonlabs/skeleton-svelte`) for AppBar, Accordion, Avatar, Switch, Tooltip

## CI/CD

- **deploy.yml**: On push to `main` → `bun install --frozen-lockfile` → `bun run build` → deploy to Cloudflare Pages via Wrangler
- **pretty.yml**: On every push → runs `bun run lint`
