# Spec: Skills (grouped)

- **Type:** section · **Status:** built · **Last updated:** 2026-06-24
- **Related:** specs/landing.md · src/components/Skills.astro · src/data/skills.ts

## Goal
Show capability breadth at a glance, grouped so it reads as a system, not a keyword dump.

## Audience & intent
Recruiter: scan for stack fit. Community: see the AI-eng toolchain.

## Content (from CV, data-driven in `src/data/skills.ts`)
Four groups, localized titles + tech chips:
1. LLM Systems (Production) — RAG, Agent Orchestration (LangGraph), Bedrock, Pinecone,
   LiteLLM (model routing), Tool Execution/MCP, Guardrails, Eval & Observability.
2. AI-Assisted Development & SDD — Claude Code, Cursor, Devin, SDD, Spec Kit, OpenSpec,
   Anthropic/OpenAI APIs, Prompt Engineering, Agent Scaffolding.
3. Cloud & Backend — AWS (Lambda, DynamoDB, SQS, API Gateway, Bedrock), Supabase,
   Vercel, Docker, CI/CD, Event-Driven, Microservices, Serverless.
4. Engineering Foundations — Python, REST APIs, System Integration, Data Modeling,
   PostgreSQL, JWT/Auth.

## Layout & UX
Responsive card grid (1 col → 2 cols). Each card: group title + chip list. Dark cards,
mono chips. Group order = LLM-first (most relevant).

## Motion
`data-reveal` per card; reduced-motion safe.

## Acceptance criteria
- [x] EN + ES (titles) · [x] responsive · [x] reduced-motion safe · [x] build + check pass

## Out of scope
Proficiency levels / logos. Items are proper nouns, not translated.
