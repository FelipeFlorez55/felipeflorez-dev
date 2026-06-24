# Deployment — felipeflorez.dev

> **Status: PLANNED — not implemented yet.** This documents the target architecture so
> we can wire it up later (likely via a `deploy-s3-cloudfront` skill). It mirrors a
> pattern already in production for other static sites on the same AWS account.
>
> **Hard rules:**
> - No long-lived access keys, ever — deploys authenticate via GitHub Actions **OIDC**.
> - **No account IDs, ARNs, bucket names, or distribution IDs in the repo.** Real values
>   live only in the **gitignored** `scripts/deploy.env` (local) and in **GitHub repo
>   variables/secrets** (CI). This file uses placeholders only.

## Architecture

```
                 ┌──────────────────────── AWS account <ACCOUNT_ID> (us-east-1) ────────┐
 GitHub Actions  │                                                                       │
 (push to main)  │   ACM wildcard cert: *.felipeflorez.dev  (+ apex felipeflorez.dev)    │
       │ OIDC     │                          │                                            │
       ▼         │   Route 53 ──► CloudFront (OAC) ──► S3 bucket (PRIVATE)               │
 assume IAM role │   alias A/AAAA      │  TLS, caching       │  built `dist/`            │
 (no keys)       │                     └─ invalidate on deploy                            │
                 └───────────────────────────────────────────────────────────────────────┘
```

- **S3 bucket** holds the built static site. **Private** — no public bucket policy,
  no website hosting. Access is granted only to CloudFront via **OAC** (Origin Access
  Control).
- **CloudFront** terminates TLS, serves cached assets, and is the only thing allowed to
  read the bucket.
- **ACM wildcard cert `*.felipeflorez.dev`** (must be in **us-east-1** for CloudFront).
  One cert covers the apex landing **and every project subdomain**.
- **Route 53** hosted zone for `felipeflorez.dev`; alias records point each hostname at
  its CloudFront distribution.
- **GitHub Actions + OIDC** assumes a per-project IAM role to sync `dist/` and
  invalidate CloudFront. No access keys in the repo or in CI secrets.

## Two scopes

### 1. The main site — `felipeflorez.dev` (+ `www`)
This repo. One bucket + one CloudFront distribution, served on the apex and `www`.

### 2. Each project — `<slug>.felipeflorez.dev`
Every weekend project lives in its **own repo** and gets its **own** bucket +
CloudFront distribution, on a subdomain covered by the same wildcard cert. Each repo
carries its own `deploy.yml` with its own OIDC role. The `new-project` skill leaves a
TODO to set `demoUrl` once the subdomain is live.

## Naming convention

| Thing            | Pattern                                | Example (main site)               |
| ---------------- | -------------------------------------- | --------------------------------- |
| S3 bucket        | `<name>-<account-id>`                   | `felipeflorez-dev-<ACCOUNT_ID>`   |
| OIDC IAM role    | `<name>-deploy`                         | `felipeflorez-dev-deploy`         |
| CloudFront       | (generated dist id)                     | `E…`                              |
| Tags             | `Project=felipeflorez, Env=prod`        | —                                 |

> Concrete account ID, region, profile, bucket, and distribution id are **not in the
> repo**. Locally they live in `scripts/deploy.env` (gitignored; copy from
> `scripts/deploy.env.example`). In CI they are GitHub **repo variables/secrets**.

## One-time setup (to do when we implement hosting)

1. **ACM**: request `*.felipeflorez.dev` **and** `felipeflorez.dev` in us-east-1;
   validate via Route 53 DNS.
2. **S3**: create the private bucket; block all public access.
3. **CloudFront**: distribution with the S3 origin + **OAC**; default root `index.html`;
   attach the ACM cert; alternate names `felipeflorez.dev`, `www.felipeflorez.dev`.
   Add the bucket policy that allows only this distribution (OAC).
4. **Route 53**: alias A/AAAA for apex + `www` → the distribution.
5. **OIDC**: create the GitHub OIDC identity provider (if not present) and an IAM role
   `felipeflorez-dev-deploy` with a trust policy scoped to
   `repo:FelipeFlorez55/felipeflorez-dev:ref:refs/heads/main`, granting `s3:PutObject`,
   `s3:DeleteObject`, `s3:ListBucket` on the bucket and
   `cloudfront:CreateInvalidation` on the distribution.
6. Set the GitHub **repo variables** (Settings → Secrets and variables → Actions →
   Variables): `AWS_REGION`, `AWS_ROLE_ARN`, `S3_BUCKET`, `CLOUDFRONT_DISTRIBUTION_ID`.
7. Add `.github/workflows/deploy.yml` (template below) and push.

## CI/CD — GitHub Actions workflow (template, add when resources exist)

> Not committed as an active workflow yet — a workflow referencing nonexistent AWS
> resources would fail on every push and clutter the public repo. Add it (and create the
> resources + repo variables) together when implementing hosting. **All AWS-specific
> values come from `${{ vars.* }}` — nothing is hardcoded here.**

```yaml
name: Deploy site

on:
  push:
    branches: [main]
  workflow_dispatch:

# Required for OIDC (no long-lived keys)
permissions:
  id-token: write
  contents: read

concurrency:
  group: deploy-site
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build

      - name: Configure AWS credentials (OIDC)
        uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: ${{ vars.AWS_ROLE_ARN }}
          aws-region: ${{ vars.AWS_REGION }}

      - name: Sync assets (immutable)
        run: |
          aws s3 sync dist/ "s3://${{ vars.S3_BUCKET }}" --delete \
            --cache-control "public,max-age=31536000,immutable" \
            --exclude "*.html" --exclude "*.xml" --exclude "*.txt"

      - name: Sync HTML/XML/TXT (no-cache)
        run: |
          aws s3 sync dist/ "s3://${{ vars.S3_BUCKET }}" \
            --cache-control "no-cache" \
            --exclude "*" --include "*.html" --include "*.xml" --include "*.txt"

      - name: Invalidate CloudFront
        run: aws cloudfront create-invalidation \
            --distribution-id "${{ vars.CLOUDFRONT_DISTRIBUTION_ID }}" --paths "/*"
```

## Manual fallback

`scripts/deploy.sh` does the same build → sync → invalidate locally. It loads real
values from `scripts/deploy.env` (gitignored). To set up:

```bash
cp scripts/deploy.env.example scripts/deploy.env   # then fill in real values
npm run deploy                                       # build + sync + invalidate
```

CI via OIDC is the default; the script is for one-off local deploys.

## Cache strategy (why two syncs)

- **Fingerprinted assets** (JS/CSS/images Astro hashes) → `max-age=31536000, immutable`.
- **HTML / XML / TXT** (entry points, sitemap, robots) → `no-cache`, so a CloudFront
  invalidation makes new HTML visible immediately while assets stay long-cached.
