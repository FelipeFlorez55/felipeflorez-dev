# Spec: About

- **Type:** section · **Status:** built · **Last updated:** 2026-09-08
- **Related:** specs/landing.md · src/components/About.astro

## Goal
A short, senior narrative that frames Felipe: Founding Engineer at Emilia, ships
production AI systems, came from electronic engineering / IoT, and builds with SDD.
Earns trust without hype.

## Audience & intent
Both. Recruiter: depth + reliability mindset. Community: process + craft.

## Content (from CV + LinkedIn profile)
- Eyebrow `About`; heading "I turn LLM prototypes into systems teams can rely on."
- Two paragraphs (`about.p1`, `about.p2` in `src/i18n/ui.ts`): current Founding Engineer
  scope at Emilia + the reliability lens from a hardware/IoT background and
  SDD/AI-assisted workflow.
- Neutral tone — no job-seeking signal.

## Layout & UX
Two columns on `lg` (heading left, prose right); single column on mobile. Generous rhythm.

## Motion
`data-reveal` fade/translate on scroll; reduced-motion safe.

## Acceptance criteria
- [x] EN + ES · [x] responsive · [x] reduced-motion safe · [x] build + check pass

## Out of scope
Photo (in hero), timeline (Experience), skill chips (Skills).
