# Kill-Switch & Rollback Runbook (ADF v0.6.0)

## Triggers
- Autonomy metrics breach (per thresholds) for 2 consecutive sprints
- Critical incident (security, outage, compliance breach)
- Policy violation (mode/preset guardrails bypass attempt)

## Immediate Actions
1. Freeze autonomy level (e.g., revert A3→A2 or A2→A1) and require human approvals for merges.
2. Disable non-essential automation on affected repos; enforce PR owners.
3. Revert or hotfix impacted changes; enable feature flags to mitigate user impact.

## Communication
- Delivery Lead posts incident note with: summary, impacted scope, metrics snapshot, actions, ETA.
- Notify stakeholders (Eng, Security, Compliance) and open a tracking ticket.

## Remediation
- Root cause analysis; add/adjust gates or policies; strengthen prompts/specs.
- Define exit criteria to restore autonomy (target metrics, green gates).

## Templates
- **Incident Note:** date/time, trigger, severity, actions taken, next steps, owner.
- **Autonomy Ledger Entry:** level change, rationale, metrics at change, approvers.
