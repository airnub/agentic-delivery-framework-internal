# ADF Roadmap to 24×7 Autonomous Delivery (A0→A4)
_non-normative; complements the ADF v0.5.0 specification_

**Purpose.** This roadmap describes how an enterprise can evolve from today’s human-led SDLC to a governed, mostly-autonomous model where agents plan, build, test, and re-plan the Product Backlog continuously, while humans act as governors of goals, policy, and exceptions.

> **Scope & Status**  
> This document is guidance, not a standard. The ADF specification remains the single source of normative requirements.

## 1) What’s already autonomy-friendly in ADF
- **CR-first invariant.** A single control point to allow/deny agent-initiated change; all execution flows through predictable, policy-enforceable surfaces.
- **Sequential Subtask Pipeline (SSP) + Story Lease.** Constrains parallelism, suppresses agent swarm conflicts and PR sprawl—key for 24/7 machine workers.
- **Measurable CR gates.** `spec-verify`, `tests-ci`, `security-static`, `deps-supply-chain`, `perf-budget`, `framework-guard`/`mode-policy`, `preview-build`, `human-approval` → de-facto policy-as-code guardrails.
- **Delivery Pulse.** Automated intake/verification heartbeat with a short human sync → seed of autonomous re-planning.
- **Inspectability.** Story Previews, Evidence Bundles, Minimal Metrics → human governance over autonomous agents.
- **Vendor-neutral method with example platform profiles.** Concrete GitHub mapping without lock-in; others can be added.

## 2) Autonomy Levels (A0–A4)
Progressive trust model; teams opt-in by area.

| Level | Capability (summary) | Typical Permissions | Required Gates (Δ from base) |
|------:|----------------------|---------------------|------------------------------|
| **A0** | Suggest | Read-only analysis, draft comments | spec-verify (advisory), no write |
| **A1** | Execute (branch) | Push branches | tests-ci (required), spec-verify |
| **A2** | Execute (CR) | Open CRs | all base gates except human-approval |
| **A3** | Merge-on-Green | Merge limited scope on green | **+ cost-budget, risk-budget**; preview-build; feature-flag where applicable |
| **A4** | Self-Plan | Decompose backlog, schedule SSP, open CRs under quotas | All A3 + **periodic human ratification**, area/path quotas, Story Lease Broker enforcement |

**Policy binding.** Implement as rules tied to labels/paths (e.g., `autonomy:A2`, `area:payments`) so `framework-guard` / `mode-policy` can enforce.

## 3) New components to add (design intent)
### 3.1 Story Lease Broker
- **Goal:** Only one agent has “write” on a Story at a time; enforce org/team WIP limits.  
- **Mechanics:** labels `lease:active|released`, status check `adf/lease-broker`, hard block on second writer, auto-release on CR merge.

### 3.2 Autonomous Intake & Re-plan (pre-Pulse bot)
Before the human sync, a bot:
1) Scores Product Backlog vs Product Goal, 2) proposes Sprint scope, 3) pre-drafts Story Previews with acceptance criteria,  
4) proposes SSP decomposition + leases, 5) opens CR shells for top items. Humans ratify exceptions in ≤15 minutes.

### 3.3 Cost & Risk Budgets (first-class gates)
- **cost-budget:** tokens/$ per Story/day; org/project caps; recorded in Evidence Bundle.  
- **risk-budget:** blast radius class (low/med/high), feature-flag required for med/high, and path-based risk tiers.  
- **Autonomy gates:** A3/A4 must be green and under quota.

### 3.4 Agent Run Ledger (evidence hardening)
Extend Evidence Bundle with a hash-linked ledger for tamper-evidence:

```json
{
  "run_id": "uuid",
  "story_id": "STORY-123",
  "autonomy_level": "A2",
  "model": {"name":"...", "version":"...", "hash":"..."},
  "prompt_shas": ["sha256:..."],
  "tools": [{"name":"...", "version":"..."}],
  "datasets": [{"name":"...", "version":"...", "hash":"..."}],
  "cost": {"tokens": 12345, "usd": 1.23},
  "risk": {"blast_radius":"low","feature_flag":true},
  "evidence_hash": "sha256:...",
  "prev_hash": "sha256:...",
  "hash": "sha256:..."
} 
```

### 3.5 Model & Data Governance (split the gate)
- **model-policy:** allowed models/capabilities by autonomy level, eval thresholds, red-team scorecard.
- **data-policy:** PII/PHI classification, redaction, training-data provenance, and RLS guarantees for agents.
- Keep vendor-neutral; provide per-platform “profiles” (GitHub, GitLab, Azure DevOps).

### 3.6 Safety, kill-switch, break-glass CAPA
- Org-wide emergency label `ops:freeze` to fail non-critical gates instantly.
- Break-glass requires CAPA entry in Evidence Bundle + follow-up PR within 24–48h.

### 3.7 Autonomous test & preview enrichment
Every CR must attach: (a) generated tests + coverage deltas, (b) ephemeral Preview URL,  
(c) synthetic user flows, (d) perf snapshots—checked by gates.

### 3.8 Enterprise mappings (adoption aids)
- **Change Management:** Map CR artifacts → CAB-lite policy by autonomy level; allow pre-authorized A3/A4 merges within guardrails.
- **Compliance:** Appendix mapping Evidence Bundle → SOC2/ISO change evidence.
- **Metrics:** Tie Minimal Metrics → DORA (lead time, CFR, MTTR, deploy freq) to prove safety as autonomy rises.

### 3.9 Multi-platform profiles
Keep GitHub as worked example; add stubs for GitLab & Azure DevOps to demonstrate neutrality.

## 4) Phased path to autonomy
- **Phase L0 (now):** CR-first + SSP + gates + Pulse + Evidence.
- **Phase L1:** Add Autonomy Levels + cost/risk budgets + Story Lease Broker.
- **Phase L2:** Autonomous Intake & Re-plan before Pulse; A2/A3 in limited areas.
- **Phase L3:** A4 in pre-approved domains; humans govern by exception and quarterly policy updates.

### Phase checklists
- **L1 readiness**  
  - Labels & path rules for autonomy.*  
  - cost-budget/risk-budget gate stubs  
  - Lease Broker check in CI
- **L2 readiness**  
  - Intake/Re-plan bot drafting Story Previews & CR shells  
  - Policy quotas per area/path
- **L3 readiness**  
  - Merge-on-Green for scoped areas  
  - Feature-flag policy + rollback runbook  
  - Quarterly policy review cadence

## 5) Governance cadence
- **Delivery Pulse:** daily/regular heartbeat; humans ratify exceptions.
- **Quarterly policy review:** adjust autonomy scopes, budgets, and profiles based on metrics and incident learnings.

## 6) Link map
- ADF v0.5.0 Spec: [docs/specs/adf-spec-v0.5.0.md](../specs/adf-spec-v0.5.0.md)
- Autonomy Principle: [docs/vision/autonomy-principle.md](../vision/autonomy-principle.md) _(if present)_
- Evidence Bundle schema: [docs/handbook/evidence-bundle.md](../handbook/evidence-bundle.md)
- Story Preview standard: [docs/handbook/story-preview.md](../handbook/story-preview.md)

## Changelog
- **v0.1.0** — Initial roadmap added (non-normative)

This work is licensed under CC BY-SA 4.0.
