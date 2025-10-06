---
title: "Spec-Driven Story Guide"
summary: "Operational playbook for enforcing the ADF v0.6.0 spec-driven workflow across backlog, Story Preview, and Evidence Bundle artifacts."
---

# Spec-Driven Story Guide

This guide complements [ADF v0.6.0 §1](../specs/adf-spec-v0.6.0.md#1-spec-driven-workflow) and translates the spec-driven workflow mandate into day-to-day delivery practices.

## Table of Contents
- [Core Responsibilities](#core-responsibilities)
- [Story Intake Checklist](#story-intake-checklist)
- [Maintaining the Spec Map](#maintaining-the-spec-map)
- [Deviation Handling](#deviation-handling)
- [Evidence Bundle Integration](#evidence-bundle-integration)
- [Governance Tips](#governance-tips)

## Core Responsibilities

- Delivery Leads **MUST** ensure every Story references an active specification clause (for example `v0.6.0 §3`).
- Product Owners **MUST** align backlog ordering with specification priorities and record links in the backlog tool.
- Executors (human or agent) **MUST** echo the clause reference in the Story Preview and CR description.
- Governance partners **SHOULD** audit the linkage weekly via the spec map or Pulse artifacts.

## Story Intake Checklist

| Step | Description | Owner |
| --- | --- | --- |
| 1 | Identify relevant specification clause(s) and confirm status (current, deprecated, appendix). | Delivery Lead |
| 2 | Capture clause identifier in Story description and Story Preview header. | Product Owner |
| 3 | Declare scope boundaries matching the clause intent (directories, services, data). | Executor |
| 4 | Enumerate CR gates that will prove compliance. | Executor |
| 5 | Log acceptance criteria mapped to clause bullet(s). | Product Owner |

> **Reminder:** Story creation **MUST NOT** proceed if a clause reference is missing or obsolete.

## Maintaining the Spec Map

Teams **SHOULD** maintain a living `spec-map.md` artifact (informative) with the following columns:

| Story ID | Specification Clause | Evidence Bundle Link | Status |
| --- | --- | --- | --- |
| `STORY-142` | `v0.6.0 §1.3` | `/artifacts/evidence/CR-582.zip` | Ready |

- Update the map at least once per Pulse Increment.
- Link to sub-sections (for example `§5.2`) when the Story covers a specific protocol.
- Include appendix references when deriving implementation details from informative content (clearly label them informative).

### Informative Example — Spec Map Automation

_Teams MAY generate the spec map using neutral tooling._

```bash
# Informative example only — replace with organization-approved tooling
python scripts/spec_map.py --spec docs/specs/adf-spec-v0.6.0.md --stories backlog.csv > spec-map.md
```

Label automation outputs as **informative** to avoid implying normative requirements.

## Deviation Handling

- Deviations **MUST** be recorded as `spec-variance` entries in the Evidence Bundle with mitigation owner and resolution date.
- Each variance **MUST** cite the impacted clause and the planned remediation Story.
- Delivery Leads **MUST** review open variances during the Pulse meeting until closure.
- Variances older than two Pulse increments **SHOULD** trigger escalation to governance.

## Evidence Bundle Integration

When packaging Evidence Bundles:

1. Embed clause references in `summary.md` and `requirements-trace.json`.
2. Store the current `spec-map.md` snapshot alongside the Evidence Bundle when the Story affects multiple clauses.
3. Ensure Handoff Packets (when used) cite the same clause identifiers for continuity.
4. Cross-link to relevant appendices (for example [Enterprise Mapping](enterprise-mapping.md)) for auditors.

## Governance Tips

- Add a spec-driven review item to PR templates to reaffirm clause coverage.
- Configure dashboards to flag Stories missing clause references.
- Train agents with prompts that include the clause identifier and scope (see the [Prompt Hygiene guide](prompt-hygiene.md)).
- During retrospectives, inspect where clause drift occurred and update backlog hygiene accordingly.

---

This work is licensed under CC BY-SA 4.0.
