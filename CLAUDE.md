# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Production build
pnpm start      # Run production server
pnpm lint       # Run ESLint
```

## Architecture

Single-page Next.js 15 site using the App Router. The entry point is [app/page.tsx](app/page.tsx), which assembles all section components in order. [app/layout.tsx](app/layout.tsx) handles fonts (Playfair Display, DM Sans, DM Mono), metadata, and Vercel Analytics.

**Section components** (in [components/](components/)) render each page section top-to-bottom:
`navigation` → `hero-section` → `marquee-strip` → `about-section` → `expertise-section` → `speaking-section` → `process-section` → `tools-section` → `contact-section` → `footer`

**Cross-cutting concerns:**
- `scroll-reveal.tsx` — Intersection Observer wrapper; wrap any element with `<ScrollReveal>` for fade-up animation on scroll
- `custom-cursor.tsx` — Global custom cursor (dot + lagging ring); rendered once in the root layout
- `theme-provider.tsx` — next-themes wrapper; site is dark-only so this is set up but not actively toggled

**Styling:** Tailwind CSS 4 with custom CSS variables in [app/globals.css](app/globals.css). Brand tokens:
- `--coral` (#EA6A47) — primary accent
- `--charcoal` (#2A2A2A) — background
- `--cream` (#F5EFE0) — primary text

**UI primitives:** [components/ui/](components/ui/) contains ~40 shadcn/ui (New York style) components. Most are unused on this single-page site but available. The `cn()` utility is in [lib/utils.ts](lib/utils.ts).

**Animations:** Framer Motion powers scroll reveal. The hero has a hand-written SVG animated network diagram (`hero-section.tsx`). Marquee and fadeUp keyframes are defined in [app/globals.css](app/globals.css).

## Key Config

- `next.config.mjs` — TypeScript build errors suppressed (`ignoreBuildErrors: true`); images unoptimized (suitable for static/Vercel deploy)
- `tsconfig.json` — Path alias `@/*` maps to the project root
- `components.json` — shadcn/ui config; run `pnpm dlx shadcn@latest add <component>` to add new UI primitives
