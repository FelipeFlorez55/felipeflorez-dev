# Spec: Experience

- **Type:** section · **Status:** built · **Last updated:** 2026-06-24
- **Related:** specs/landing.md · src/components/Experience.astro · src/data/experience.ts

## Goal
Show a credible, senior trajectory with metric-led impact — not a duties list.

## Audience & intent
Recruiter: scope, seniority, measurable outcomes. Community: real production work.

## Content (from CV, data-driven in `src/data/experience.ts`, newest-first)
SoftServe (R&D Engineer, AI) · NOUSWARE (AI Engineering Lead — 57→80%, ~40% cost) ·
Ivanti (Integration Engineer — 18+ workflows, ~35% triage) · Ivanti (Support L2 — 80+
incidents, MTTR ~28%) · Floes Connecting (Founder, IoT). Each: role, company, period,
location, 2 metric-led highlights. All localized EN/ES.

## Layout & UX
List/timeline with a top border per row; two columns on `lg` (period/location left,
role + company + bullets right); stacks on mobile.

## Motion
`data-reveal` per row; reduced-motion safe.

## Acceptance criteria
- [x] EN + ES · [x] responsive · [x] reduced-motion safe · [x] build + check pass

## Out of scope
Full bullet list from CV (kept to top 2 each); education + certs (own sections later).
