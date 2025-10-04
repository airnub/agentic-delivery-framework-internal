# Agentic-Agile

Agentic-Agile is a GitHub-native framework for coordinating autonomous dev agents through Agile sprint loops. The project pairs an outer orchestration service with inner development agents that live entirely inside GitHub Codespaces so teams can plan, implement, and review work with a consistent, auditable workflow.

## Architecture Overview

### Dual-Loop Control Plane
- **Outer Orchestrator (Product/Program layer)** runs outside Codespaces. It manages sprint planning in GitHub Projects (Iterations), provisions or reuses Codespaces per story, seeds task context, and enforces merge safety through branch protection, required checks, and Copilot Code Review.
- **Inner Dev Agents (Engineering layer)** operate inside Codespaces using tools like Aider, Cline, Continue, or OpenHands. They pull context, execute code changes, run tests within the containerized stack, and raise PRs that link back to Issues.

### Shared Infrastructure
- **Devcontainer & Prebuilds** provide reproducible environments with optional Docker-in-Docker and Supabase tooling.
- **GitHub Models** (OpenAI, Anthropic, Google) supply reasoning and generation capabilities for both layers while remaining provider-agnostic.
- **Observability Hooks** use Issues, PR metadata, status checks, and review signals so the outer orchestrator can monitor and adapt sprint execution.

## Operating Principles
- **Safety first**: All edits happen in Codespaces; merges land only through reviewed PRs with passing checks.
- **Agile loops**: Stories move through plan → implement → review → acceptance, with Iterations providing the sprint heartbeat.
- **Automation with accountability**: Agents follow repeatable prompts, produce traceable artifacts, and respect branch protection policies.
- **Model neutrality**: Prompts and APIs allow swapping between GitHub Models providers without changing core flows.
- **Documentation-driven development**: ADRs, specs, and vision docs keep both layers aligned on goals and constraints.

## Quick Start
1. Review the documentation index below to understand vision, goals, and architectural decisions.
2. Enable **GitHub Projects (Iterations)**, create a sprint board, and seed it with Issues that reference this documentation.
3. Configure **Branch Protection**, required checks, and **Copilot Code Review** so PRs from inner agents are properly gated.
4. Optionally set up **Codespaces Prebuilds**, **Codespaces Secrets**, Docker-in-Docker, and Supabase tooling to match your stack.
5. Launch your chosen inner agent using the prompt in `docs/prompts/initial_agent_prompt.md`, targeting a feature branch such as `feat/<issue-key>-<slug>`.
6. Have the outer orchestrator monitor progress, move Issues across the sprint board, and close them once PRs merge.

## Documentation Index
- `AGENTS.md` — Roles, capabilities, and guardrails for the outer orchestrator and inner dev agents.
- `docs/vision.md` — Long-term direction for Agentic-Agile.
- `docs/problem-statement.md` — Current pain points that dual-loop automation addresses.
- `docs/goals.md` — MVP goals and measurable success criteria.
- `docs/roadmap.md` — Phase-by-phase plan from P0 to P3.
- `docs/specs/spec.v0.1.0.md` — Semver-aligned specification for orchestrator and agent behaviors.
- `docs/adrs/0001-architecture-dual-loop.md` — Architectural decision record for the dual-loop approach.
- `docs/prompts/initial_agent_prompt.md` — Bootstrap prompt for inner agents to regenerate documentation and agile rails.

## Status
Documentation scaffold is in place. Next steps include implementing the outer orchestrator (as a GitHub App or service) and selecting an inner agent (Aider, Cline, Continue, or OpenHands) to execute inside Codespaces.

