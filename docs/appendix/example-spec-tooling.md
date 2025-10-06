---
title: "Appendix — Informative Spec Tooling"
summary: "Optional, tool-agnostic practices for maintaining ADF specifications."
---

# Appendix — Informative Spec Tooling

> **Status:** Informative. These practices are optional aids and MUST NOT be treated as conformance requirements.

## 1. Purpose

The practices described here help teams maintain ADF specifications without prescribing a specific vendor or product. Each item **MAY** be adapted to local tooling ecosystems.

## 2. Recommended Capabilities (Informative)

- **Schema Validation Scripts** — Use generic linting frameworks (for example, Markdown schema checkers) to ensure headings remain stable and appendices link correctly.
- **Link Integrity Checks** — Schedule a neutral link checker to run within the `spec-verify` gate. Record results in the Evidence Bundle when broken links are remediated.
- **Glossary Synchronization** — Maintain a lightweight script that diff-checks glossary entries between the spec and `docs/glossary.md` to detect missing definitions.
- **Terminology Guardrails** — Implement a vocabulary linter that alerts when deprecated gate names appear in drafts.

## 3. Workflow Suggestions (Informative)

1. Track specification issues using a `spec-backlog` label to separate them from implementation work.
2. Prior to opening a Change Request, run local preview tooling (for example, static site generators) to validate rendering.
3. Store reusable snippets in `docs/templates/` and reference them with Markdown includes rather than duplicating content.

## 4. Automation Handoff Pattern

Teams **MAY** configure a Sequential Subtask Pipeline specifically for specification upkeep:

1. **Draft Update** — Author proposes revisions on a feature branch.
2. **Terminology Review** — Reviewer confirms language alignment with gate names and glossary entries.
3. **Compliance Cross-Check** — Compliance partner compares the change against [Appendix — Compliance Mapping](compliance-mapping.md).
4. **DORA Impact Review** — Delivery Lead verifies whether metric collection guidance in [Appendix — DORA Alignment](dora-alignment.md) requires updates.

If any checkpoint reveals a gap, the Story **SHOULD** pause until mitigations are recorded in `spec-variance` notes.
