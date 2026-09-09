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
    "meta.title": "Felipe Florez, Founding Engineer at Emilia",
    "meta.description":
      "Founding Engineer at Emilia building production AI products across architecture, integrations, automation, infrastructure, agent systems, and LLMs.",

    // Header
    "nav.cv": "CV",
    "nav.skipToContent": "Skip to content",

    // Hero
    "hero.eyebrow": "Founding Engineer at Emilia · AWS Solutions Architect · Medellín, CO",
    "hero.heading": "I build agent & LLM systems that run in production.",
    "hero.subcopy":
      "At Emilia, I build AI products end to end—from architecture and integrations to automation and infrastructure—with speed, scalability, reliability, and user experience in mind.",
    "hero.cta.primary": "Get in touch",
    "hero.cta.secondary": "Download CV",
    "hero.portraitAlt": "Portrait of Felipe Florez",

    // Metrics bar
    "metric.resolution": "First-version resolution",
    "metric.cost": "Cloud cost reduction",
    "metric.years": "Years shipping software",
    "metric.aws": "AWS certifications",

    // Footer
    "footer.role": "Founding Engineer at Emilia · AWS Solutions Architect",
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
      "I'm a Founding Engineer at Emilia in Medellín, helping build the product and technical foundation from the ground up. I work across product engineering, architecture, APIs, integrations, automation, and infrastructure to take reliable AI systems into production.",
    "about.p2":
      "I work closely with the founders on product strategy, technical priorities, and execution. My electronic engineering and IoT background taught me to design for real-world constraints; today I pair that reliability mindset with Spec-Driven Development and AI-assisted workflows to move fast without making the system opaque.",

    // Skills
    "skills.eyebrow": "Capabilities",
    "skills.heading": "What I work with",

    // Experience
    "experience.eyebrow": "Experience",
    "experience.heading": "Where I've shipped",
    "experience.present": "Present",
    "nav.projects": "Projects",

    // Projects (bento)
    "projects.eyebrow": "Projects",
    "projects.heading": "Weekend builds",
    "projects.subcopy":
      "Every weekend I ship a small project with Spec-Driven Development: a live demo on its own subdomain, a public repo, and a short case study.",
    "projects.filter.all": "All",
    "projects.viewDemo": "Demo",
    "projects.viewSource": "Source",
    "projects.back": "Back to projects",
    "projects.empty.title": "First builds shipping soon.",
    "projects.empty.body":
      "The first projects are on the way, each with a demo, a public repo, and a case study. Follow along on GitHub.",
    "projects.empty.cta": "GitHub",

    // Project categories (capability — the filter axis)
    "category.agents": "Agents",
    "category.rag": "RAG",
    "category.guardrails": "Guardrails",
    "category.evals": "Evals",
    "category.routing": "Routing",
    "category.algorithms": "Algorithms",

    // Project format (badge — how it's experienced)
    "format.game": "Playable",
    "format.tool": "Tool",
    "format.calculator": "Calculator",
    "format.demo": "Demo",

    // Status
    "status.live": "Live",
    "status.wip": "WIP",

    // Certifications
    "cert.eyebrow": "Certifications",
    "cert.heading": "Credentials",
    "cert.inProgress": "In progress",
    "cert.educationLabel": "Education",
    "cert.degree": "B.S. in Electronic Engineering",
  },
  es: {
    "meta.title": "Felipe Florez, Founding Engineer en Emilia",
    "meta.description":
      "Founding Engineer en Emilia: productos de IA en producción, arquitectura, integraciones, automatización, infraestructura, sistemas de agentes y LLM.",

    // Header
    "nav.cv": "CV",
    "nav.skipToContent": "Saltar al contenido",

    // Hero
    "hero.eyebrow": "Founding Engineer en Emilia · Arquitecto de Soluciones AWS · Medellín, CO",
    "hero.heading": "Construyo sistemas de agentes y LLM que viven en producción.",
    "hero.subcopy":
      "En Emilia construyo productos de IA end-to-end: desde arquitectura e integraciones hasta automatización e infraestructura, con foco en velocidad, escalabilidad, fiabilidad y experiencia de usuario.",
    "hero.cta.primary": "Hablemos",
    "hero.cta.secondary": "Descargar CV",
    "hero.portraitAlt": "Retrato de Felipe Florez",

    // Metrics bar
    "metric.resolution": "Resolución a la primera",
    "metric.cost": "Reducción de costo cloud",
    "metric.years": "Años construyendo software",
    "metric.aws": "Certificaciones AWS",

    // Footer
    "footer.role": "Founding Engineer en Emilia · Arquitecto de Soluciones AWS",
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
      "Soy Founding Engineer en Emilia, en Medellín, y ayudo a construir desde cero las bases técnicas y de producto. Trabajo en ingeniería de producto, arquitectura, APIs, integraciones, automatización e infraestructura para llevar sistemas de IA fiables a producción.",
    "about.p2":
      "Trabajo de cerca con los fundadores en estrategia de producto, prioridades técnicas y ejecución. Mi experiencia en ingeniería electrónica e IoT me enseñó a diseñar para restricciones reales; hoy combino esa mentalidad con Spec-Driven Development y flujos asistidos por IA para avanzar rápido sin volver opaco el sistema.",

    // Skills
    "skills.eyebrow": "Capacidades",
    "skills.heading": "Con qué trabajo",

    // Experience
    "experience.eyebrow": "Experiencia",
    "experience.heading": "Dónde he entregado",
    "experience.present": "Actualidad",
    "nav.projects": "Proyectos",

    // Projects (bento)
    "projects.eyebrow": "Proyectos",
    "projects.heading": "Proyectos de fin de semana",
    "projects.subcopy":
      "Cada fin de semana publico un proyecto con Spec-Driven Development: una demo en vivo en su propio subdominio, un repo público y un mini case study.",
    "projects.filter.all": "Todos",
    "projects.viewDemo": "Demo",
    "projects.viewSource": "Código",
    "projects.back": "Volver a proyectos",
    "projects.empty.title": "Los primeros proyectos llegan pronto.",
    "projects.empty.body":
      "Los primeros proyectos vienen en camino, cada uno con demo, repo público y case study. Sígueme en GitHub.",
    "projects.empty.cta": "GitHub",

    // Project categories (capability — the filter axis)
    "category.agents": "Agentes",
    "category.rag": "RAG",
    "category.guardrails": "Guardrails",
    "category.evals": "Evals",
    "category.routing": "Ruteo",
    "category.algorithms": "Algoritmos",

    // Project format (badge — how it's experienced)
    "format.game": "Jugable",
    "format.tool": "Herramienta",
    "format.calculator": "Calculadora",
    "format.demo": "Demo",

    // Status
    "status.live": "En vivo",
    "status.wip": "En curso",

    // Certifications
    "cert.eyebrow": "Certificaciones",
    "cert.heading": "Credenciales",
    "cert.inProgress": "En curso",
    "cert.educationLabel": "Educación",
    "cert.degree": "Ingeniería Electrónica (Pregrado)",
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof (typeof ui)["en"];
