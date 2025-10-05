# ADF for Scrum Teams (informative)

**What changes?** Almost nothing. ADF is **Scrum + 3 invisible automations**:
1) **CR‑First** — Every change merges via a Change Request with a **Story Preview** and **CR Gates**.
2) **SSP (Sequential Subtask Pipeline)** — A small sequencing policy: one Story branch, exclusive **Story Lease**, ordered subtasks, single CR.
3) **Delivery Pulse** — A daily, ≤10‑minute look at a demoable artifact (the **Pulse Increment**) to keep progress inspectable.

## Scrum mapping (roles, events, artifacts)
- **Roles** — Product Owner; **Delivery Lead** (Scrum Master equivalent + authority over gates/lease); Developers (human + agent).
- **Events** — Sprint Planning, **Daily** (review the Pulse ≤10 min), Sprint Review, Sprint Retrospective.
- **Artifacts** — Product Backlog, Sprint Backlog, Increment. *Augments:* **Story Preview**, **Pulse Increment**.

## Adopt ADF in a Day (L1 Quickstart)
- Use the **PR template** with Story Preview → `../templates/pr-template.md`
- Require **`tests-ci`** and **`spec-verify`** gates.
- Enforce **CR‑First** merges (no direct pushes to `main`).
- Produce one **Delivery Pulse** artifact per day and glance at it in the daily.

## What stays the same
- Sprint cadence, Sprint Goal, PO acceptance, team ownership.
- No new ceremonies; the Pulse is not a meeting, just a 10‑minute artifact review.

## Where to go next
- **Spec v0.5.0** → `../specs/adf-spec-v0.5.0.md`
- **SSP (how the work flows)** → `../handbook/ssp.md`
- **CR Gates (what must be green)** → `../handbook/cr-gates.md`
- **Delivery Pulse** → `../handbook/pulse-increment.md`

---

This work is licensed under CC BY-SA 4.0.
