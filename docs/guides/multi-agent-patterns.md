---
title: "Multi-Agent SSP Patterns"
summary: "Guidance for orchestrating Sequential Subtask Pipeline handoffs, Lease Steward duties, and Guard Timer enforcement in ADF v0.6.0."
---

# Multi-Agent SSP Patterns

Use this guide alongside [ADF v0.6.0 §2](../specs/adf-spec-v0.6.0.md#2-sequential-subtask-pipeline-ssp-multi-agent-handoffs) to implement multi-agent handoffs without compromising the Sequential Subtask Pipeline (SSP).

## Table of Contents
- [Roles and Responsibilities](#roles-and-responsibilities)
- [Handoff Packet Protocol](#handoff-packet-protocol)
- [Guard Timer Operations](#guard-timer-operations)
- [Attribution and Logging](#attribution-and-logging)
- [Coordination Playbook](#coordination-playbook)
- [Troubleshooting Handoffs](#troubleshooting-handoffs)

## Roles and Responsibilities

| Role | Duties |
| --- | --- |
| Lease Steward | **MUST** assign the initial executor, monitor Guard Timer breaches, and mediate disputes. |
| Outgoing Executor | **MUST** update the Handoff Packet before release, including risks and pending gates. |
| Incoming Executor | **MUST** acknowledge the packet and validate scope before editing. |
| Delivery Lead | **SHOULD** verify attribution logs and escalate recurring Guard Timer breaches. |

## Handoff Packet Protocol

1. **State Update:** Capture completed subtasks, remaining work, and blockers.
2. **Gate Snapshot:** Record gate status (`spec-verify`, `tests-ci`, etc.) with links to logs.
3. **Risk Ledger:** Note security, privacy, or dependency concerns requiring attention.
4. **Pending Decisions:** Flag approvals or decisions awaiting stakeholders.
5. **Confirmation:** Both executors **MUST** confirm the packet in the Story Preview log or CR thread.

Packets **MUST** reside within the Story branch (for example `handoff.md`) or Story Preview to maintain auditability.

### Informative Example — Handoff Packet Template

```
# Handoff Packet (informative template)
- Story: STORY-452 (`v0.6.0 §2.2`)
- Outgoing Executor: @agent-a (lease released 2026-02-16T14:05Z)
- Incoming Executor: @engineer-b (lease acquired 2026-02-16T14:06Z)
- Completed Subtasks: [ ] Subtask 4 pending tests
- Guard Timer: resets to 90 minutes on acknowledgment
- Gate Status: spec-verify ✅, tests-ci 🔄 (rerun queued)
- Risks: Awaiting secret rotation approval; monitor `mode-policy`
```

_This template is **informative** and MAY be adapted to organizational tooling._

## Guard Timer Operations

- Guard Timer duration **MUST** be declared in the Story Preview when multi-agent execution begins.
- Automation **SHOULD** alert the Lease Steward 15 minutes before expiry.
- On expiry, the Lease Steward **MUST** intervene by reassigning, pausing, or refocusing scope.
- Repeated expiries **MUST** be documented in the Delivery Pulse and feed the Trust Score (see [Trust Metrics guide](trust-metrics.md)).

## Attribution and Logging

- Log each executor transition in the Evidence Bundle under `provenance/hand-offs.json` or equivalent neutral file.
- Include timestamp, executor identifier, lease ID, and reason for transfer.
- When agents participate, attach Agent Run Ledger entries referencing the handoff to maintain provenance.

## Coordination Playbook

1. **Prepare:** Outgoing executor summarizes progress during the last checkpoint.
2. **Synchronize:** Hold a quick sync (async or live) to review blockers and confirm next steps.
3. **Transfer:** Update lease metadata, push final commits, and attach the Handoff Packet.
4. **Resume:** Incoming executor confirms environment readiness, reruns impacted tests, and resumes SSP loop.
5. **Inspect:** Lease Steward reviews first checkpoint post-handoff to ensure continuity.

## Troubleshooting Handoffs

- **Missing Packet:** Pause work, recreate from commit history, and log the gap as a `spec-variance` if data cannot be recovered.
- **Guard Timer Repeatedly Breached:** Evaluate scope sizing, adjust subtask decomposition, or involve the Delivery Lead for resource alignment.
- **Conflicting Edits:** Revert conflicting commits, restore single-writer semantics, and review lease broker automation.
- **Knowledge Gaps:** Schedule a Story Preview walkthrough or pair session to reset shared context.

---

This work is licensed under CC BY-SA 4.0.
