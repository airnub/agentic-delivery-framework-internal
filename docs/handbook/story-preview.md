---
title: "Story Preview Playbook"
summary: "Guidance and examples for producing Story Previews that satisfy ADF v0.5.0 requirements."
---

# Story Preview Playbook

This playbook converts the normative [Story Preview requirements](../specs/adf-spec-v0.5.0.md#4-story-preview) into actionable patterns and examples.

## Table of Contents
- [Purpose](#purpose)
- [Required Sections](#required-sections)
- [Evidence Collection Tips](#evidence-collection-tips)
- [Examples](#examples)
- [Common Anti-Patterns](#common-anti-patterns)
- [Review Checklist](#review-checklist)

## Purpose

Story Previews accelerate review by providing concise evidence of value, safety, and risk considerations. They also feed the Evidence Bundle and Pulse Increment summaries.

## Required Sections

Every Story Preview **MUST** include the following sections, aligned with the [PR template](../templates/pr-template.md):

1. **What/Why:** Plain-language summary of the change, linking to Story IDs.
2. **Scope:** Explicit list of directories/files touched. Update when scope changes.
3. **Risks:** Call out authentication, PII, schema, feature flag, or rollback concerns.
4. **Evidence:** Checklist referencing attachments:
   - Screens, API traces, or demo link.
   - Tests summary (pass/fail, coverage deltas).
   - Schema/RLS diff explanation.
   - Performance snapshot relative to baseline.
5. **Work Plan (optional but recommended):** Links to SSP subtasks and status.
6. **Rationale (conditional):** Required for schema/security changes per [Safety Rails](safety-rails.md).

## Evidence Collection Tips

- Capture screenshots or short clips directly in the CR or link to secure storage.
- For backend services, attach API traces or log excerpts demonstrating expected behavior.
- Use diff tools to highlight schema or permission changes and mention fallback strategy.
- When measuring performance, include baseline metrics and test environment details.
- Prefill the [Story Preview template](../templates/story-preview.md) at Story kickoff to avoid last-minute scrambling.

## Examples

### Example — Frontend Feature

```
## Story Preview
- **What/Why:** Adds checkout confirmation modal to reduce cart abandonment.
- **Scope (dirs/files):** `web/app/checkout/*`, `web/styles/modals.scss`
- **Risks (auth/PII/schema):** Touches payment capture flow; verified token handling unchanged.

### Evidence
- [x] Screens / API trace / Demo link — attached GIF showing modal.
- [x] Tests summary — `tests-ci` run 124 passed.
- [ ] Schema/RLS diff — n/a.
- [x] Perf budget snapshot — Lighthouse render stable at 1.4s.
```

### Example — Database Migration

```
## Story Preview
- **What/Why:** Introduces order audit table for compliance reporting.
- **Scope (dirs/files):** `db/migrations/2024-09-12-add-order-audit.sql`, `services/order_audit/*`
- **Risks (auth/PII/schema):** Adds new PII column; encryption in transit verified; RLS updated.

### Evidence
- [x] Screens / API trace / Demo link — included psql transcript verifying insert and query.
- [x] Tests summary — migration smoke tests via `tests-ci`.
- [x] Schema/RLS diff — snippet shows new RLS policy with rationale.
- [x] Perf budget snapshot — added query plan comparison <5% regression.
```

## Common Anti-Patterns

- **Missing risk rationale:** Always articulate the impact of schema or security changes.
- **Scope drift:** Update the scope list when new directories are touched to keep Edit Locality aligned.
- **Evidence placeholders:** Checkboxes without attachments delay review. Provide the actual asset or explain absence.
- **Verbose narrative:** Keep prose focused. Use bullet points and tables to highlight facts.

## Review Checklist

Reviewers **SHOULD** verify:

- Scope aligns with diff and Edit Locality report.
- Risk notes match sensitive file changes.
- Evidence attachments are accessible and reproducible.
- Rationale for schema/security changes is explicit.
- Preview references outstanding tasks or TODOs clearly.

For additional review guardrails, pair this guide with the [DoD Signals operations guide](cr-gates.md) and the [Evidence Bundle procedures](evidence-bundle.md).

---

This work is licensed under CC BY-SA 4.0.
