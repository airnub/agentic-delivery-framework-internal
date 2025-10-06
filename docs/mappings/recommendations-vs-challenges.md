# Recommendations vs Challenges Mapping

> **Status:** Informative. This mapping links ADF v0.6.0 recommendations to the delivery challenges they help mitigate while remaining tool-agnostic.

| Recommendation | Challenge Addressed | How |
|----------------|---------------------|-----|
| Maintain the `handbook/README.md` playbooks alongside §1. | Teams lose traceability between backlog items and normative clauses. | The playbooks restate scope tags and cadence expectations so CR descriptions and Story artifacts stay anchored to specification identifiers without introducing tooling lock-in. |
| Adopt the `handbook/ssp.md` checklist templates when applying §2. | Multi-agent handoffs omit critical state, causing SSP stalls or rework. | The templates enumerate the Handoff Packet fields, prompting executors to document risks, pending gates, and guard timers in a reusable format. |
| Extend `handbook/cr-gates.md` for local policies under §3. | Gate ownership and evidence expectations drift across teams. | The handbook section consolidates gate steps, required evidence, and escalation criteria so Delivery Leads can calibrate enforcement without prescribing specific automation platforms. |
| Start prompts from `prompts/initial-agent-prompt.md` while meeting §4. | Prompt authors forget required hygiene references and access boundaries. | The baseline prompt includes callouts for scope citation, gate state, and sanitization reminders, reducing the chance of missing mandatory clauses. |
| Leverage `handbook/safety-rails.md` scenarios in §5 adoption. | Trust metrics and kill-switch drills are deprioritized until an incident occurs. | Scenario walkthroughs highlight telemetry inputs and activation protocols, helping teams schedule regular validations before an emergency. |
| Follow `handbook/pulse-increment.md` during §6 reviews. | Delivery Pulse sessions degrade into unstructured status updates. | The guidance provides agenda scaffolding and evidence bundle references, keeping Pulse increments tied to metrics and remediation tracking. |
| Cross-reference `handbook/metrics.md` and `specs/appendix-enterprise-mapping.md` per §7. | Compliance and DORA reporting remain siloed, delaying audit readiness. | The paired references map metrics to control IDs and policy anchors, enabling integrated reporting while allowing organizations to substitute their own repositories. |
