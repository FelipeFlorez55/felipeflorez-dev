# Spec: Landing page

> Master spec for `felipeflorez.dev`. This is the **section inventory** — the order and
> intent of every block on the home page. Each section gets its own detailed spec in
> `specs/sections/<name>.md` (created when we build it), using `_template.md`.

- **Status:** in progress — Hero + Metrics built; remaining sections planned
- **Last updated:** 2026-06-24

## Goal

A single, fast, dark-editorial page that, in one scroll, makes a recruiter trust Felipe's
production AI experience and makes an AI engineer want to follow the weekly builds.

## Audiences

1. **Recruiters / enterprise clients** — credibility, proof, hireability.
2. **AI-engineering community** — the build-in-public cadence and the projects.

## Section inventory (in page order)

| #   | Section              | Purpose / what it proves                                                | Primary audience | Status   | Spec |
| --- | -------------------- | ---------------------------------------------------------------------- | ---------------- | -------- | ---- |
| 1   | **Hero**             | Who Felipe is in one line + clear CTA; sets the dark-precision tone     | both             | ✅ built | `specs/sections/hero.md` |
| 2   | **Metrics / proof**  | Hard numbers bar (resolution uplift, cost, years, AWS certs)           | recruiters       | ✅ built | `specs/sections/hero.md` |
| 3   | **About**            | Short narrative: AI engineer shipping agent/LLM systems on AWS          | both             | planned  | `specs/sections/about.md` |
| 4   | **Skills (grouped)** | Capabilities by group: RAG, orchestration, eval/observability, routing, MCP, guardrails, AWS, infra | both | planned | `specs/sections/skills.md` |
| 5   | **Experience**       | Roles & impact, senior framing                                         | recruiters       | planned  | `specs/sections/experience.md` |
| 6   | **Projects (bento)** | Filterable bento grid of weekend builds; the signature section         | both             | planned  | `specs/sections/projects.md` |
| 7   | **How I build / SDD**| The Spec-Driven Development process; why the work is trustworthy        | both             | planned  | `specs/sections/how-i-build.md` |
| 8   | **Content / links**  | Writing, talks, socials, build-in-public cadence                       | community        | planned  | `specs/sections/content.md` |
| 9   | **Certifications**   | Credentials (AWS, etc.)                                                | recruiters       | planned  | `specs/sections/certifications.md` |
| 10  | **Contact**          | Low-friction way to reach out / hire                                   | recruiters       | planned  | `specs/sections/contact.md` |

## Cross-cutting requirements

- **Aesthetic:** dark precision / editorial — generous whitespace, restrained motion.
- **i18n:** every section ships in **English (default, `/`) and Spanish (`/es/`)**.
  Copy lives in `src/i18n/ui.ts`; never hardcode user-facing strings in components.
  Language auto-detects on first visit and is switchable via the persisted toggle.
- **Motion:** GSAP + Lenis; `transform`/`opacity` only; reduced-motion safe.
- **Navigation:** native Astro View Transitions between home and `/projects/<slug>`.
- **Data:** projects bento is driven by `src/data/projects.ts`.
- **SEO/OG:** every route sets title/description/OG via `BaseLayout`.
- **Perf:** static output, inline critical CSS, no layout-shift on load.

## Build order (proposed)

1. **Hero + Metrics** (sections 1–2) — the first impression, highest leverage.
2. Projects bento (6) + first `new-project` to prove the loop end-to-end.
3. About / Skills / Experience (3–5).
4. How I build (7), Content (8), Certifications (9), Contact (10).

## Out of scope (for the landing master spec)

Per-section copy, exact component APIs, and animation timings — those live in each
section's own spec.
