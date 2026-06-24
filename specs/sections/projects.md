# Spec: Projects (bento)

- **Type:** section · **Status:** built (empty-state live; cards populate via `new-project`)
- **Last updated:** 2026-06-24
- **Related:** specs/landing.md · src/components/Projects.astro · src/data/projects.ts ·
  .claude/skills/new-project

## Goal
The signature section: a filterable **bento grid** of weekend builds that proves the
build-in-public cadence. Each project = demo on a subdomain + public repo + case study.

## Audience & intent
Both. Community: see the cadence and the work. Recruiter: evidence of shipping range.

## Content (data-driven, `src/data/projects.ts`)
Each `Project`: slug, title, category, summary, date, repoUrl, demoUrl, ogImage, stack,
status (`live`/`wip`), optional `featured` + `bentoSpan`. Categories: agent, tool,
calculator, game, experiment. Currently empty → elegant empty state with a GitHub CTA.

## Layout & UX
- Filter chips: "All" + the categories that actually have projects (active = accent).
- Bento grid: `grid-cols-1 → 2 → 3`; `bentoSpan` md/lg widen a card (`col-span-2`).
- Card: category + status, title (stretched link to `/projects/<slug>`), summary, stack
  chips, demo + source links. Hover lift (transform only).
- Empty state: dashed panel + "first builds shipping soon" + GitHub link.

## Motion
`data-reveal` on header + grid/empty; card hover = `translate-y` only. Reduced-motion safe.
Filtering toggles `hidden` (instant, no animation) — re-binds on `astro:page-load`.

## Acceptance criteria
- [x] EN + ES (incl. category + status labels) · [x] responsive · [x] reduced-motion safe
- [x] build + check pass · [x] empty state renders · [x] filter logic ready for data

## Out of scope / TODO
- Localized case-study routes: skill currently scaffolds `src/pages/projects/<slug>.astro`
  (EN). Add `src/pages/es/projects/` when we localize case studies.
- Per-card OG image + subdomain demo wiring (future `og-image` / `deploy` skills).
