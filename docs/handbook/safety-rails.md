---
title: "Agent Safety Rails Handbook"
summary: "Constraints and operating practices for agents contributing under ADF v0.5.0."
---

# Agent Safety Rails Handbook

This handbook elaborates on the [Agent safety rails](../specs/adf-spec-v0.5.0.md#10-safety-rails-for-agents) to support responsible automation.

## Table of Contents
- [Principles](#principles)
- [Scope Management](#scope-management)
- [Story Lease Etiquette](#story-lease-etiquette)
- [Story Preview Responsibilities](#story-preview-responsibilities)
- [Idempotent Execution](#idempotent-execution)
- [Risk Communication](#risk-communication)
- [Escalation Protocols](#escalation-protocols)
- [Safety Rails Checklist](#safety-rails-checklist)

## Principles

- **Transparency:** Agents **MUST** log reasoning steps and decisions in CR discussions or Story Previews.
- **Least Privilege:** Agents **SHOULD** request only the permissions needed for the Story scope.
- **Auditability:** Actions **MUST** be traceable via Evidence Bundles and Pulse telemetry.

## Scope Management

- Declare initial scope (files, services, data stores) before editing.
- Update scope when new areas are touched; include justification in the Story Preview.
- Respect Edit Locality thresholds. If change volume outside scope exceeds guardrail, pause and escalate.
- For cross-cutting work, request a dedicated refactor Story per the [SSP guide](ssp.md).

## Story Lease Etiquette

- Acquire lease before making commits. Automation **SHOULD** block pushes without valid lease metadata.
- Renew lease proactively; if unable, release and document status for the next executor.
- Record lease handoffs in the Story Preview with a timestamp and pending tasks.

## Story Preview Responsibilities

- Populate the Story Preview template with rationale for schema/security adjustments.
- Attach evidence (logs, screenshots, metrics) as soon as available; avoid batching at the end.
- Clearly state limitations (e.g., environment not accessible, tests skipped) and mitigation steps.
- Note any human approvals required, tagging reviewers early via `human-approval` gate expectations.

## Idempotent Execution

- Prefer deterministic scripts and configuration changes. Capture command sequences in the Story Preview or runbook.
- When generating code or data, include seeds or fixtures to enable repeatable runs.
- Validate that rerunning automation yields the same outputs. If non-idempotent, flag in risk section.

## Risk Communication

- Highlight security, privacy, or compliance implications explicitly in the Story Preview.
- If blocked by missing context or permissions, escalate to the Delivery Lead promptly.
- Document assumptions and fallback plans for partial implementations.

## Escalation Protocols

- On gate failure, log diagnosis steps, attempted fixes, and next actions in the Story Preview.
- Use the `break-glass` label only when authorized and ensure CAPA linkage per [CR Gates guide](cr-gates.md).
- If an agent cannot complete the Story within lease TTL, request human or hybrid support via work management tools.

Adhering to these rails keeps agent contributions auditable, safe, and aligned with organizational policies.

## Safety Rails Checklist

- [ ] Respect Edit Locality & declared scope
- [ ] No repo-wide refactors unless dedicated refactor story
- [ ] Rationale in Story Preview for schema/security changes
- [ ] Idempotent scripts; deterministic re-runs
- [ ] No secrets in previews/logs; sanitize before attach

---

This methodology/spec is licensed under CC BY-SA 4.0.
