---
name: og-image
description: Generate a 1200×630 Open Graph image (dark/editorial, matching the site tokens) by rendering an HTML card with headless Chromium. Use for the default site OG image and for per-project OG images (proyecto.felipeflorez.dev case studies). Output goes to public/og/<name>.png.
---

# Skill: og-image

Generates a 1200×630 OG image with the site's dark/editorial look. Self-contained (the
portrait is inlined; no network), reproducible, and version-controlled. Backed by
`scripts/gen-og.mjs` + headless Chromium.

## Requirements
- `chromium` on PATH (used headless).
- `node` (uses `scripts/gen-og.mjs`).

## Default site image
```bash
node scripts/gen-og.mjs            # → public/og/default.png
```
Already referenced by `BaseLayout.astro` (`ogImage = "/og/default.png"`).

## Per-project image
```bash
node scripts/gen-og.mjs \
  --title "Project Name" \
  --eyebrow "AGENT · CASE STUDY" \
  --subtitle "One-line what it does / the result." \
  --wordmark "slug.felipeflorez.dev" \
  --no-portrait \
  --out public/og/<slug>.png
```
Then set the project's `ogImage` in `src/data/projects.ts` to `/og/<slug>.png` and pass
it to the case-study page's `<BaseLayout ogImage=...>`.

## Flags (see scripts/gen-og.mjs)
- `--title` (default "Felipe Florez")
- `--eyebrow` (default role line)
- `--subtitle` (default tagline)
- `--wordmark` (default "felipeflorez.dev")
- `--no-portrait` (omit the photo — recommended for project cards)
- `--out` (default `public/og/default.png`)

## Steps
1. Run the command above for the target image.
2. Verify it is exactly 1200×630 (`identify` / `file`) and looks right (open the PNG).
3. Remove the temp `.html` the script writes next to the `.png` (gen-og leaves it; delete it).
4. `npm run build` then `npm run deploy` (the OG PNG is an immutable asset; the deploy
   invalidates CloudFront so the new image is served).
5. Validate the live URL returns `200 image/png` and (optionally) re-scrape on LinkedIn's
   Post Inspector so the card refreshes.

## Notes
- Keep titles short; the card uses a large display size. Fonts are system fonts in
  headless Chromium (clean sans + mono) — no web fonts needed.
- Commit the generated PNG (it lives in `public/`, a public asset).
