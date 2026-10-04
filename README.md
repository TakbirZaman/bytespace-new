# ByteSpace — Learn Job-Ready Skills

Pixel-faithful implementation of the **ByteSpace New Check website** Figma design (Home, Search, Course Details/Lessons/Reviews, Creator Profile, Login, Register, 404).

**Live demo:** https://bytespace-lime-phi.vercel.app

![ByteSpace home page](docs/bytespace-home.png)

## Stack

- React 19 + Vite (JavaScript)
- react-router-dom (client routing)
- Plain CSS with Figma design tokens
- Fonts: Poppins (headings), Satoshi + Clash Display via Fontshare/Google Fonts

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

## Project structure

- `src/components` — shared interface components
- `src/pages` — route-level screens
- `src/data` — course, creator, and image data
- `public/images` — images served as static assets

## Design tokens (`src/index.css`)

- Blue: Persian Blue/800 `#003BE2` (120px grid @12% on blue frames)
- Lime: Electric Lime/400 `#D4FB20`, 500 `#CBFC01`
- Type: Poppins SemiBold headings (72/44/36/20), Satoshi body/labels, Clash Display logo
- Radius: cards 24px, pills 24–100px; page grid 12 cols, 120px margins

## Notes and assumptions

- Auth submit is **frontend only** (custom validation: required fields, email format, 8-char passwords; loading state; no backend). Guideline asked for a confirm-password field on Register, but the Figma frame has only Full Name / Email / Password, so Figma won.
- Images live in `public/images/` and are referenced from `src/data` and the components.
- Reviewer checklist: componentized sections, semantic tags, alt/aria labels, responsive at 375/768/1024/1440, `npm run lint` and `npm run build` pass.
