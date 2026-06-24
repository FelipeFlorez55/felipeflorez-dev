# Spec: <Section or Project name>

> Spec-Driven Development: write/approve this before implementing. Keep it short and
> decision-oriented. Copy this file to `specs/sections/<name>.md` (a landing section)
> or `specs/projects/<slug>.md` (a weekend project) and fill it in.

- **Type:** section | project
- **Status:** draft | approved | built
- **Last updated:** YYYY-MM-DD
- **Related:** specs/landing.md · <links to components/pages>

## 1. Goal

One or two sentences: what this delivers and why it earns its place on the page.

## 2. Audience & intent

Which audience is this primarily for — (1) recruiters/enterprise, (2) AI-eng community —
and what should they think/do after seeing it?

## 3. Content

The actual copy, data, and assets. Be concrete (real words, not lorem). For data-driven
sections, name the source (e.g. `src/data/projects.ts`).

## 4. Layout & UX

Structure, hierarchy, responsive behavior (mobile → desktop). A rough ASCII sketch is
welcome. Note any Starwind components needed.

## 5. Motion

Allowed: **`transform` + `opacity` only** (GSAP/Lenis). Describe entrance/scroll
behavior. Must degrade gracefully under `prefers-reduced-motion`.

## 6. Acceptance criteria

- [ ] Matches the content & layout above
- [ ] Responsive at sm / md / lg
- [ ] Motion respects reduced-motion; only transform/opacity
- [ ] `npm run build` + `npm run astro check` pass
- [ ] (project) demo subdomain + repo link + OG image present

## 7. Out of scope

What this spec explicitly does NOT cover (prevents scope creep).

## 8. Open questions

Anything needing a decision before/while building.

---

## Project-only fields (delete for section specs)

- **Slug:** `<slug>` → `/projects/<slug>` and `<slug>.felipeflorez.dev`
- **Category:** agent | tool | calculator | game | experiment
- **Repo:** <public repo URL>
- **Demo:** `https://<slug>.felipeflorez.dev` (TODO until subdomain wired)
- **OG image:** `/og/<slug>.png` (TODO until generated)

### Case study — Problem → My role → Tradeoff → Metric

- **Problem:** the real constraint (latency / cost / accuracy / scale).
- **My role:** what *I* designed and built (own the decisions).
- **Tradeoff:** what was given up and why.
- **Metric:** the measured outcome (or what you'd measure next).
