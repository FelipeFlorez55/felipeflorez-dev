# Claude Code skills

Project-scoped skills for `felipeflorez.dev`. A skill lives in
`.claude/skills/<name>/SKILL.md` and is invoked with `/<name>` in Claude Code.

## Policy: no speculative skills

We **only** create a skill once a pattern has repeated and the steps are stable.
Premature skills rot. When you find yourself doing the same multi-step chore a second
or third time, capture it here — not before.

## Skills

| Skill         | Status  | Purpose                                                                 |
| ------------- | ------- | ----------------------------------------------------------------------- |
| `new-project` | ✅ ready | Scaffold a weekend project: case-study page + bento entry + TODOs.      |
| `og-image`    | ✅ ready | Render a 1200×630 OG image (dark/editorial) via Chromium → `public/og/`. |

## Planned (create when the pattern actually repeats)

- `deploy-s3-cloudfront` — automate deploy via GitHub Actions OIDC (the manual path
  already exists: `npm run deploy` → `scripts/deploy.sh`; target architecture in
  [docs/deployment.md](../../docs/deployment.md)).

Until those patterns repeat, do the work by hand and keep notes in the relevant spec.
