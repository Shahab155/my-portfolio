# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

**Next.js 16.2.2 + React 19.** Before using any Next.js API (routing, data fetching, config, metadata, etc.), check `node_modules/next/dist/docs/` — this version has breaking changes vs. training data. Do not assume Pages Router or older App Router conventions apply.

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (flat config, eslint.config.mjs)
```

There is no test suite/runner configured in this repo.

## Architecture

Single-page personal portfolio (App Router, all client components except the root layout).

- **`app/layout.tsx`** — root layout. Sets up the `Inter` font, page metadata, and an inline pre-hydration script that reads `theme` from `localStorage` (defaults to `dark`) and toggles the `dark` class on `<html>` before paint, to avoid a flash of wrong theme. Wraps children in `LayoutContent`.
- **`components/LayoutContent.tsx`** — client wrapper rendering `Navbar` + `FloatingActions` around page content on every route.
- **`app/page.tsx`** — the entire home page is one file that composes section components in order: hero (inline) → `InteractiveTerminal` → `ExperienceSectionNew` → `SkillsSection` → `ProjectsSection` → `ContactSection` → `Footer`. Sections are plain siblings in `<main>`, navigated via in-page anchor IDs (e.g. `#projects`) and `scrollIntoView`.
- **`app/projects/page.tsx`** — standalone `/projects` route showing the full project grid (same data source as the home page's `ProjectsSection`).
- **`app/api/contact/route.ts`** — POST route handler for the contact form; sends email via `resend` (`RESEND_API_KEY` env var) with an inline HTML email template. Returns `Response.json` with `{ error }` or `{ success, message }`.
- **`lib/data.ts`** — single source of truth for project data (`projects` array: id, title, description, image, repoUrl, demoUrl, tech[]) consumed by both `ProjectsSection` and `app/projects/page.tsx`.
- **`components/ThemeToggle.tsx`** — flips the `dark` class on `<html>` and persists to `localStorage('theme')`, in sync with the inline script in `layout.tsx`.

### Theming

Dark/light theme is class-based (`.dark` on `<html>`), driven by CSS custom properties defined in `app/globals.css` and re-exposed through Tailwind v4's `@theme` block (`--color-bg`, `--color-primary`, `--color-accent`, `--color-surface`, `--color-text-primary`, `--color-text-secondary`). Components reference these via `var(--color-*)` in arbitrary-value Tailwind classes (e.g. `bg-[var(--color-bg)]`) rather than hardcoded Tailwind color tokens, so both themes stay in sync. New UI should follow this pattern instead of introducing raw hex/zinc values for anything that needs to adapt between themes.

### Conventions used throughout components

- `'use client'` on nearly every component — animations (Framer Motion) and browser APIs (`localStorage`, `scrollIntoView`) require it.
- Section backgrounds commonly layer a decorative dot-grid: `bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px]`.
- Framer Motion entrance pattern: `initial={{ opacity: 0, y: ... }}` → `animate`, respecting `useReducedMotion()` where used.
- Path alias `@/*` maps to the repo root (see `tsconfig.json`), e.g. `@/lib/data`, `@/components/Footer`.

### UI/UX changes

For any design/layout/visual work, use the `ui-ux-portfolio` skill (`.claude/skills/ui-ux-portfolio/SKILL.md`) — it encodes this project's stack rules (Tailwind utilities only, Framer Motion for animation, `next/image`/`next/link`) and review format.
