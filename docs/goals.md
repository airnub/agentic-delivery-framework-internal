# Goals (MVP → Near-term)

## MVP (v0.3.x)
- ✅ Planning & delivery flow documented with Delivery Lead, Product Owner, Developers accountabilities.
- ✅ Delivery Lead can **create/reuse/stop** a workspace runtime, start Developers, and facilitate Delivery Pulse.
- ✅ Developers work on a single Story, open a Change Request with “Closes &lt;story&gt;”, and attach a Story Preview.
- ✅ Change Request gates include branch protection, required checks, automated review, security review, human approval, and Performance Budget verification when applicable.
- ✅ Secrets stored in managed vaults; **no unmanaged local execution**.

## Near-term (next increments)
- 🔶 Work management Sprints drive cadence automatically with Delivery Pulse summaries.
- 🔶 Warm-start images enabled; &lt; 5 minutes cold-start target for workspace runtimes.
- 🔶 Story templates highlight Story Preview requirements and Performance Budget expectations.
- 🔶 Budget/usage telemetry, WIP limit tracking, and idle workspace runtime shutdown instrumentation.
- 🔶 Automated publication of the daily Pulse Increment for stakeholders.

## Success Metrics
- **Safety**: 0 direct pushes to protected branches; 100% changes via Change Requests with Story Previews attached.
- **Flow**: ≤3 active Stories per team/agent (WIP limit) with median time Story → merged CR < 24h, CI pass rate > 95%.
- **Transparency**: Daily Pulse Increment available before the Delivery Pulse; Story Preview evidence accessible in CR history.
- **Reproducibility**: new workspace runtime yields green CI on fresh clone; Performance Budget checks green or exception documented.
- **Cost**: idle workspace runtimes stopped within 30 minutes; Delivery Lead telemetry within budget signals.

---

This methodology/spec is licensed under CC BY-SA 4.0.
