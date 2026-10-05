# ByteSpace — Learn Job-Ready Skills

Frontend implementation of the **ByteSpace New Check** Figma design.

**Live demo:** https://bytespace-lime-phi.vercel.app

![ByteSpace home page](docs/bytespace-home.png)

## Stack

React 19 + Vite, react-router-dom, plain CSS with Figma design tokens.
Fonts: Poppins (Google Fonts), Satoshi and Clash Display (Fontshare).

## Run

```bash
npm install
npm run dev       # dev server
npm run build     # production build
npm run lint      # oxlint
```

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/search` | Search with filters and pagination |
| `/courses/:slug` | Course details (About / Lesson / Reviews) |
| `/creator` | Creator profile |
| `/login`, `/register` | Auth pages (frontend-only validation) |
| any other | 404 |

## Structure

`src/components` · `src/pages` · `src/data` · `public/images`
Design tokens (colors, type, radius) are in `src/index.css`.

## Notes

- Auth is frontend-only: no backend, no confirm-password (the Figma frame has none).
- Built with Vite rather than Next.js to keep the exact Figma measurements.
