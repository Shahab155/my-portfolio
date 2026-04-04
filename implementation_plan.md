# Harmonizing Contact Section and Extracting Footer

The goal is to update the `ContactSection` to match the design system used in other sections (About, Skills) and ensure it fully supports both light and dark themes. Additionally, the footer will be extracted into its own component for better modularity.

## User Review Required

> [!IMPORTANT]
> The `ContactSection` background will change from a fixed dark color (`#0a0a0a`) to a theme-aware background (`var(--color-bg)`). This will ensure consistency across the entire portfolio in both Light and Dark modes.

## Proposed Changes

### [Contact Section]

#### [MODIFY] [ContactSection.tsx](file:///d:/portfolio/components/ContactSection.tsx)
- Update `<section>` background to `bg-[var(--color-bg)]`.
- Replace the hardcoded dot grid with the dynamic one used in `AboutSection`: 
  `<div className="absolute inset-0 bg-[radial-gradient(#334155_0.8px,transparent_1px)] dark:bg-[radial-gradient(#475569_0.8px,transparent_1px)] bg-[length:20px_20px] opacity-40" />`.
- Update section label and heading component text colors to use `var(--color-accent)` and `var(--color-text-primary)`.
- Refactor `infoCards` (lines 160+) to use `bg-zinc-50/50 dark:bg-zinc-900/50` and `border-zinc-200/50 dark:border-zinc-800/50`.
- Refactor form inputs (line 64) and container to use theme-aware backdrop (e.g., `bg-zinc-50 dark:bg-zinc-900/50`).
- Remove the footer section (lines 302-312).

### [Footer Component]

#### [NEW] [Footer.tsx](file:///d:/portfolio/components/Footer.tsx)
- Create a new component containing the footer logic.
- Use `border-t border-zinc-200 dark:border-zinc-800` for separation.
- Use theme variables for text colors (`text-zinc-600 dark:text-zinc-500`).

### [Page Update]

#### [MODIFY] [page.tsx](file:///d:/portfolio/app/page.tsx)
- Import `Footer`.
- Add `<Footer />` after the `<ContactSection />`.

## Open Questions

- Should the footer have the same dot grid background as the sections? (I will assume no grid for now to delineate it from content sections).

## Verification Plan

### Automated Tests
- N/A (UI focused)

### Manual Verification
- Toggle light/dark mode using the theme button to ensure `ContactSection` and `Footer` look professional in both modes.
- Verify that the background grid in `ContactSection` matches the ones in `AboutSection` and `SkillsSection`.
- Ensure the form remains readable and functional in both themes.
