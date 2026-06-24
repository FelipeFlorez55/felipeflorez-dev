/**
 * Generate an Open Graph image (1200×630) by rendering an HTML card and screenshotting
 * it with headless Chromium. Dark/editorial, matches the site tokens. Self-contained:
 * the portrait is inlined as a data URI so the render needs no network/file access.
 *
 * Usage:
 *   node scripts/gen-og.mjs                # default card → public/og/default.png
 *   node scripts/gen-og.mjs --title "X" --subtitle "Y" --out public/og/x.png [--no-portrait]
 *
 * Requires `chromium` on PATH. Writes the HTML to a temp file next to --out.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = resolve(import.meta.dirname, "..");

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i !== -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}
const hasFlag = (name) => process.argv.includes(`--${name}`);

const title = arg("title", "Felipe Florez");
const eyebrow = arg("eyebrow", "LEAD AI ENGINEER · AWS SOLUTIONS ARCHITECT");
const subtitle = arg("subtitle", "Agent & LLM systems in production on AWS.");
const wordmark = arg("wordmark", "felipeflorez.dev");
const out = resolve(ROOT, arg("out", "public/og/default.png"));
const withPortrait = !hasFlag("no-portrait");

const portraitDataUri = withPortrait
  ? "data:image/png;base64," +
    readFileSync(resolve(ROOT, "src/assets/felipe-florez.png")).toString("base64")
  : null;

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 1200px; height: 630px; overflow: hidden; }
  body {
    display: flex; align-items: center; gap: 64px;
    padding: 72px 80px;
    font-family: "Helvetica Neue", Arial, system-ui, sans-serif;
    color: oklch(0.96 0.004 270);
    background:
      radial-gradient(900px 500px at 88% -10%, oklch(0.78 0.13 196 / 0.18), transparent 60%),
      oklch(0.16 0.006 270);
  }
  .left { flex: 1; min-width: 0; }
  .eyebrow {
    font-family: "DejaVu Sans Mono", ui-monospace, monospace;
    font-size: 22px; letter-spacing: 3px; text-transform: uppercase;
    color: oklch(0.78 0.13 196);
  }
  h1 { font-size: 104px; line-height: 0.98; font-weight: 700; letter-spacing: -2px; margin-top: 26px; }
  .sub { font-size: 36px; line-height: 1.3; color: oklch(0.72 0.006 270); margin-top: 28px; max-width: 620px; }
  .wordmark {
    position: absolute; bottom: 64px; left: 80px;
    font-family: "DejaVu Sans Mono", ui-monospace, monospace;
    font-size: 24px; letter-spacing: 1px; color: oklch(0.55 0.006 270);
  }
  .portrait {
    width: 300px; height: 300px; flex: none; border-radius: 28px; object-fit: cover;
    border: 1px solid oklch(0.30 0.008 270);
    box-shadow: 0 30px 80px oklch(0 0 0 / 0.5);
  }
</style></head><body>
  <div class="left">
    <div class="eyebrow">${eyebrow}</div>
    <h1>${title}</h1>
    <div class="sub">${subtitle}</div>
  </div>
  ${portraitDataUri ? `<img class="portrait" src="${portraitDataUri}">` : ""}
  <div class="wordmark">${wordmark}</div>
</body></html>`;

mkdirSync(dirname(out), { recursive: true });
const htmlPath = out.replace(/\.png$/, ".html");
writeFileSync(htmlPath, html);

execFileSync(
  "chromium",
  [
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    "--hide-scrollbars",
    "--force-device-scale-factor=1",
    "--force-color-profile=srgb",
    "--default-background-color=00000000",
    "--window-size=1200,630",
    `--screenshot=${out}`,
    htmlPath,
  ],
  { stdio: "inherit" },
);

console.log("OG image written:", out);
