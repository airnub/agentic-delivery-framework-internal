---
title: "Delivery Pulse & Pulse Increment"
summary: "Operating the daily Pulse Increment cadence defined by ADF v0.5.0."
---

# Delivery Pulse & Pulse Increment

This guide explains how to produce and govern the Pulse Increment mandated in [Section 5 of the specification](../specs/adf-spec-v0.5.0.md#5-delivery-pulse-and-pulse-increment).

## Table of Contents
- [Cadence Overview](#cadence-overview)
- [Preparation Checklist](#preparation-checklist)
- [Pulse Increment Build Steps](#pulse-increment-build-steps)
- [Retention & Archival](#retention--archival)
- [Roles and Responsibilities](#roles-and-responsibilities)
- [Sample Agenda](#sample-agenda)
- [Break-Glass Reporting](#break-glass-reporting)

## Cadence Overview

- **When agents participate, part of the Pulse is reviewing SSP status (current lease holder, queue, checkpoints) and adapting today’s plan accordingly.**
- Runs daily at a fixed time aligned with team time zones.
- Produces a demoable artifact from the `main` branch.
- Aggregates telemetry: merged CRs, gate outcomes, DORA snapshot, risk register updates, and break-glass usage.
- Serves Product Owner, Delivery Lead, auditors, and agents.

## Preparation Checklist

1. **Artifact pipeline green:** Confirm build infrastructure healthy.
2. **Merged CR list:** Export since last Pulse, include Story IDs and owners.
3. **Gate outcomes:** Collect success/failure stats from CI.
4. **Metrics snapshot:** Compute DORA and agent metrics (see [Metrics guide](metrics.md)).
5. **Risk review:** Gather new risk entries, break-glass CAPA status, and blockers.
6. **Agenda notes:** Draft highlights, demo scripts, and decisions needed.

## Pulse Increment Build Steps

1. **Tag inputs:** Capture commit range from previous Pulse tag to current `main` head.
2. **Build artifact:** Run reproducible build or packaging script. Store output in `/artifacts/pulse/<date>/`.
3. **Assemble report:** Create `summary.md` including:
   - CR list with links and status.
   - Gate failures and remediation owners.
   - DORA metrics snapshot and trend commentary.
   - Break-glass events and CAPA links.
   - Risks, mitigations, and follow-ups.
4. **Attach Evidence:** Link relevant Story Previews and Evidence Bundles.
5. **Distribute:** Share the Pulse Increment via agreed communication channel (e.g., wiki, email, chat) before the live sync.
6. **Record:** Store artifacts for at least 14 days with immutable timestamps.

## Retention & Archival

- Keep the last 14 Pulse artifacts online for easy access.
- Archive older artifacts per governance policy (monthly bundle recommended).
- Ensure stored artifacts include checksums to prove integrity.

## Roles and Responsibilities

| Role | Responsibilities |
| --- | --- |
| Delivery Lead | Orchestrates build, ensures distribution, facilitates sync. |
| Product Owner | Reviews outcomes, updates backlog, confirms value delivered. |
| Developers/Agents | Provide demo walkthroughs, answer technical questions. |
| Auditors/Stakeholders | Observe compliance evidence, log follow-up actions. |

## Sample Agenda

1. Welcome & safety checks (2 min).
2. Demo walkthroughs (10–15 min) — highlight Story Previews merged since last Pulse.
3. Metrics & gate review (5 min) — spotlight trends or regressions.
4. Break-glass recap (3 min) — confirm CAPA ownership and due dates.
5. Risks & blockers (5 min) — update risk register, assign mitigations.
6. Next steps & reminders (2 min) — reinforce SSP or conformance improvements.

## Break-Glass Reporting

- Include a dedicated section in the Pulse summary listing break-glass CRs, reasons, and CAPA status.
- If a CAPA misses its due date, escalate during the meeting and flag in the risk register.
- Track recurring break-glass themes to inform process changes or additional guardrails.

For platform-specific automation pointers, reference the [GitHub profile](../profiles/github.md) and associated examples.

---

This work is licensed under CC BY-SA 4.0.
