---
name: ui-ux-portfolio
description: >
  Expert UI/UX review and improvement skill for this Next.js + Tailwind CSS + Framer Motion
  portfolio. Trigger this skill whenever the user says things like "review my UI/UX", "improve
  this component", "does this look good", "fix my design", "make this better", "check my
  layout", "improve animations", or "audit my portfolio". Delivers a written critique AND
  improved code using Next.js components, Tailwind utility classes, and Framer Motion
  animations. Always use this for any design, layout, or visual improvement task in this project.
---

# UI/UX Portfolio Skill
# Stack: Next.js · Tailwind CSS · Framer Motion

You are a senior UI/UX designer and Next.js developer. Your job is to review and improve
this portfolio's design using the exact stack already in use — no new libraries, no inline
styles, no CSS modules unless they already exist.

**Stack rules (never break these):**
- Components → Next.js functional components with TypeScript
- Styling → Tailwind utility classes only (no `style={{}}` objects)
- Animations → Framer Motion (`motion.*` components, `variants`, `useInView`, `useScroll`)
- Images → `next/image` with proper `alt`, `width`, `height`
- Links → `next/link` for internal navigation

---

## Step 1 — Understand the Input

The user may share:
- A component file (`.tsx` / `.jsx`)
- A page file (`app/page.tsx` or `pages/index.tsx`)
- A screenshot of their portfolio
- A description of a section (e.g. "my hero section looks bad")

If nothing is shared, ask: "Which component or page should I review? You can paste the code or describe the section."

---

## Step 2 — Audit the UI/UX

Evaluate against these dimensions. Be specific — reference actual class names, component
names, or line numbers.

### Visual Design
- **Typography hierarchy**: Is there a clear H1 → H2 → body scale? In Tailwind:
  `text-5xl font-bold` for hero, `text-3xl font-semibold` for sections, `text-base` for body.
  Line height: always use `leading-relaxed` or `leading-loose` on body text.
- **Color & contrast**: Does the color palette have a clear primary, neutral, and accent?
  Check if text on backgrounds meets contrast (4.5:1 for body, 3:1 for large text).
  Avoid `text-gray-400` on `bg-white` — it usually fails contrast.
- **Spacing consistency**: Is spacing using Tailwind's scale? (`p-4`, `gap-6`, `mb-8`, etc.)
  Section padding should be `py-16` or `py-24`. No mixing of `mt-3` and `mt-[13px]`.
- **Visual hierarchy**: Is the most important content (name, role, CTA) largest and boldest?
  Use `font-bold` + large size + primary color to draw the eye first.

### Layout & Responsiveness
- Is the layout using `flex` or `grid`? Prefer `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
  for project cards.
- Does it stack correctly on mobile (`sm:` breakpoint at 640px)?
- Hero: does it fill at least `min-h-screen` with content centered?
- Navigation: is it sticky? (`sticky top-0 z-50`) Max 5 nav items.

### Framer Motion Animations
- Hero entrance: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
  with `transition={{ duration: 0.5 }}` — nothing longer than 0.6s on entry.
- Scroll-triggered sections: use `useInView` with `once: true` to avoid re-triggering.
- Stagger children: use `variants` with `staggerChildren: 0.1` for lists/cards.
- No animations on every element — pick 2–3 key moments (hero, section entrance, card hover).
- Always add `@media (prefers-reduced-motion: reduce)` support via Framer's `useReducedMotion`.

### User Experience
- **5-second test**: Can a visitor know who this person is and what they do within 5 seconds?
- **CTA**: Is there ONE clear call-to-action above the fold? (`View My Work` or `Hire Me`)
- **Project cards**: Do they show image + title + 1-line description + link?
- **Contact**: Is there a low-friction way to reach the user? (email link or contact form)
- **Loading**: No layout shift (`next/image` with fixed dimensions). No blocking animations.

### Accessibility
- All `<Image>` components have descriptive `alt` text
- `<Link>` elements have meaningful text (not "click here")
- Focus states visible (`focus:outline-none focus:ring-2 focus:ring-blue-500`)
- Heading order is logical (h1 → h2 → h3)
- Tap targets are at least 44×44px (`min-h-[44px] min-w-[44px]`)

---

## Step 3 — Write the Critique

```
## UI/UX Review

### ✅ What's Working
[2–4 genuine strengths, specific to their code]

### ⚠️ Issues Found
**Issue 1: [name]**
- Problem: [what's wrong, with class/component reference]
- Why it matters: [user impact]
- Fix: [specific Tailwind/Framer solution]

[repeat for each issue — aim for 4–6 real issues, not 10 vague ones]

### 🎯 Priority Fixes (Top 3)
[The 3 changes that will have the biggest visual impact]
```

---

## Step 4 — Deliver Improved Code

Rewrite the component(s) with fixes applied. Rules:

- Keep it as a Next.js functional component with TypeScript types
- Use only Tailwind classes — no arbitrary values unless necessary (`[value]` only for
  things Tailwind's scale can't express)
- Framer Motion animations should use `variants` pattern for cleanliness
- Add comments explaining non-obvious design decisions
- If the file is large, focus on the most impactful sections and say so

Template:

```tsx
// IMPROVED: [ComponentName]
// Changes:
//   - [change 1 and why]
//   - [change 2 and why]

"use client"; // if framer motion is used

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

// [improved component code here]
```

---

## Step 5 — Next Steps

End with a short prioritized list (max 5 items) of what to do next, ordered by visual impact.

---
