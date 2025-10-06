---
title: "Enterprise Mapping Playbook"
summary: "Methods for mapping ADF v0.6.0 artifacts to enterprise compliance frameworks and governance checkpoints."
---

# Enterprise Mapping Playbook

Pair this playbook with [ADF v0.6.0 §8](../specs/adf-spec-v0.6.0.md#8-recommendations-mapping) and the [Enterprise Mapping appendix](../specs/appendix-enterprise-mapping.md) to translate ADF outputs into enterprise-friendly language without introducing tool lock-in.

## Table of Contents
- [Mapping Principles](#mapping-principles)
- [Artifact-to-Control Matrix](#artifact-to-control-matrix)
- [Governance Integration](#governance-integration)
- [Audit Preparation](#audit-preparation)
- [Stakeholder Communication](#stakeholder-communication)

## Mapping Principles

- Use neutral terminology and emphasize methodology artifacts (Story Preview, Evidence Bundle, Pulse Increment).
- Clearly label informative mappings; normative requirements remain in the specification.
- Maintain a single source for mappings to prevent drift across teams.
- Refresh mappings whenever the specification version increments.

## Artifact-to-Control Matrix

Construct an enterprise mapping table with the following columns:

| ADF Artifact | Control / Expectation | Evidence Notes |
| --- | --- | --- |
| Story Preview | Change impact analysis (CAB-lite) | Links to risk assessments and approvals. |
| Evidence Bundle | SOC 2 CC7.2 / ISO A.8.33 change records | Provide `summary.md`, gate outputs, provenance entries. |
| Trust Metrics Report | Continuous compliance monitoring | Show threshold adherence and remediation logs. |
| Pulse Increment | Operational oversight | Highlight metrics, break-glass events, CAPA status. |

Reference the appendix for broader frameworks (SOX ITGC, PCI DSS) and adapt language per audit request.

### Informative Example — Matrix Snippet

```
| Artifact | Control | Notes |
| Evidence Bundle | SOC2 CC7.2 | requirements-trace.json + gates/
```

_This snippet is **informative** and MAY be expanded within organizational tooling._

## Governance Integration

- Align governance meetings (CAB-lite, compliance reviews) with Pulse cadence to reuse telemetry.
- Store mapping tables in a governed repository with change tracking.
- Require governance approvals when adjusting mappings that affect regulated controls.
- When integrating with risk registers, reference both the specification clause and enterprise control IDs.

## Audit Preparation

- Compile a list of sampled CRs with links to Evidence Bundles, Story Previews, and Trust Metrics outputs.
- Prepare walkthrough scripts showing how a Story satisfies both ADF and enterprise controls.
- Ensure CAPA items tie back to control gaps and include remediation status.
- Use [Spec-Driven Story practices](spec-driven-story.md) to demonstrate traceability from requirement to implementation.

## Stakeholder Communication

- Translate ADF terminology for non-technical stakeholders (for example, explain `trust-metrics` as "automated risk scoring").
- Provide quick-reference glossaries during audits to minimize confusion.
- Share updates via governance newsletters or Pulse summaries to maintain awareness of mapping changes.

---

This work is licensed under CC BY-SA 4.0.
