# Women of Punk

A gift site. A history in noise.

Static Next.js 14 (App Router, `output: 'export'`), Tailwind, TypeScript. Deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

Site at http://localhost:3000

## Build

```bash
npm run build
```

Produces `out/` (plus `.nojekyll`).

## Deploy

For GitHub Pages on a project subpath:

```bash
NEXT_PUBLIC_BASE_PATH=/Women-of-Punk npm run build
npm run deploy
```

For a root domain or user pages, omit `NEXT_PUBLIC_BASE_PATH`.

## Content

All curated content lives in `src/lib/data/`:

- `bands.ts`, `albums.ts` — Sound
- `films.ts`, `docs.ts` — Screen
- `books.ts`, `articles.ts` — Page
- `quotes.ts` — Voices

Each file exports a typed array (currently empty). A separate agent is curating the actual content.

## Visual system

Palette: ink `#0a0a0a`, paper `#f5f1ea`, blood `#e10600`. That&rsquo;s it.

Fonts: Anton (shouting headers), Special Elite (typewriter callouts), Inter (body).

CSS tokens used throughout (`src/app/globals.css`):

- `.shout` / `.shout-tight` — Anton, uppercase, tight tracking
- `.type` — Special Elite typewriter
- `.zine-card` — paper bg, thick black border, slight rotation, drop-shadow; variants `.tilt-l`, `.tilt-r`, `.inverted`
- `.censor-bar` — red horizontal block as section break (`.thin`, `.ink` variants)
- `.tape` — angled paper strip with shadow (`.yellow`, `.right` variants)
- `.torn-bottom` / `.torn-top` — zigzag clip-path
- `.ransom` — ransom-note style spans with alternating rotations
- `.ticker` — black bar full-caps divider
- `.sticker` — small angled red label
- `.quote-mark` — oversized serif open-quote
- `.outline-text` — text-stroke outline display

Built as a gift for a friend who&rsquo;s awesome.
