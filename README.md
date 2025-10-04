# Agentic Delivery Framework (ADF)

A GitHub‑native framework for **agentic software delivery** that enterprises can adopt without changing their governance model.

> Formerly **agentic-agile**.

- **Program Director (Product/Program layer)** runs **outside Codespaces**. It spins or reuses Codespaces per Iteration/story, seeds tasks, watches progress via Projects (Iterations), and gates merges with PR rules and Copilot Code Review.
- **Delivery Team (Engineering layer)** runs **inside Codespaces** (your devcontainer) using tools like **Aider**, **Cline**, **Continue**, or **OpenHands**. They iterate on stories, run the stack (Docker/Supabase), push branches, and open PRs. **No local machine** is touched.

> Why: Waterfall‑ish, one‑shot “generate my app” runs often break in real teams. This project embraces **tight Agile loops** with observable state (Issues/PRs/Checks), containerized dev envs (Codespaces), and GitHub‑native security & audit.

## Core Principles
- **Safety first**: all edits happen in Codespaces; merges only via PR with required checks.
- **Agile loops**: stories → tasks → PRs → reviews → acceptance; new Iteration (Sprint/Cycle) = fresh Codespace.
- **GitHub‑native**: Projects (Iterations), Actions, Branch Protection, Copilot Code Review.
- **Model‑agnostic**: call **GitHub Models** (OpenAI/Anthropic/Google) from both layers.
- **Reproducible envs**: devcontainer + Prebuilds; optional Supabase + Docker‑in‑Docker.

## Quick Start
1. Add docs from `/docs` and `AGENTS.md` in repo root.
2. Enable **Projects (Iterations)** for planning. Create an Iteration (Sprint/Cycle) board.
3. Turn on **Branch Protection** + required checks; enable **Copilot Code Review** on PRs.
4. (Optional) Configure **Codespaces Prebuilds** and **Codespaces Secrets** for tokens.
5. Use the prompt in `docs/prompts/initial_agent_prompt.md` with your chosen agent (e.g., Aider/Continue/OpenHands) to wire the first Iteration loop.

## What’s Inside
- `AGENTS.md` – roles, capabilities, and safety rails for the Program Director and Delivery Team.
- `docs/vision.md` – long‑term vision and outcomes.
- `docs/problem-statement.md` – what breaks today (waterfallish agents, unsafe local writes).
- `docs/goals.md` – measurable MVP goals and guardrails.
- `docs/roadmap.md` – phased plan (P0→P3).
- `docs/specs/spec.v0.1.3.md` – semver MVP spec for orchestration + Delivery Team loop (naming update).
- `docs/adrs/0001-architecture-dual-loop.md` – ADR for dual‑loop (Program Director + Codespaces).
- `docs/prompts/initial_agent_prompt.md` – comprehensive coding‑agent prompt to (re)generate docs and wire the loop.

## Architecture at a Glance (ADF)
```mermaid
flowchart TD
  %% Agentic Delivery Framework — Overview Flow
  A[Program Director\n(Outside Codespaces)] --> B{Select Iteration\nvia GitHub Projects}
  B -->|For each Story| C{Codespace exists?}
  C -->|No| D[Create Codespace\n(prebuilds, secrets, retention)]
  C -->|Yes| E[Resume Codespace]
  D --> F[Start Delivery Team inside Codespace\n(Aider/Cline/Continue/OpenHands)]
  E --> F
  F --> G[Create branch\nfeat/<issue-key>]
  G --> H[Implement Tasks\nplan → edit → run → test]
  H --> I[Open PR with checklists\n"Closes #<issue-id>"]
  I --> J{{PR Gates}}
  J --> J1[CI / Tests]
  J --> J2[QA Verification]
  J --> J3[Security Review\n(CodeQL / deps)]
  J --> J4[Copilot Code Review]
  J --> J5[Human Reviewer(s)]
  J -->|All pass| K[Merge → Close Issue →\nMove Story to Done]
  J -->|Fail| F
  K --> L{More Stories in Iteration?}
  L -->|Yes| B
  L -->|No| M[Stop/Hibernate Codespace\nGenerate Metrics]
  M --> N[Iteration Review & Retro\nProgram Director plans next Iteration]
```
Program Director (outer) orchestrates Iterations & Codespaces; Delivery Team (inner) ships via PRs under QA/Sec gates.

_Figure: Dual-loop flow shows how the Program Director guides Codespaces usage while the Delivery Team completes stories through PR gates. Formerly Agentic-Agile overview._

## Enterprise Naming & Roles

See [Enterprise-friendly naming schemes (method-agnostic)](docs/naming/enterprise-friendly-naming.md) for recommended terminology, enterprise aliases, and glossary guidance across Program Director, Delivery Team, Iterations, and work items.

## Status
Documentation scaffold. Next steps: implement the Program Director (as a GitHub App or service) and pick a Delivery Team agent (Aider/Cline/Continue/OpenHands) to run inside Codespaces.

