# Spec: Certifications

- **Type:** section · **Status:** built · **Last updated:** 2026-06-24
- **Related:** specs/landing.md · src/components/Certifications.astro · src/data/certifications.ts

## Goal
Fast credibility for recruiters: AWS-heavy certification set + degree, scannable.

## Audience & intent
Recruiters primarily. Signals validated cloud/AI depth.

## Content (from CV, data-driven `src/data/certifications.ts`)
- AWS Certified Solutions Architect – Associate (SAA-C03)
- AWS Certified AI Practitioner (AIF-C01)
- AWS Certified Developer – Associate (DVA-C02) — in progress
- AWS Certified Cloud Practitioner (CLF-C02)
- Scrum Master Professional Certificate (SMPC) — CertiProf
- ITIL 4 Foundation — PeopleCert
- Education: B.S. Electronic Engineering, Universidad de Antioquia, Medellín (2017–2024).

## Layout & UX
Card grid (1 → 2 → 3 cols). Card: issuer (accent), name, code, optional "in progress"
badge. Education as a bordered footer row (label + degree + school, period right-aligned).

## Motion
`data-reveal` per card/row; reduced-motion safe.

## Acceptance criteria
- [x] EN + ES (labels) · [x] responsive · [x] reduced-motion safe · [x] build + check pass
- [x] honest "in progress" flag on DVA-C02

## Out of scope
Verification links / badge images (could add issuer credential URLs later).
