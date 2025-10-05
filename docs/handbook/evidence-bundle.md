---
title: "Evidence Bundle Procedures"
summary: "Standard operating procedure for creating and auditing Evidence Bundles per ADF v0.5.0."
---

# Evidence Bundle Procedures

This document describes how to produce, store, and audit Evidence Bundles required in [Section 7 of the specification](../specs/adf-spec-v0.5.0.md#7-evidence-bundle).

> Filenames and directory layouts shown below are **examples**. Teams MAY substitute equivalent artifacts that satisfy ADF’s evidence requirements.

## Table of Contents
- [Purpose](#purpose)
- [Bundle Structure](#bundle-structure)
- [Creation Workflow](#creation-workflow)
- [Storage & Retention](#storage--retention)
- [Audit Checklist](#audit-checklist)
- [Automation Tips](#automation-tips)

## Purpose

Evidence Bundles provide a tamper-evident record linking change intent, execution, and verification. They enable auditors to trace requirements to implementation outcomes without recreating context from scratch.

## Bundle Structure

Each bundle resides at `/artifacts/evidence/<cr-id>.zip` and **MUST** contain the following directories and files:

```
requirements-trace.json # Requirements slice for the Story/CR
summary.md             # Change overview, approvals, risks
preview/               # Story Preview assets (screens, traces, demos)
gates/                 # CI outputs (JUnit, SARIF, SBOM, perf reports, policy logs)
provenance/            # Attestations, signatures, provenance metadata (informative examples documented)
sanitized-logs/        # Optional sanitized logs if policy demands
```

ADF documentation references `requirements-trace.json` as the neutral example filename for the requirements slice. Treat any
other legacy filenames as migration artifacts and update them to this canonical example when revising content.

## Creation Workflow

1. **Trigger:** Upon CR merge, an automation job packages required artifacts.
2. **Gather Inputs:**
   - Export Story Preview markdown from the CR.
   - Collect gate outputs (logs, reports) from the CI run.
   - Pull requirements metadata from a traceability map or work item tracker.
   - Capture provenance statements (e.g., build attestations) when available and document them as informative guidance.
3. **Assemble:**
   - Normalize filenames (snake_case) and ensure timestamps.
   - Generate `summary.md` containing:
     - Change summary, Story ID, approvers.
     - Gate run IDs and overall status.
     - Risks, mitigations, and CAPA references.
   - Validate directory structure and required files present.
4. **Package:** Zip the directory with deterministic ordering. Include checksum (e.g., SHA256) alongside bundle.
5. **Publish:** Upload to evidence storage with immutable retention settings. Record link in CR comment.

## Storage & Retention

- Retain bundles for the duration mandated by governance (minimum aligns with audit cycles; recommend ≥1 year).
- Use write-once, read-many (WORM) or versioned storage to prevent tampering.
- Index bundles by CR ID, Story ID, and Sprint for easy retrieval.
- Mirror metadata in the risk register or compliance tracker.

## Agent Run Ledger

The Agent Run Ledger captures deterministic provenance for automated execution. It is **REQUIRED** for autonomy levels A2 and above and **SHALL** be hash-linked (previous hash to current hash) for A3–A4 Story components.

Store the ledger entry inside the Evidence Bundle (for example `provenance/agent-run-ledger.json`) using a schema similar to the example below:

```json
{
  "model": {"name": "gpt-5-codex", "version": "2024-05-15", "hash": "sha256-abc123"},
  "prompts": {"system_sha": "sha256-sys000", "user_sha": "sha256-user999"},
  "tools": {"edit": "v1.2.3", "tests": "v0.9.5"},
  "datasets": {"fixtures": "sha256-fixture555"},
  "cost": {"tokens": 45872, "usd": 12.44},
  "risk": {"tier": "medium", "flag": "feature-flag/payment-toggle"},
  "prev_hash": "sha256-ledger-prev", 
  "hash": "sha256-ledger-current"
}
```

> **Note:** Include additional neutral keys (such as environment version or story lease ID) when necessary, but retain the core provenance fields above for audit parity.

## Audit Checklist

Auditors **SHOULD** verify:

- Bundle exists for sampled CRs and matches naming convention.
- `summary.md` accurately reflects CR metadata and approvals.
- Gate outputs correspond to the recorded pipeline run IDs.
- Story Preview assets align with change scope.
- Provenance records cover supply-chain attestations when required.
- Break-glass events include CAPA linkage in the bundle.

## Automation Tips

- Use CI post-merge workflows or GitHub Actions to assemble bundles (reference in [GitHub profile](../profiles/github.md)).
- Implement schema validation to ensure bundle completeness before publishing.
- For sensitive logs, run scrubbing scripts before placing them in `sanitized-logs/`.
- Emit metrics on bundle creation success/failure to feed the [Metrics guide](metrics.md).

For alignment with conformance goals, refer to the [Conformance guide](conformance.md).

---

This work is licensed under CC BY-SA 4.0.
