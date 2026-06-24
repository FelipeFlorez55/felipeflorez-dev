/**
 * Proof metrics for the hero metrics bar. Values are language-neutral; the label is a
 * key into src/i18n/ui.ts so the bar stays bilingual. Numbers are from the CV — keep
 * them honest and update when they change.
 */
import type { UIKey } from "../i18n/ui";

export interface Metric {
  /** Display value (language-neutral). */
  value: string;
  /** i18n key for the label. */
  labelKey: UIKey;
  /** Optional clarifier shown small (also an i18n key if added later). */
  note?: string;
}

export const metrics: Metric[] = [
  { value: "57→80%", labelKey: "metric.resolution" },
  { value: "~40%", labelKey: "metric.cost" },
  { value: "6+", labelKey: "metric.years" },
  { value: "3×", labelKey: "metric.aws" },
];
