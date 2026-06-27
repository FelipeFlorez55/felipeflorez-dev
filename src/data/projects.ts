/**
 * Project registry — the single source of truth for the filterable bento grid
 * and the per-project case-study pages (src/pages/projects/<slug>.astro).
 *
 * Each weekend project (built with Spec-Driven Development) gets one entry here.
 * The `new-project` skill (.claude/skills/new-project) appends entries to this
 * file, scaffolds the case-study page, and leaves TODOs for the subdomain demo
 * and the OG image.
 *
 * Keep entries newest-first.
 */

/**
 * Bento filter categories — the AI-engineering CAPABILITY a project proves.
 * This is the axis recruiters/clients filter by; it positions the work, not the
 * medium. The medium (game, tool, ...) lives in `format` below. Keep in sync with
 * the bento UI filter chips and the `category.*` keys in src/i18n/ui.ts.
 */
export type ProjectCategory =
  | "agents"
  | "rag"
  | "guardrails"
  | "evals"
  | "routing"
  | "algorithms";

/**
 * How a project is experienced — rendered as a small badge on the card, NOT a
 * primary filter. Keeps "playable" a delightful detail instead of the headline.
 * Keep in sync with the `format.*` keys in src/i18n/ui.ts.
 */
export type ProjectFormat = "game" | "tool" | "calculator" | "demo";

/** Visual weight of a card in the bento grid. */
export type BentoSpan = "sm" | "md" | "lg";

/** A string that is either English-only or localized per supported locale. */
export type Localized = string | { en: string; es: string };

/** Resolve a Localized value for a locale, falling back to English. */
export function localize(value: Localized, lang: "en" | "es"): string {
  return typeof value === "string" ? value : (value[lang] ?? value.en);
}

export interface Project {
  /** Stable identifier. Used for /projects/<slug> and <slug>.felipeflorez.dev. */
  slug: string;
  title: string;
  /** The AI-engineering capability this project demonstrates (the filter axis). */
  category: ProjectCategory;
  /** How it's experienced (game/tool/...). Shown as a badge, not a filter. */
  format: ProjectFormat;
  /** One line for the bento card. String = English-only, or `{ en, es }`. */
  summary: Localized;
  /** ISO date (YYYY-MM-DD) the project shipped. */
  date: string;
  /** Public repo URL. Required — every project ships with source. */
  repoUrl: string;
  /** Live demo at <slug>.felipeflorez.dev. Empty string = subdomain not wired yet. */
  demoUrl: string;
  /** Path/URL to the 1200×630 OG image. Empty string = not generated yet. */
  ogImage: string;
  /** Tech/stack tags shown on the card and case study. */
  stack: string[];
  /** Optional domain/capability tags (distinct from `stack`'s tech tags). */
  tags?: string[];
  status: "live" | "wip";
  featured?: boolean;
  bentoSpan?: BentoSpan;
}

export const projects: Project[] = [
  {
    slug: "canary",
    title: "Canary",
    category: "guardrails",
    format: "game",
    summary: {
      en: "A browser game where you are the attacker: sneak a prompt injection past a guardrail that runs 100% on your device. A layered pipeline (normalization, heuristics, a 22M ONNX classifier) returns BLOCKED or PASS with a confidence score and the layer that caught you.",
      es: "Un juego de navegador donde eres el atacante: cuela una inyección de prompts ante un guardrail que corre 100% en tu dispositivo. Un pipeline por capas (normalización, heurísticas, un clasificador ONNX de 22M) responde BLOCKED o PASS con un score de confianza y la capa que te atrapó.",
    },
    date: "2026-06-27",
    repoUrl: "https://github.com/FelipeFlorez55/canary",
    demoUrl: "https://canary.felipeflorez.dev",
    ogImage: "/og/canary.png",
    stack: [
      "Transformers.js",
      "ONNX",
      "Llama Prompt Guard 2 (22M)",
      "React",
      "TypeScript",
      "Vite",
      "Tailwind v4",
      "Zustand",
    ],
    tags: ["prompt-injection", "on-device", "client-side", "OWASP LLM01"],
    status: "live",
    featured: true,
    bentoSpan: "lg",
  },
  {
    slug: "mi-hogar",
    title: "Mi Hogar",
    category: "agents",
    format: "tool",
    summary: {
      en: "A single-user finance tracker you run by chatting with a Telegram bot. An OpenAI agent with typed tools turns text, voice notes and receipt photos into transactions; a Next.js dashboard covers reports, budgets, debts and Colombian payroll.",
      es: "Un gestor de finanzas personales de un solo usuario que manejas chateando con un bot de Telegram. Un agente de OpenAI con tools tipadas convierte texto, notas de voz y fotos de recibos en transacciones; un dashboard en Next.js cubre reportes, presupuestos, deudas y nómina colombiana.",
    },
    date: "2026-06-22",
    repoUrl: "https://github.com/FelipeFlorez55/mi-hogar-finance",
    demoUrl: "",
    ogImage: "/og/mi-hogar.png",
    stack: [
      "Next.js 16",
      "TypeScript",
      "Supabase",
      "OpenAI",
      "Telegram Bot API",
      "Postgres",
      "Zod",
      "Tailwind v4",
      "Vercel",
    ],
    tags: ["tool-calling", "multimodal", "row-level-security", "fintech"],
    status: "live",
    bentoSpan: "md",
  },
  {
    slug: "indetectable",
    title: "Indetectable",
    category: "algorithms",
    format: "game",
    summary: {
      en: "A daily browser game: forge one stroke that blends into the machine's. An algorithmic detective tries to catch the human intruder. You win if it can't.",
      es: "Un juego diario de navegador: falsifica un trazo que se camufle entre los de la máquina. Un detective algorítmico intenta cazar al intruso humano. Ganas si no lo consigue.",
    },
    date: "2026-06-25",
    repoUrl: "https://github.com/FelipeFlorez55/indetectable",
    demoUrl: "https://indetectable.felipeflorez.dev",
    ogImage: "/og/indetectable.png",
    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Canvas 2D",
      "perfect-freehand",
      "Zustand",
      "Tailwind v4",
      "Vitest",
    ],
    tags: ["signal-processing", "client-side", "on-device"],
    status: "live",
    featured: true,
    bentoSpan: "lg",
  },
];

/**
 * All capability categories, in display order. The bento only renders chips for
 * categories that actually have a project (see Projects.astro), so listing a
 * not-yet-used capability here is fine — it stays hidden until its first build.
 */
export const CATEGORIES: ProjectCategory[] = [
  "agents",
  "rag",
  "guardrails",
  "evals",
  "routing",
  "algorithms",
];
