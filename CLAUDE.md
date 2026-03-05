# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

IEEE PCC Student Branch website — a statically pre-rendered SvelteKit site deployed to GitHub Pages.

**Stack**: SvelteKit 2 + Svelte 5, TypeScript, Tailwind CSS 4, Skeleton Labs UI, Bun package manager.

## Commands

| Command               | Purpose                           |
| --------------------- | --------------------------------- |
| `bun dev --open`      | Start dev server (localhost:5173) |
| `bun run build`       | Build static site to `/build`     |
| `bun run preview`     | Preview production build          |
| `bun run check`       | Svelte type-checking              |
| `bun run check:watch` | Type-checking in watch mode       |
| `bun run lint`        | Prettier + ESLint check           |
| `bun run format`      | Auto-format with Prettier         |

No test framework is configured.

## Architecture

### Static Site Generation

All pages are pre-rendered at build time via `@sveltejs/adapter-static`. The `+layout.ts` sets `prerender = true` globally. Output goes to `/build`. No server-side runtime.

### Routing (file-based)

- `/` — Home page (hero, event highlights, officer teaser, history preview)
- `/about` — Vision pillars and FAQ accordion
- `/events` — Events table + interactive calendar
- `/officers` — Officer directory (exec, committee, councilor)
- `/history` — Timeline of branch milestones

### Data Pattern

All content is stored as static JSON in `static/api/` (events.json, officers.json, timeline.json). Pages fetch these client-side in `onMount()` using `fetch(base + '/api/<file>.json')` and store results in `$state()` variables. No CMS or database.

### Component Organization

- `src/routes/` — Pages and layouts (SvelteKit file-based routing)
- `src/lib/` — Reusable components (Navbar, Footer, HeroHeader, Calendar, name cards, etc.)
- `src/lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `static/` — Images, officer photos, JSON data, favicon

### Theming & Styling

- `src/ieeetheme.css` — Custom Skeleton theme (oklch color tokens, applied via `data-theme="ieeetheme"`)
- `src/app.css` — Global styles, Tailwind/Skeleton imports, nav animation effects
- Dark mode on by default (`<html class="dark">`), toggled via Navbar switch, persisted in localStorage

### Base Path

`svelte.config.js` uses `BASE_PATH` env var for production and empty string for dev. All internal fetches use SvelteKit's `base` import from `$app/paths`.

## Code Conventions

- **Svelte 5 runes**: `$props()`, `$state()`, `$derived()`, `$effect()`, `{#snippet}`, `{@render}`
- **Formatting**: Tabs, single quotes, no trailing commas, 100 char print width (enforced by Prettier)
- **Components**: PascalCase filenames, TypeScript `<script lang="ts">`
- **Icons**: Font Awesome (`@fortawesome/fontawesome-free`), Lucide Svelte, Flowbite Svelte Icons
- **UI components**: Skeleton Labs (`@skeletonlabs/skeleton-svelte`) for AppBar, Accordion, Avatar, Switch, Tooltip

## CI/CD

- **deploy.yml**: On push to `main` → `bun install --frozen-lockfile` → `bun run build` → deploy to GitHub Pages
- **pretty.yml**: On every push → runs `bun run lint`
