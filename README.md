# felipeflorez.dev

Personal site + portfolio of **Felipe Florez**, AI Engineer — agent & LLM systems in
production on AWS (RAG, orchestration, eval/observability, cost-aware model routing,
MCP, guardrails).

The site doubles as a build log: every weekend a new project ships, built with
**Spec-Driven Development (SDD)**, each with a live demo at a subdomain
(`<project>.felipeflorez.dev`), a public repo, and a short case study.

## Stack

- **Astro** (static) + **TypeScript** (strict)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **GSAP** + **Lenis** for motion; native **Astro View Transitions** for navigation
- `@astrojs/sitemap`
- Hosting: **AWS S3 (private) + CloudFront (OAC)**, ACM wildcard `*.felipeflorez.dev`,
  deploy via **GitHub Actions + OIDC** (no access keys). See [docs/deployment.md](docs/deployment.md).

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm run dev`     | Dev server at `localhost:4321`              |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview the production build locally        |
| `npm run astro`   | Astro CLI (`astro add`, `astro check`, ...) |

## How this repo is built

Sections and projects are defined as specs first, then implemented. See:

- [CLAUDE.md](CLAUDE.md) — project context, conventions, and hard rules
- [specs/](specs/) — the spec for the landing and each section/project
- [.claude/skills/](.claude/skills/) — repeatable scaffolding (e.g. `new-project`)

## License

Code is MIT unless noted. Content (copy, case studies, images) © Felipe Florez.
