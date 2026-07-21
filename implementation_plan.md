# Remove light theme entirely, dark mode only

## Context
The site currently supports light/dark theme switching: a pre-hydration script in `app/layout.tsx` reads `theme` from `localStorage` (defaulting to dark) and toggles the `.dark` class on `<html>`, `components/FloatingActions.tsx` renders a floating toggle button that flips the class and persists the choice, `app/globals.css` defines a full light palette in `:root` plus dark overrides in `.dark`, and 11 component files carry ~85 `dark:` Tailwind variant classes pairing a light style with a dark style.

The goal: **fully remove the light theme from every component**, not just make dark the permanent default while leaving light-mode code dormant. End state: no toggle, no light CSS values anywhere, no `dark:` variants left to strip because there's only one theme.

## Changes

**1. `app/layout.tsx`**
- Remove the inline `theme-initializer` `<script>` block entirely (no localStorage/theme concept left at all).
- Add `dark` directly to the `<html>` element's `className` (alongside `inter.variable h-full antialiased`) purely so Tailwind's `dark:` scanner and any residual `.dark`-scoped selectors keep working during the transition — this becomes moot once step 2 removes the CSS split, but costs nothing to include.

**2. `components/FloatingActions.tsx`**
- Remove the `theme` state, the `useEffect` reading `document.documentElement.classList`, and `toggleTheme`.
- Remove the `if (!theme) return null;` guard.
- Remove the "Theme Toggle Button" `<button>` block and its `HiOutlineSun`/`HiOutlineMoon` imports.
- Keep the WhatsApp floating link as-is, now rendering unconditionally.
- The one `dark:shadow-[...]` on the WhatsApp link gets merged per the pattern in step 4.

**3. `components/ThemeToggle.tsx`**
- Delete this file — unused/orphaned (confirmed via grep, not imported anywhere) and duplicates the toggle logic being removed from `FloatingActions.tsx`.

**4. `app/globals.css` — collapse to a single palette**
- Replace the `:root { ... }` block's light values with the current `.dark { ... }` block's values (the dark palette becomes the only palette): `--color-bg: #0a0a0a`, `--color-surface: #1E2937`, `--color-text-primary: #F1F5F9`, `--color-text-secondary: #94A3B8`, `--color-primary`/`--color-accent` unchanged (identical in both today).
- Delete the separate `.dark { ... }` block entirely (no longer needed).
- Delete the `@custom-variant dark (&:where(.dark, .dark *));` line — once no component uses `dark:`, this is dead.
- `@theme` block and `@layer base` stay as-is (they just reference the CSS vars, which now only ever hold one value).

**5. Component sweep — strip `dark:` variants from all 11 files that use them**
Pattern observed everywhere (confirmed by grep across `AboutSection.tsx`, `ContactSection.tsx`, `ExperienceSectionNew.tsx`, `Navbar.tsx`, `ProjectsSection.tsx`, `SkillsSection.tsx`, `Footer.tsx`, `InteractiveTerminal.tsx`, `app/page.tsx`, `app/projects/page.tsx`, `FloatingActions.tsx`): a light-mode class sits right next to its `dark:`-prefixed counterpart, e.g. `border-zinc-200 dark:border-zinc-800`, `bg-zinc-50/50 dark:bg-zinc-900/40`, `text-zinc-700 dark:text-zinc-400`. For every such pair:
  - Delete the light-mode class token and the `dark:` prefix, keeping only the value that was under `dark:` (e.g. `border-zinc-200 dark:border-zinc-800` → `border-zinc-800`).
  - Where the base already reads a CSS variable that now permanently holds the dark value (e.g. `text-[var(--color-text-primary)] dark:text-white`), just drop the redundant `dark:text-white` override and keep the variable class.
  - Where `dark:` adds a standalone enhancement with no light counterpart (e.g. `SkillsSection.tsx`'s `opacity-10 dark:opacity-20` and `dark:[filter:drop-shadow(...)]`, or shadow boosts like `dark:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.6)]` in `Navbar.tsx`), drop the `dark:` prefix and keep that utility applied unconditionally, discarding the now-orphaned lighter value it was paired with (if any).
- After this sweep, `grep -rn "dark:" components/ app/` (excluding this plan/docs) should return no matches.

## Verification
- `npm run dev` — visually check every section (hero, terminal, experience, skills, projects, contact, footer, navbar, floating actions) renders identically to how it currently looks in dark mode, with no light-colored artifacts.
- Confirm no toggle button remains in the floating-actions cluster (only WhatsApp button).
- `grep -rn "dark:" components/ app/` returns nothing (confirms full removal).
- `npm run lint` — catches unused imports (`HiOutlineSun`/`HiOutlineMoon`) and any stray issues from the class edits.
- `npm run build` to make sure Tailwind still compiles cleanly with the simplified `globals.css` (no references to a now-deleted `.dark` selector anywhere).
