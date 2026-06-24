# CLAUDE.md

> `CLAUDE.md` is a symlink to this file (`AGENTS.md`) — one source of truth for any
> agent. Guidance for Claude Code (and any agent) working in this repo. This is a
> **public** repository — write everything here as if the world will read it (it will).

## Purpose & positioning

`felipeflorez.dev` is the personal site + portfolio of **Felipe Florez, AI Engineer**.

- **What Felipe does:** designs and ships agent / LLM systems in production on AWS —
  RAG, orchestration, eval & observability, cost-aware model routing, MCP, guardrails.
- **Two audiences:** (1) recruiters & enterprise clients, (2) the AI-engineering
  community.
- **The hook:** the site is a living build log. Every weekend a new project ships,
  built with Spec-Driven Development — agents, calculators, games, tools, experiments.
  Each project gets a **live demo on a subdomain** (`<slug>.felipeflorez.dev`), a
  **public repo**, and a **short case study**.
- The site is shared from Felipe's LinkedIn profile, so first impression and OG images
  matter.

## Stack (locked decisions — do not relitigate)

- **Astro** (latest stable) + **TypeScript strict**.
- **Tailwind CSS v4** via `@tailwindcss/vite` (no `tailwind.config.js`; tokens live in
  `src/styles/global.css` under `@theme`).
- **GSAP + Lenis** for motion; **native Astro View Transitions** (`<ClientRouter />`)
  for page navigation.
- Base components: **Starwind UI** (Astro-native, Tailwind v4) preferred over a
  React-based shadcn adaptation. Add components only when a spec needs them.
- Aesthetic: **dark precision / editorial** — generous whitespace, restrained motion,
  strong typographic hierarchy.
- Projects layout: **bento grid, filterable by category**, sourced from
  `src/data/projects.ts`.
- Hosting: **AWS S3 (private) + CloudFront (OAC)**, ACM wildcard `*.felipeflorez.dev`
  (us-east-1), deploy via **GitHub Actions + OIDC**. See [docs/deployment.md](docs/deployment.md).

## Commands

| Command                  | Action                                            |
| :----------------------- | :------------------------------------------------ |
| `npm run dev`            | Dev server at `localhost:4321`                    |
| `npm run build`          | Build static site to `./dist/`                    |
| `npm run preview`        | Serve the production build locally                |
| `npm run astro check`    | Type-check `.astro`/`.ts` (lint gate before push) |
| `npx astro add <int>`    | Add an Astro integration                          |
| `bash scripts/deploy.sh` | Manual deploy (fallback; CI/OIDC is the default)  |

> Dev server runs as a daemon in Astro: `astro dev` starts it, `astro dev stop` stops
> it, `astro dev status` / `astro dev logs` to inspect. Full docs: https://docs.astro.build

## Folder structure

```
.
├── .claude/skills/      # Repeatable scaffolding. Add a skill only when a pattern repeats.
│   └── new-project/     # Scaffolds a project case study + bento entry.
├── docs/                # Architecture & ops docs (e.g. deployment).
├── specs/               # Spec-Driven Development: write the spec before the code.
│   ├── _template.md     # Spec template for any section or project.
│   └── landing.md       # The landing page: section inventory + status.
├── public/              # Static assets served as-is (favicons, /og images, robots).
└── src/
    ├── components/       # Reusable UI. Build from specs; keep sections composable.
    ├── data/            # Typed data sources. projects.ts = bento + case studies.
    ├── layouts/         # BaseLayout.astro (head, OG, View Transitions).
    ├── lib/             # Framework-agnostic helpers (cn(), etc.).
    ├── pages/           # Routes. projects/<slug>.astro = case studies.
    └── styles/          # global.css (Tailwind import + @theme design tokens).
```

## Code conventions

- **TypeScript strict** everywhere; no `any` without a written reason.
- Class composition via `cn()` (`src/lib/utils.ts`).
- Design tokens come from `@theme` in `global.css` — use semantic utilities
  (`bg-bg`, `text-ink`, `text-muted`, `border-border`, `text-accent`). Don't hardcode
  hex/oklch in components.
- Components are presentational; content/data lives in `src/data/` or page frontmatter.
- Keep sections independently composable so the landing can be reordered.

## Commit conventions

[Conventional Commits](https://www.conventionalcommits.org/). One logical change per
commit. Common types:

- `feat:` a section/component/project that adds user-facing capability
- `fix:` a bug fix
- `chore:` tooling, deps, scaffolding
- `docs:` docs/specs only
- `refactor:`, `perf:`, `style:`, `test:`, `ci:`

Example: `feat(hero): add hero + metrics bar per specs/sections/hero.md`

## Hard rules (non-negotiable)

1. **Never commit secrets.** No `.env`, no keys, no tokens, no AWS credentials in the
   repo or in git history. `.gitignore` covers `.env*`, `*.pem`, `*.key`, etc. — keep
   it that way. Use `.env.example` for shape only (no real values).
2. **Credentials only via GitHub Actions OIDC.** No long-lived AWS access keys anywhere
   — not in the repo, not in CI secrets. CI assumes a per-project IAM role via OIDC.
3. **Animate only `transform` and `opacity`.** No layout-thrashing animations
   (`width`, `height`, `top`, `margin`, ...). Honor `prefers-reduced-motion` (handled
   globally in `global.css`). Keep motion contained — it should feel precise, not busy.
4. **Every project demo is reachable.** Each project ships with a working subdomain
   demo **and** a public repo link in its README, plus a 1200×630 OG image.
5. **Build must be green before push.** `npm run build` and `npm run astro check` pass.

## Content & case-study tone

Voice: precise, senior, no hype. Show systems thinking and tradeoffs, not buzzwords.

Every case study follows: **Problem → My role → Tradeoff → Metric.**

- **Problem** — the real constraint (latency, cost, accuracy, scale).
- **My role** — what *I* designed/built (be specific; own the decisions).
- **Tradeoff** — what was given up and why (the senior signal).
- **Metric** — the measured outcome (latency ↓, cost/req ↓, eval score ↑, etc.).

Prefer numbers over adjectives. If there's no metric yet, say what you'd measure.

## Spec-Driven Development workflow

1. Write/append the spec in `specs/` (use `_template.md`).
2. Get sign-off on the spec.
3. Implement against the spec; reference it in the commit.
4. For a new project, run the `new-project` skill to scaffold the case study + bento
   entry, then fill in the spec and content.
