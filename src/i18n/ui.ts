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
    "meta.title": "Felipe Florez, AI Engineer",
    "meta.description":
      "Lead AI Engineer shipping agent & LLM systems in production on AWS: orchestration, RAG, eval/observability, cost-aware model routing, MCP, guardrails.",

    // Header
    "nav.cv": "CV",
    "nav.skipToContent": "Skip to content",

    // Hero
    "hero.eyebrow": "Lead AI Engineer · AWS Solutions Architect · Medellín, CO",
    "hero.heading": "I build agent & LLM systems that run in production.",
    "hero.subcopy":
      "I design orchestration, RAG, and secure tool execution on AWS, with the evaluation, observability, and cost control that keep them reliable at scale.",
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

    // Nav (in-page)
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",

    // About
    "about.eyebrow": "About",
    "about.heading": "I turn LLM prototypes into systems teams can rely on.",
    "about.p1":
      "I'm a Lead AI Engineer in Medellín, shipping production LLM and agent systems on AWS and helping enterprise engineering teams adopt AI. My work lives where prototypes usually break: orchestration, RAG, secure tool execution, and the evaluation, observability, and cost control that keep them dependable in multi-tenant production.",
    "about.p2":
      "I came up through electronic engineering and IoT, owning hardware-to-production, which taught me to design for reliability and real constraints rather than demos. Today I build with Spec-Driven Development and AI-assisted workflows (Claude Code, Cursor, Devin), so the systems I ship stay as legible as they are capable.",

    // Skills
    "skills.eyebrow": "Capabilities",
    "skills.heading": "What I work with",

    // Experience
    "experience.eyebrow": "Experience",
    "experience.heading": "Where I've shipped",
    "experience.present": "Present",
  },
  es: {
    "meta.title": "Felipe Florez, Ingeniero de IA",
    "meta.description":
      "Lead AI Engineer: sistemas de agentes y LLM en producción sobre AWS, con orquestación, RAG, evaluación/observabilidad, ruteo de modelos por costo, MCP y guardrails.",

    // Header
    "nav.cv": "CV",
    "nav.skipToContent": "Saltar al contenido",

    // Hero
    "hero.eyebrow": "Lead AI Engineer · Arquitecto de Soluciones AWS · Medellín, CO",
    "hero.heading": "Construyo sistemas de agentes y LLM que viven en producción.",
    "hero.subcopy":
      "Diseño orquestación, RAG y ejecución segura de herramientas en AWS, con la evaluación, observabilidad y control de costos que los mantienen fiables a escala.",
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

    // Nav (in-page)
    "nav.about": "Sobre mí",
    "nav.skills": "Skills",
    "nav.experience": "Experiencia",

    // About
    "about.eyebrow": "Sobre mí",
    "about.heading":
      "Convierto prototipos de LLM en sistemas en los que los equipos confían.",
    "about.p1":
      "Soy Lead AI Engineer en Medellín. Llevo a producción sistemas de LLM y agentes sobre AWS y ayudo a equipos de ingeniería a adoptar IA. Mi trabajo está donde los prototipos suelen romperse: orquestación, RAG, ejecución segura de herramientas, y la evaluación, observabilidad y control de costos que los mantienen fiables en producción multi-tenant.",
    "about.p2":
      "Vengo de la ingeniería electrónica y el IoT, donde fui dueño del ciclo completo de hardware a producción; eso me enseñó a diseñar para la fiabilidad y las restricciones reales, no para el demo. Hoy construyo con Spec-Driven Development y flujos asistidos por IA (Claude Code, Cursor, Devin), para que los sistemas que entrego sean tan legibles como capaces.",

    // Skills
    "skills.eyebrow": "Capacidades",
    "skills.heading": "Con qué trabajo",

    // Experience
    "experience.eyebrow": "Experiencia",
    "experience.heading": "Dónde he entregado",
    "experience.present": "Actualidad",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)["en"];
