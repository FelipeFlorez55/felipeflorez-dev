---
name: new-project
description: Scaffold a new weekend project for felipeflorez.dev. Given a name, slug, and category, it creates the case-study page (src/pages/projects/<slug>.astro), prepends the entry to the bento grid (src/data/projects.ts), creates the project spec from the template, and leaves TODOs for the subdomain demo and the OG image. Use when starting a new weekend/SDD project.
---

# Skill: new-project

Scaffolds everything a new weekend project needs on the site, in one pass. It does **not**
build the project itself or the demo — it wires the project into the portfolio.

## Inputs

Collect these (ask the user for any that are missing — do not guess the category):

- **name** — display title, e.g. `"Cost-Aware Model Router"`.
- **slug** — kebab-case id, e.g. `model-router`. If omitted, derive from the name
  (lowercase, spaces→`-`, strip punctuation). Used for `/projects/<slug>` and
  `<slug>.felipeflorez.dev`. Must be unique (not already in `src/data/projects.ts`).
- **category** — one of: `agent` | `tool` | `calculator` | `game` | `experiment`
  (must match `ProjectCategory` in `src/data/projects.ts`).
- **summary** _(optional)_ — one line for the bento card. Placeholder if omitted.

## Steps

### 1. Validate

- Confirm `category` is a valid `ProjectCategory`.
- Confirm the slug is not already present in `src/data/projects.ts` and that
  `src/pages/projects/<slug>.astro` does not already exist. If it exists, stop and report.

### 2. Add the bento entry

Edit `src/data/projects.ts` and **prepend** a new object to the `projects` array
(newest-first). Use today's date for `date`. Leave `demoUrl` and `ogImage` as empty
strings (the TODOs below track wiring them up). Example shape:

```ts
{
  slug: "<slug>",
  title: "<name>",
  category: "<category>",
  // ALWAYS localize summary as { en, es } — the bento card and case-study pages
  // render it in both locales. A bare string shows English on the /es/ site.
  summary: {
    en: "<one-line summary in English>",
    es: "<el mismo resumen en español>",
  },
  date: "<YYYY-MM-DD>",
  repoUrl: "https://github.com/FelipeFlorez55/<slug>", // TODO: confirm repo name
  demoUrl: "", // TODO: set to https://<slug>.felipeflorez.dev once the subdomain is live
  ogImage: "", // TODO: generate /og/<slug>.png (1200×630) — future `og-image` skill
  stack: [],   // TODO: fill stack tags
  status: "wip",
},
```

> **Copy style:** no em dashes (`—`) in `summary` or case-study copy — use periods or
> commas. Keep it one clean line per locale.

### 3. Create the case-study page

Create `src/pages/projects/<slug>.astro` from this template (substitute `<...>`):

```astro
---
import BaseLayout from "../../layouts/BaseLayout.astro";
import { projects, localize } from "../../data/projects";

const slug = "<slug>";
const project = projects.find((p) => p.slug === slug);
if (!project) throw new Error(`Project not found in src/data/projects.ts: ${slug}`);

const title = `${project.title} — Felipe Florez`;
const summary = localize(project.summary, "en"); // es page passes "es"
// TODO: set the OG image once generated (see `og-image` skill / docs).
const ogImage = project.ogImage || "/og/default.png";
---

<BaseLayout title={title} description={summary} ogImage={ogImage}>
  <main class="mx-auto max-w-3xl px-6 py-24">
    <p class="font-mono text-sm tracking-widest text-faint uppercase">
      {project.category}
    </p>
    <h1 class="mt-3 text-4xl font-semibold tracking-tight text-balance">
      {project.title}
    </h1>
    <p class="mt-4 text-lg text-muted">{summary}</p>

    <div class="mt-6 flex flex-wrap gap-4 text-sm">
      {project.demoUrl
        ? <a class="text-accent" href={project.demoUrl}>Live demo →</a>
        : <span class="text-faint">Demo: TODO (<slug>.felipeflorez.dev)</span>}
      <a class="text-accent" href={project.repoUrl}>Source →</a>
    </div>

    {/* Case study — Problem → My role → Tradeoff → Metric (see CLAUDE.md). */}
    <section class="mt-16 space-y-10">
      <div>
        <h2 class="text-sm tracking-widest text-faint uppercase">Problem</h2>
        <p class="mt-2 text-muted">TODO: the real constraint (latency / cost / accuracy / scale).</p>
      </div>
      <div>
        <h2 class="text-sm tracking-widest text-faint uppercase">My role</h2>
        <p class="mt-2 text-muted">TODO: what you designed and built.</p>
      </div>
      <div>
        <h2 class="text-sm tracking-widest text-faint uppercase">Tradeoff</h2>
        <p class="mt-2 text-muted">TODO: what was given up and why.</p>
      </div>
      <div>
        <h2 class="text-sm tracking-widest text-faint uppercase">Metric</h2>
        <p class="mt-2 text-muted">TODO: the measured outcome (or what you'd measure).</p>
      </div>
    </section>
  </main>
</BaseLayout>
```

**Also create the Spanish page** `src/pages/es/projects/<slug>.astro` (i18n hard rule:
every page in both locales). Same markup, but: import paths go up one more level
(`../../../`), pass `localize(project.summary, "es")`, and translate the eyebrow/labels
and case-study copy to Spanish (Problema / Mi rol / Tradeoff / Métrica). The bento card
links to `/es/projects/<slug>` for the ES site, so this page must exist.

### 4. Create the project spec

Copy `specs/_template.md` to `specs/projects/<slug>.md`, set Type=project, fill in
the slug/category/repo header, and keep the Problem→Role→Tradeoff→Metric fields.

### 5. Verify

Run `npm run build` and `npm run astro check`. Both must pass.

### 6. Report the open TODOs

Print a checklist of what still needs a human/another skill:

- [ ] **Subdomain demo** — deploy the project and set `demoUrl` to
      `https://<slug>.felipeflorez.dev` (future `deploy-s3-cloudfront` skill;
      see [docs/deployment.md](../../docs/deployment.md)).
- [ ] **OG image** — generate `/og/<slug>.png` (1200×630) and set `ogImage`
      (future `og-image` skill).
- [ ] **Stack tags** + **summary** in `src/data/projects.ts`.
- [ ] **Case study copy** — fill the Problem/Role/Tradeoff/Metric sections.
- [ ] **Repo** — create the public repo and confirm `repoUrl`.

## Notes

- Do not invent metrics or demo URLs. Leave honest TODOs.
- Keep `projects` newest-first.
- Conventional commit: `feat(projects): scaffold <slug> case study + bento entry`.
