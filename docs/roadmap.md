# Roadmap

## P0 — Documentation & Conventions
- Land this docs scaffold; define branch naming, PR templates, and Issue templates aligned to ADF (Program Director + Delivery Team).

## P1 — Manual Program Director
- A small Node/TS script (or GitHub App) that:
  - Reads the active **Iteration** from Projects.
  - Creates/reuses a Codespace; injects secrets; runs `gh codespace ssh -c` to start the Delivery Team.
  - Monitors PR status; moves Issue to Done on merge; stops/parks the Codespace.

## P2 — GitHub App Program Director
- Replace PAT with App auth; fine-grained permissions.
- Add budget controls and automatic prebuild warmups.
- Multi-repo program view and cross-repo story planning.

## P3 — Advanced
- Multi-agent Delivery Team (test agent, docs agent, fixit agent).
- Risk-based gates (e.g., extra reviewers for migrations/infra changes).
- Runbooks for rollbacks and hotfix Iterations.
