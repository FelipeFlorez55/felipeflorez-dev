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

export interface Project {
  /** Stable identifier. Used for /projects/<slug> and <slug>.felipeflorez.dev. */
  slug: string;
  title: string;
  category: ProjectCategory;
  /** One line for the bento card. */
  summary: string;
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

export const projects: Project[] = [];

export const CATEGORIES: ProjectCategory[] = [
  "agent",
  "tool",
  "calculator",
  "game",
  "experiment",
];
