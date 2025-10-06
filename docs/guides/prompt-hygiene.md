---
title: "Prompt Hygiene Guide"
summary: "Controls and review practices for ADF v0.6.0 prompt hygiene requirements across agent prompts, logs, and policy gates."
---

# Prompt Hygiene Guide

Follow this guidance with [ADF v0.6.0 §4](../specs/adf-spec-v0.6.0.md#4-prompt-hygiene-requirements) to keep prompts governable, auditable, and free of sensitive data.

## Table of Contents
- [Prompt Lifecycle](#prompt-lifecycle)
- [Sanitization Controls](#sanitization-controls)
- [Version Log Expectations](#version-log-expectations)
- [Review Workflow](#review-workflow)
- [Evidence Requirements](#evidence-requirements)
- [Playbook for Incidents](#playbook-for-incidents)

## Prompt Lifecycle

1. **Authoring:** Prompts **MUST** cite Story scope, specification clause, and gate context.
2. **Registration:** Record prompt metadata (author, purpose, clause, date) in the prompt version log before use.
3. **Execution:** Agents **MUST** run prompts inside approved workspaces with logging enabled.
4. **Retirement:** Archive superseded prompts with rationale; do not delete history.

## Sanitization Controls

- Secrets, credentials, and production data **MUST NOT** appear in prompts or prompt libraries.
- Implement automated linting or detection that scans for high-risk patterns (`AKIA`, `BEGIN RSA PRIVATE KEY`, etc.).
- Sanitization outputs **MUST** integrate with the `mode-policy` gate to block CRs containing unapproved data.
- Delivery Leads **SHOULD** schedule quarterly reviews of sanitization rules to catch emerging patterns.

## Version Log Expectations

Maintain a structured log (for example `docs/prompts/version-log.csv`) with these fields:

| Field | Requirement |
| --- | --- |
| Prompt ID | Unique identifier, stable across revisions. |
| Author | Person or agent accountable for creation. |
| Purpose | Concise description (e.g., "Generate Story Preview outline"). |
| Spec Clause | Clause reference such as `v0.6.0 §4`. |
| Last Review Date | Date reviewer confirmed compliance. |
| Reviewer | Name/handle of reviewer who approved latest revision. |

Logs **MUST** be exportable to auditors and linked from the Evidence Bundle when prompts influence CR outputs.

### Informative Example — Prompt Log Entry

```
# Informative illustration only
PROMPT-089, @deliver-bot, Story Preview generator, v0.6.0 §4, 2026-02-10, @reviewer-aria
```

Label optional tooling or formats as **informative** to preserve neutrality.

## Review Workflow

- Treat prompt changes like code: require peer review and SSP adherence.
- Reviewers **MUST** verify clause references, sanitization status, and prompt intent.
- Agents updating prompts **MUST** document reasoning in the Story Preview or CR notes.
- Deployment of new prompts **SHOULD** coincide with Pulse announcements to track adoption.

## Evidence Requirements

- Attach sanitized prompt diffs or references in the Evidence Bundle when prompts drive CR outcomes.
- Record sanitization scan logs in `gates/mode-policy/` to prove enforcement.
- Include prompt IDs in the Story Preview when referencing automated actions.

## Playbook for Incidents

- **Detection:** If a prompt leak or policy violation occurs, trigger incident response and activate the kill-switch if required (see [Kill-Switch & Rollback Runbook](kill-switch-runbook.md)).
- **Containment:** Revoke tokens or credentials potentially exposed. Purge prompt caches.
- **Remediation:** Update sanitization rules, rotate secrets, and add CAPA items to the Pulse agenda.
- **Post-Incident Review:** Document root cause and prevention steps in the prompt version log.

---

This work is licensed under CC BY-SA 4.0.
