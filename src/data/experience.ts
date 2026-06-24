/**
 * Professional experience for the Experience section. Localized fields carry EN/ES.
 * Source: CV. Newest-first. Keep highlights concise and metric-led.
 */
import type { Localized } from "../i18n/utils";

export interface ExperienceEntry {
  company: string;
  role: Localized;
  period: Localized;
  location: Localized;
  highlights: Localized<string[]>;
}

export const experience: ExperienceEntry[] = [
  {
    company: "SoftServe",
    role: { en: "R&D Engineer, AI", es: "Ingeniero de I+D, IA" },
    period: { en: "Feb 2026 – Present", es: "Feb 2026 – Actualidad" },
    location: { en: "Remote", es: "Remoto" },
    highlights: {
      en: [
        "Design agent-based SDLC workflows (Devin, Claude Code, Cursor) for enterprise clients in finance and retail.",
        "Lead AI-adoption workshops and prototype agentic patterns and evaluation frameworks for emerging LLM use cases.",
      ],
      es: [
        "Diseño flujos de SDLC basados en agentes (Devin, Claude Code, Cursor) para clientes enterprise en finanzas y retail.",
        "Lidero talleres de adopción de IA y prototipo patrones agénticos y frameworks de evaluación para nuevos casos de uso de LLM.",
      ],
    },
  },
  {
    company: "NOUSWARE",
    role: { en: "AI Engineering Lead", es: "Líder de Ingeniería de IA" },
    period: { en: "Feb 2025 – Feb 2026", es: "Feb 2025 – Feb 2026" },
    location: { en: "Remote", es: "Remoto" },
    highlights: {
      en: [
        "Lifted first-version resolution from 57% to 80% and cut cloud cost ~40% with tiered model routing.",
        "Built a serverless agent orchestrator on AWS Lambda + Bedrock with RAG (Pinecone), DynamoDB-backed state, and secure, typed tool execution (Pydantic).",
      ],
      es: [
        "Subí la resolución a la primera del 57% al 80% y reduje el costo cloud ~40% con ruteo de modelos por niveles.",
        "Construí un orquestador de agentes serverless en AWS Lambda + Bedrock con RAG (Pinecone), estado en DynamoDB y ejecución de herramientas segura y tipada (Pydantic).",
      ],
    },
  },
  {
    company: "Ivanti",
    role: {
      en: "Technical Consultant (Integration Engineer)",
      es: "Consultor Técnico (Ingeniero de Integración)",
    },
    period: { en: "Sep 2023 – Feb 2025", es: "Sep 2023 – Feb 2025" },
    location: { en: "Remote", es: "Remoto" },
    highlights: {
      en: [
        "Delivered 18+ production automation workflows and integrations across 7+ external systems.",
        "Shipped GenAI-based ticket triage that cut manual processing time ~35%.",
      ],
      es: [
        "Entregué 18+ flujos de automatización en producción e integraciones con 7+ sistemas externos.",
        "Implementé triage de tickets con GenAI que redujo el tiempo de procesamiento manual ~35%.",
      ],
    },
  },
  {
    company: "Ivanti",
    role: { en: "Support Engineer (L2)", es: "Ingeniero de Soporte (L2)" },
    period: { en: "Feb 2023 – Sep 2023", es: "Feb 2023 – Sep 2023" },
    location: { en: "Remote", es: "Remoto" },
    highlights: {
      en: [
        "Resolved 80+ complex production incidents, improving MTTR ~28%.",
        "Authored runbooks and known-issue guides that reduced ticket escalation ~30%.",
      ],
      es: [
        "Resolví 80+ incidentes complejos en producción, mejorando el MTTR ~28%.",
        "Escribí runbooks y guías de problemas conocidos que redujeron la escalación de tickets ~30%.",
      ],
    },
  },
  {
    company: "Floes Connecting",
    role: {
      en: "Founder & IoT Solutions Architect",
      es: "Fundador y Arquitecto de Soluciones IoT",
    },
    period: { en: "Jan 2020 – Feb 2023", es: "Ene 2020 – Feb 2023" },
    location: { en: "Remote", es: "Remoto" },
    highlights: {
      en: [
        "Built and deployed an end-to-end IoT solution (MQTT/EMQX on AWS, C++ firmware on ESP-01) running in production.",
        "Owned everything from circuit design and a PHP + SQL platform to on-site deployment and user training.",
      ],
      es: [
        "Construí y desplegué una solución IoT end-to-end (MQTT/EMQX en AWS, firmware C++ en ESP-01) en producción.",
        "Fui dueño de todo: desde el diseño de circuitos y una plataforma PHP + SQL hasta el despliegue en sitio y la capacitación.",
      ],
    },
  },
];
