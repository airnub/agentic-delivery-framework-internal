# AGENTS — Methodology Alignment Guide

## 1. Purpose
- Keep future human/AI agents aligned with methodology-first goals.
- Prevent vendor or product specifics from polluting the Agentic Delivery Framework (ADF).

## 2. Method vs Implementation
- **Method (normative):** rules, gates, artifacts, cadence, conformance levels. Edit these with precise MUST/SHOULD/MAY language.
- **Implementation (informative):** platform profiles, templates, and examples. Mark these clearly as informative and keep them optional.

## 3. Writing Rules
- Use RFC 2119-style terms (MUST/SHOULD/MAY) for normative statements.
- Label informative or example content explicitly; never imply it is required.
- Keep examples generic (e.g., `requirements-trace.json`, neutral labels) and avoid brand-specific filenames.
- Prefer relative links and ensure headings produce stable anchors.

## 4. Allowed vs Forbidden Content
- **Allowed:** Normative gate names, Mermaid diagrams, generic evidence structures, neutral policy language.
- **Forbidden:** Vendor-locked YAML, product API specifics, tool-specific CLI flags outside informative examples.

## 5. Editing Scope
- Focus edits on specs, handbook, templates, profiles, and diagrams.
- Do not add CI pipelines, policy code, or platform automation to this repo.
- Place illustrative platform examples under `docs/examples/<platform>/` and mark them informative.

## 6. Terminology & Naming
- Use the following gate names verbatim: `spec-verify`, `tests-ci`, `security-static`, `deps-supply-chain`, `perf-budget`, `framework-guard`, `mode-policy`, `preview-build`, `human-approval`.
- Use “Evidence Bundle,” “Pulse Increment,” “Story Preview,” and “Sequential Subtask Pipeline (SSP)” consistently.

## 7. Style & Structure
- Keep paragraphs short; prefer bullet lists and tables for procedures and checklists.
- Express one concept per section and cross-link related content instead of duplicating it.
- Diagrams MUST be Mermaid with descriptive node labels.

## 8. Quality Bar
- Validate there are no broken links; ensure Mermaid diagrams render on GitHub.
- Run repo-wide searches for disallowed terms and legacy filenames (anything other than `requirements-trace.json`) before opening a PR.
- Confirm optional examples remain clearly informative.

## 9. Commit & PR Hygiene
- Use conventional commits and keep changes atomic and reviewable.
- Summarize affected pages in PR descriptions and restate the tool-agnostic stance.
- Include a checklist confirming link checks, terminology updates, and neutrality scans were performed.

## 10. Canonical Examples
- Use `requirements-trace.json` when referencing the example Evidence Bundle requirements filename.
- Do not introduce alternative example filenames for the same artifact; treat non-canonical names as legacy references to replace.

## 11. Guidance
- **Kanban visualization:** You MAY present SSP via a minimal Kanban board as an informative lens. Do **not** remove the Story Lease, introduce parallel WIP, or add a second backlog.

---

This methodology/spec is licensed under CC BY-SA 4.0.
