# Spec: Hero + Metrics bar

- **Type:** section
- **Status:** built
- **Last updated:** 2026-06-24
- **Related:** specs/landing.md · src/components/Hero.astro · src/components/MetricsBar.astro

## 1. Goal

First impression. In one screen, make a recruiter trust Felipe's production AI
experience and give the AI-eng visitor a reason to keep scrolling. Sets the
dark-precision / editorial tone and the motion language for the rest of the page.

## 2. Audience & intent

Both audiences. Recruiter: "senior, ships in production, measurable impact, AWS
certified." Community: "this person builds real agent/LLM systems — worth following."

## 3. Content (from CV — real data)

**Hero**
- Eyebrow: `Lead AI Engineer · AWS Solutions Architect · Medellín, CO`
- Heading (EN): "I build agent & LLM systems that run in production."
- Heading (ES): "Construyo sistemas de agentes y LLM que viven en producción."
- Subcopy: orchestration, RAG, secure tool execution on AWS + eval/observability/cost
  control at scale.
- CTAs: primary "Get in touch" → **LinkedIn** (neutral/professional, low-signal — not a
  "hire me" mailto), secondary "Download CV" (`/felipe-florez-cv.pdf`). Email stays in
  the footer for direct contact. Copy is deliberately neutral — no "open to work" wording
  (Felipe is employed; the goal is to be reachable without signaling active job-seeking).
- Portrait: `src/assets/felipe-florez.png` via `astro:assets` `<Image>`.

**Metrics bar (proof)** — `src/data/metrics.ts`
1. `57→80%` — first-version resolution uplift (NOUSWARE).
2. `~40%` — cloud cost reduction via tiered model routing.
3. `6+` — years shipping software (since 2020).
4. `3×` — AWS certifications (SAA-C03, CLF-C02, AIF-C01; DVA-C02 in progress).

## 4. Layout & UX

- Header (sticky, transparent→solid on scroll): wordmark `Felipe Florez` · LanguageToggle · CV link.
- Hero: asymmetric two columns on `lg` (text left, portrait right); stacks on mobile.
  Generous vertical rhythm, large editorial headline, `max-w` constrained measure.
- Metrics bar: full-width band below hero; 4 stats in a responsive row (2×2 on mobile).
- Footer: name/role, LinkedIn, email, "built with SDD".

## 5. Motion

`transform`/`opacity` only. Lenis smooth scroll (global). GSAP: hero intro timeline on
load (eyebrow → heading → subcopy → CTAs → portrait, staggered); metrics reveal on
scroll via ScrollTrigger. All disabled under `prefers-reduced-motion` (content visible
by default; JS only animates when motion is allowed).

## 6. Acceptance criteria

- [x] Real CV content, EN + ES
- [x] Responsive (stacks on mobile, 2-col on lg; metrics 2×2 → row)
- [x] Motion respects reduced-motion; only transform/opacity
- [x] `npm run build` + `npm run astro check` pass
- [x] Portrait optimized via `astro:assets`

## 7. Out of scope

Projects bento, about, skills, experience, contact form (later specs). CTAs use mailto +
CV download until a contact section exists.

## 8. Open questions

- Resolved: primary CTA → LinkedIn; email (`pipeflorez_99@hotmail.com`) in footer; copy
  kept neutral (no job-seeking signal).
