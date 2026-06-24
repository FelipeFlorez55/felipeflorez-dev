/**
 * Grouped capabilities for the Skills section. Group titles are localized; individual
 * items are proper nouns / tech names and stay as-is. Source: CV.
 */
import type { Localized } from "../i18n/utils";

export interface SkillGroup {
  title: Localized;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: { en: "LLM Systems (Production)", es: "Sistemas LLM (Producción)" },
    items: [
      "RAG",
      "Agent Orchestration (LangGraph)",
      "Amazon Bedrock",
      "Pinecone",
      "LiteLLM (model routing)",
      "Tool Execution / MCP",
      "Guardrails",
      "Evaluation & Observability",
    ],
  },
  {
    title: {
      en: "AI-Assisted Development & SDD",
      es: "Desarrollo asistido por IA & SDD",
    },
    items: [
      "Claude Code",
      "Cursor",
      "Devin",
      "Spec-Driven Development",
      "Spec Kit",
      "OpenSpec",
      "Anthropic Claude API",
      "OpenAI API",
      "Prompt Engineering",
      "Agent Scaffolding",
    ],
  },
  {
    title: { en: "Cloud & Backend", es: "Cloud & Backend" },
    items: [
      "AWS Lambda",
      "DynamoDB",
      "SQS",
      "API Gateway",
      "Bedrock",
      "Supabase",
      "Vercel",
      "Docker",
      "CI/CD",
      "Event-Driven Systems",
      "Microservices",
      "Serverless",
    ],
  },
  {
    title: { en: "Engineering Foundations", es: "Fundamentos de ingeniería" },
    items: [
      "Python",
      "REST APIs",
      "System Integration",
      "Data Modeling",
      "PostgreSQL",
      "JWT/Auth",
    ],
  },
];
