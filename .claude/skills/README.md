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

## Planned (create when the pattern actually repeats)

- `og-image` — generate the 1200×630 OG image for a project/section.
- `deploy-s3-cloudfront` — provision/deploy a project subdomain to S3 + CloudFront via
  OIDC (see [docs/deployment.md](../../docs/deployment.md) for the target architecture).

Until those patterns repeat, do the work by hand and keep notes in the relevant spec.
