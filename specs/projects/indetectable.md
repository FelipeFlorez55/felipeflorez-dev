# Spec: Indetectable

> Spec-Driven Development: write/approve this before implementing. The full design
> source-of-truth lives in the project repo's `CLAUDE.md` (spec §1–§16); this file is
> the portfolio-facing summary that wires it into felipeflorez.dev.

- **Type:** project
- **Status:** built (v1 implemented; pre-release detector tuning pending)
- **Last updated:** 2026-06-25
- **Related:** specs/landing.md · src/data/projects.ts · src/pages/projects/indetectable.astro · src/pages/es/projects/indetectable.astro

## 1. Goal

A daily browser game where the AI paints several instances of one motif in a consistent
machine "handwriting" and you forge one more instance that blends in. An algorithmic
detective accuses the stroke that least belongs — you win if it doesn't pick yours.
It earns its place as the first weekend build: a self-contained, zero-cost, fully public
showcase of systems thinking (signal processing in the browser, no backend).

## 2. Audience & intent

Primarily the AI-engineering community (the detector design is the interesting part),
secondarily recruiters/clients (shows shipping discipline + spec-first work). After
playing, the viral hook is the detective's verdict ("Undetectable 🫥" / "Caught you"),
shareable Wordle-style.

## 3. Content

Bento card + case study sourced from `src/data/projects.ts` (slug `indetectable`).
Case study follows Problem → My role → Tradeoff → Metric (see below). Stack tags:
React, TypeScript, Vite, Canvas 2D, perfect-freehand, Zustand, Tailwind v4, Vitest.

## 4. Layout & UX

Standard case-study page (`max-w-3xl`, category eyebrow, title, summary, demo/source
links, stack chips, four case-study sections). Mirrors the `new-project` scaffold,
both locales.

## 5. Motion

Inherits global motion. No custom animation on the case-study page beyond the site's
defaults; transform/opacity only, respects `prefers-reduced-motion`.

## 6. Acceptance criteria

- [x] Bento entry in `src/data/projects.ts` (newest-first)
- [x] Case-study pages in both locales (`/projects/indetectable`, `/es/projects/indetectable`)
- [x] `npm run build` + `npm run astro check` pass
- [x] Demo subdomain `indetectable.felipeflorez.dev` wired + live (HTTP 200)
- [x] Public repo published + `repoUrl` confirmed
- [x] OG image `/og/indetectable.png` (1200×630) generated + `ogImage` set

## 7. Out of scope

The game's internal implementation (lives in the `indetectable` repo). This spec only
covers the portfolio integration.

## 8. Open questions

- Final repo name / visibility before publishing `repoUrl`.
- Detector weight/threshold calibration against real human strokes (tracked in the
  project repo's `specs/03-detector.md` §6.5) — affects whether status flips to `live`.

---

## Project-only fields

- **Slug:** `indetectable` → `/projects/indetectable` and `indetectable.felipeflorez.dev`
- **Category:** game
- **Repo:** https://github.com/FelipeFlorez55/indetectable
- **Demo:** https://indetectable.felipeflorez.dev (live)
- **OG image:** `/og/indetectable.png` (generated, 1200×630)

### Case study — Problem → My role → Tradeoff → Metric

- **Problem:** A viral daily game with zero backend, zero recurring cost, no secrets, in
  a public repo. The hard part: distinguish a human stroke from machine strokes in the
  browser, instantly, with no training set and no hosted model.
- **My role:** Designed and built the full system spec-first — a DOM-free, dependency-free
  self-calibrating detector (shape conformance via $1/Procrustes, Savitzky–Golay tremor
  residual, speed + curvature signatures, z-scored against the day's procedural cluster),
  deterministic daily seed (xmur3 + mulberry32), 3-knob difficulty with weekly rotation,
  raw-vs-display point capture, localStorage streaks (Wordle one-attempt lock), es/en/pt
  i18n, and the shareable verdict card.
- **Tradeoff:** Algorithmic detective over an LLM — $0, instant, in-browser, but less
  rich judgment. No accounts/sync (localStorage only). Self-calibration removes the
  training set at the cost of careful per-feature tuning.
- **Metric:** v1 fully client-side, 71 unit tests (detector separability + determinism,
  scoring, scene/PRNG, difficulty, persistence, i18n, canvas, share); detector adds zero
  network calls in ~200 lines of TS. Next: calibrate weights/thresholds vs. real human
  strokes for high forged-vs-machine separability without false positives.
