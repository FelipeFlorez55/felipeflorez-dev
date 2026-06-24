#!/usr/bin/env bash
# Manual deploy of felipeflorez.dev to S3 + CloudFront invalidation.
#
# ⚠️ PLANNED / NOT WIRED YET. The default deploy is GitHub Actions via OIDC (no keys);
# this is the local fallback for one-off deploys. Real AWS values come from
# scripts/deploy.env (gitignored — copy from scripts/deploy.env.example). Nothing
# AWS-specific is committed to the repo. See docs/deployment.md.
set -euo pipefail

cd "$(dirname "$0")/.."

# Load local, gitignored config (account / profile / bucket / dist live here, never in git).
if [[ -f scripts/deploy.env ]]; then
  set -a
  # shellcheck disable=SC1091
  source scripts/deploy.env
  set +a
fi

: "${AWS_PROFILE:?set AWS_PROFILE in scripts/deploy.env (see scripts/deploy.env.example)}"
: "${S3_BUCKET:?set S3_BUCKET in scripts/deploy.env}"
: "${CLOUDFRONT_DISTRIBUTION_ID:?set CLOUDFRONT_DISTRIBUTION_ID in scripts/deploy.env}"
export AWS_PROFILE

echo "▶ build"
npm run build

echo "▶ sync assets (immutable)"
aws s3 sync dist/ "s3://$S3_BUCKET" --delete \
  --cache-control "public,max-age=31536000,immutable" \
  --exclude "*.html" --exclude "*.xml" --exclude "*.txt"

echo "▶ sync html/xml/txt (no-cache)"
aws s3 sync dist/ "s3://$S3_BUCKET" \
  --cache-control "no-cache" \
  --exclude "*" --include "*.html" --include "*.xml" --include "*.txt"

echo "▶ invalidate CloudFront"
aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_DISTRIBUTION_ID" --paths "/*" \
  --query 'Invalidation.Id' --output text

echo "✔ done"
