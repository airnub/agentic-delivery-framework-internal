# Roadmap

## P0 — Documentation & Conventions
- Land this docs scaffold; define branch naming, PR templates, and Issue templates.

## P1 — Manual Orchestrator
- A small Node/TS script (or GitHub App) that:
  - Reads the active **Iteration** from Projects.
  - Creates/reuses a Codespace; injects secrets; runs `gh codespace ssh -c` to start inner agent.
  - Monitors PR status; moves Issue to Done on merge; stops/parks the Codespace.

## P2 — GitHub App Orchestrator
- Replace PAT with App auth; fine‑grained permissions.
- Add budget controls and automatic prebuild warmups.
- Multi‑repo program view and cross‑repo story planning.

## P3 — Advanced
- Multi‑agent inner loop (test agent, docs agent, fixit agent).
- Risk‑based gates (e.g., extra reviewers for migrations/infra changes).
- Runbooks for rollbacks and hotfix sprints.
