/**
 * UI string dictionaries. English is the default/fallback; Spanish mirrors its keys.
 * Section copy will be added here as sections are built from specs/.
 */
export const defaultLang = "en";

export const languages = {
  en: "English",
  es: "Español",
} as const;

export const ui = {
  en: {
    "meta.title": "Felipe Florez — AI Engineer",
    "meta.description":
      "AI Engineer building agent & LLM systems in production on AWS.",
    "hero.kicker": "felipeflorez.dev",
    "hero.heading": "Felipe Florez — AI Engineer",
    "hero.subcopy":
      "Agent & LLM systems in production on AWS. Site under construction — built section by section with Spec-Driven Development.",
    "cv.download": "Download CV",
    "lang.label": "Language",
  },
  es: {
    "meta.title": "Felipe Florez — Ingeniero de IA",
    "meta.description":
      "Ingeniero de IA: sistemas de agentes y LLM en producción sobre AWS.",
    "hero.kicker": "felipeflorez.dev",
    "hero.heading": "Felipe Florez — Ingeniero de IA",
    "hero.subcopy":
      "Sistemas de agentes y LLM en producción sobre AWS. Sitio en construcción — se construye sección por sección con Spec-Driven Development.",
    "cv.download": "Descargar CV",
    "lang.label": "Idioma",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)["en"];
