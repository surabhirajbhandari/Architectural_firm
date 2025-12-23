# Architectural Firm Website (from Figma Make)

This project is a Vite + React + Tailwind CSS v4 site generated from Figma Make.

## What’s included
- React app entry in `src/main.tsx`
- Your site components in `src/app/*`
- Styles in `src/styles/*`
- Vite + Tailwind plugin config in `vite.config.ts`
- Licensing attributions in `ATTRIBUTIONS.md`

## Run locally

1) Install Node.js (LTS).
2) From this folder:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (commonly `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy (recommended)

### Option A: Vercel (simplest)
1) Create a GitHub repo and push this folder.
2) On Vercel: **New Project** → import the repo.
3) Vercel will auto-detect **Vite**. Click **Deploy**.

### Option B: Netlify
1) Build locally: `npm run build`
2) Upload the `dist/` folder to Netlify (or connect via GitHub).

## Notes
- Tailwind v4 is configured via `@tailwindcss/vite`; no extra PostCSS plugins are needed.
