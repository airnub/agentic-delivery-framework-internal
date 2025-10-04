
# ADR 0002: Adopt Enterprise Naming (Agentic Delivery Framework)

## Status

Accepted

> Repository renamed from `airnub/agentic-agile` to `airnub/agentic-delivery-framework` (docs-only update; no change to decision).

## Context

Early documentation used “Agentic-Agile,” “Outer Orchestrator,” and “Inner Dev Agents.”
Enterprise stakeholders (directors, PMO, security) asked for terminology that maps to
familiar delivery structures while remaining methodology-neutral.

## Decision

Adopt the **Agentic Delivery Framework (ADF)** naming set:

- Framework: **Agentic Delivery Framework (ADF)** with alias note (“Formerly
  Agentic-Agile”).
- Outer orchestrator: **Program Director** (service/GitHub App) controlling Iterations,
  Codespaces, and governance.
- Inner team: **Delivery Team** (agents + humans inside Codespaces) implementing Stories
  via PRs.
- Timebox: **Iteration** (synonyms Sprint/Cycle allowed in glossary).
- Work items: **Epic → Story → Task** with optional Change Request.

## Rationale

- Aligns with enterprise language for program/delivery management.
- Matches GitHub-native concepts (Projects Iterations, PR governance).
- Keeps the spec behavior unchanged—semver patch (v0.0.11) captures naming-only update.
- Provides glossary consistency across README, AGENTS, docs, prompts, and specs.

## Consequences

- Documentation references ADF terminology with notes about the former names for
  continuity.
- Program Director/Delivery Team labels appear in prompts, ADRs, specs, and roadmap.
- Future work can refer to the enterprise naming doc for alternative sets if
  organizations need variation.
