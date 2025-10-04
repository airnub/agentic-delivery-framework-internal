# Goals (MVP → Near-term)

## MVP (v0.1.x)
- ✅ Two-loop architecture documented and reproducible.
- ✅ Program Director can **create/reuse/stop** a workspace runtime and **start** the Delivery Team.
- ✅ Delivery Team works on a single work item, opens a change request with “Closes <work-item>”.
- ✅ Change request gates: branch protection + required checks + automated review + human review.
- ✅ Secrets stored in managed vaults; **no unmanaged local execution**.

## Near-term (v0.2.x)
- 🔶 Work management Iterations drive cadence automatically.
- 🔶 Warm-start images enabled; < 5 minutes cold-start target for workspace runtimes.
- 🔶 Story templates with acceptance criteria and test stubs.
- 🔶 Budget/usage telemetry and idle workspace runtime shutdown.

## Success Metrics
- **Safety**: 0 direct pushes to protected branches; 100% changes via change requests.
- **Velocity**: median time work item → merged change request < 24h (pilot), CI pass rate > 95%.
- **Reproducibility**: new workspace runtime yields green CI on fresh clone.
- **Cost**: idle workspace runtimes stopped within 30 minutes; monthly spend within budget signals.
