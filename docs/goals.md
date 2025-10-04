# Goals (MVP → Near-term)

## MVP (v0.1.0)
- ✅ Two-loop architecture documented and reproducible.
- ✅ Program Director can **create/reuse/stop** a Codespace and **start** the Delivery Team.
- ✅ Delivery Team works on a single Issue, opens PR with “Closes #<id>”.
- ✅ PR gates: Branch Protection + required checks + Copilot Code Review.
- ✅ Secrets stored as Codespaces/Repo/Org secrets; **no local execution**.

## Near-term (v0.2.x)
- 🔶 Projects (Iterations) drive Iteration cadence automatically.
- 🔶 Prebuilds enabled; < 5 minutes cold-start target.
- 🔶 Story templates with acceptance criteria and test stubs.
- 🔶 Budget/usage telemetry and idle Codespace shutdown.

## Success Metrics
- **Safety**: 0 direct pushes to default branch; 100% changes via PRs.
- **Velocity**: median time Issue→PR < 24h (pilot), CI pass rate > 95%.
- **Reproducibility**: new Codespace yields green CI on fresh clone.
- **Cost**: idle Codespaces stopped within 30 minutes; monthly minutes within budget.
