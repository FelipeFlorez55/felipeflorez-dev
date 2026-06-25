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

/** Bento filter categories. Keep in sync with the bento UI filter chips. */
export type ProjectCategory =
  | "agent"
  | "tool"
  | "calculator"
  | "game"
  | "experiment";

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
  category: ProjectCategory;
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
  status: "live" | "wip";
  featured?: boolean;
  bentoSpan?: BentoSpan;
}

export const projects: Project[] = [
  {
    slug: "indetectable",
    title: "Indetectable",
    category: "game",
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
    status: "live",
    featured: true,
    bentoSpan: "lg",
  },
];

export const CATEGORIES: ProjectCategory[] = [
  "agent",
  "tool",
  "calculator",
  "game",
  "experiment",
];
