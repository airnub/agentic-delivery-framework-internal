
# ADR 0002: Adopt Enterprise Naming (Agentic Delivery Framework)

## Status

Accepted

> Update (2025-10-04): Spec v0.3.0 / naming v0.0.3 confirm **Delivery Lead**, **Delivery Pulse**, **Story Preview**, and **Pulse Increment** as the canonical vocabulary across the repository.

> Repository renamed from `airnub/agentic-agile` to `airnub/agentic-delivery-framework` (docs-only update; no change to decision).

## Context

Early documentation used placeholder codenames that no longer align with the current vocabulary. Enterprise stakeholders (directors, PMO, security) asked for terminology that maps to familiar delivery structures while remaining methodology-neutral.

## Decision

Adopt the **Agentic Delivery Framework (ADF)** naming set:

- Framework: **Agentic Delivery Framework (ADF)** with Delivery Lead, Product Owner, and Developers as core accountabilities.
- Outer orchestration accountability: **Delivery Lead** managing Sprint cadences, workspace runtime lifecycle, and governance.
- Team accountability: **Developers** (Humans / AI / Hybrid) delivering Stories via Change Requests inside the governed workspace runtime.
- Timebox: **Sprint (aka Iteration)**.
- Work items: **Epic → Story → Task** linked to Change Requests.

## Rationale

- Aligns with enterprise language for program/delivery management.
- Matches GitHub-native concepts (Projects Iterations, PR governance).
- Keeps the spec behavior unchanged—semver patch (v0.0.11) captures naming-only update.
- Provides glossary consistency across README, AGENTS, docs, prompts, and specs.

## Consequences

- Documentation references ADF terminology consistently for continuity across specs, prompts, and profiles.
- Delivery Lead / Product Owner / Developers vocabulary is now canonical; historical labels remain only in archived documents.
- Future work can refer to the enterprise naming doc for alternative sets if organizations need variation.

---

This work is licensed under CC BY-SA 4.0.
