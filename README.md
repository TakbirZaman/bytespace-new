# ByteSpace — Learn Job-Ready Skills

Pixel-faithful implementation of the **ByteSpace New Check website** Figma design (Home, Search, Course Details/Lessons/Reviews, Creator Profile, Login, Register, 404).

## Stack

- React 19 + Vite (JavaScript, no TypeScript — see note below)
- react-router-dom (client routing)
- Plain CSS with Figma design tokens (no Tailwind — see note below)
- Fonts: Poppins (headings), Satoshi + Clash Display via Fontshare/Google Fonts

> Note: the brief suggested Next.js + TypeScript + Tailwind, but the project was already built pixel-to-spec in React + Vite + CSS before that brief arrived, so we stayed on Vite to keep the exact Figma measurements. All pages, tokens and responsive behavior from the brief are implemented here.

## How to run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build (outputs dist/)
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Routes

| Route | Page |
|---|---|
| `/` | Home (hero, partners, categories, course grid, learning paths, growth, creator CTA, testimonials) |
| `/search` (`/courses` redirects here) | Find Your Next Course + filters + category tabs + pagination |
| `/courses/:slug` | Course Details with About / Lesson / Reviews tabs + enroll sidebar |
| `/creator` | Creator Profile (PurePearl Studio) |
| `/login`, `/register` | Bonus auth pages with frontend-only validation + fake submit |
| any other | 404 (gradient giant + Back to Home) |

## Design tokens (`src/index.css`)

- Blue: Persian Blue/800 `#003BE2` (120px grid @12% on blue frames)
- Lime: Electric Lime/400 `#D4FB20`, 500 `#CBFC01`
- Type: Poppins SemiBold headings (72/44/36/20), Satoshi body/labels, Clash Display logo
- Radius: cards 24px, pills 24–100px; page grid 12 cols, 120px margins

## Notes and assumptions

- Auth submit is **frontend only** (custom validation: required fields, email format, 8-char passwords; loading state; no backend). Guideline asked for a confirm-password field on Register, but the Figma frame has only Full Name / Email / Password, so Figma won.
- Course thumbnails, avatars and person photos are CSS gradient placeholders — export real PNGs from Figma into `public/images/` to replace `.cc-thumb`, `.hero-person`, `.detail-cover`, etc.
- Reviewer checklist: real components per section (`src/components`, `src/pages`, `src/data`), semantic tags, alt/aria labels, responsive at 375/768/1024/1440, `npm run lint` + `npm run build` green.
