/**
 * UI string dictionaries. English is the default/fallback; Spanish mirrors its keys.
 * Section copy is added here as sections are built from specs/.
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
      "Lead AI Engineer shipping agent & LLM systems in production on AWS — orchestration, RAG, eval/observability, cost-aware model routing, MCP, guardrails.",

    // Header
    "nav.cv": "CV",
    "nav.skipToContent": "Skip to content",

    // Hero
    "hero.eyebrow": "Lead AI Engineer · AWS Solutions Architect · Medellín, CO",
    "hero.heading": "I build agent & LLM systems that run in production.",
    "hero.subcopy":
      "I design orchestration, RAG, and secure tool execution on AWS — with the evaluation, observability, and cost control that keep them reliable at scale.",
    "hero.cta.primary": "Get in touch",
    "hero.cta.secondary": "Download CV",
    "hero.portraitAlt": "Portrait of Felipe Florez",

    // Metrics bar
    "metric.resolution": "First-version resolution",
    "metric.cost": "Cloud cost reduction",
    "metric.years": "Years shipping software",
    "metric.aws": "AWS certifications",

    // Footer
    "footer.role": "Lead AI Engineer · AWS Solutions Architect",
    "footer.builtWith": "Built with Astro + Spec-Driven Development.",
    "footer.email": "Email",
    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
  },
  es: {
    "meta.title": "Felipe Florez — Ingeniero de IA",
    "meta.description":
      "Lead AI Engineer: sistemas de agentes y LLM en producción sobre AWS — orquestación, RAG, evaluación/observabilidad, ruteo de modelos por costo, MCP, guardrails.",

    // Header
    "nav.cv": "CV",
    "nav.skipToContent": "Saltar al contenido",

    // Hero
    "hero.eyebrow": "Lead AI Engineer · Arquitecto de Soluciones AWS · Medellín, CO",
    "hero.heading": "Construyo sistemas de agentes y LLM que viven en producción.",
    "hero.subcopy":
      "Diseño orquestación, RAG y ejecución segura de herramientas en AWS — con la evaluación, observabilidad y control de costos que los mantienen fiables a escala.",
    "hero.cta.primary": "Hablemos",
    "hero.cta.secondary": "Descargar CV",
    "hero.portraitAlt": "Retrato de Felipe Florez",

    // Metrics bar
    "metric.resolution": "Resolución a la primera",
    "metric.cost": "Reducción de costo cloud",
    "metric.years": "Años construyendo software",
    "metric.aws": "Certificaciones AWS",

    // Footer
    "footer.role": "Lead AI Engineer · Arquitecto de Soluciones AWS",
    "footer.builtWith": "Hecho con Astro + Spec-Driven Development.",
    "footer.email": "Correo",
    "footer.linkedin": "LinkedIn",
    "footer.github": "GitHub",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)["en"];
