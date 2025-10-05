# ADF Delivery Handbook

This handbook distills the working agreements for Delivery Leads, Product Owners, and Developers (Human / AI / Hybrid) who operate inside the Agentic Delivery Framework.

## Operating cadence

- **Sprint Planning**: Delivery Lead and Product Owner align on the Sprint Goal, confirm WIP limits (≤3 in-progress Stories per team/agent), and brief Developers on Story Preview expectations.
- **Delivery Pulse**: Automated overnight run produces the Pulse Increment, followed by a 10–15 minute sync to inspect telemetry, unblock work, and confirm the next daily target.
- **Sprint Review**: Demonstrate the Increment that met the Definition of Done (DoD) plus Story Preview evidence for each completed Story.
- **Sprint Retrospective & Backlog Refinement**: Adjust WIP limits, update DoD + Performance Budget thresholds, and refine upcoming Product Backlog Items.

## Change Request governance

Every change merges via a **Change Request (CR)**. To pass the DoD and CR gates, the Delivery Lead confirms evidence for:

1. **CI/tests** – automated verification of the workspace runtime recipe.
2. **QA verification** – Story Preview instructions or recorded walkthrough proving acceptance criteria.
3. **Security review** – SAST/DAST/dependency scans appropriate to the change scope.
4. **Automated review** – summarization or policy analysis that surfaces risky edits.
5. **Human approval** – accountable reviewers sign off; hybrid pairs document provenance.
6. **Performance Budget** – latency/resource checks (or documented exceptions) when performance-sensitive surfaces change.

The Delivery Lead records gates inside the CR and attaches links to Story Previews and Pulse Increment reports.

## Story Preview & Pulse Increment practice

- **Story Preview**: Per-story demo, environment recipe, and evidence captured in the CR before the Story moves to Done. Include rollback guidance if applicable.
- **Pulse Increment**: Daily demo build generated from merged, green work. Publish telemetry and change notes ahead of the Delivery Pulse so stakeholders can inspect progress asynchronously.

## Repository guardrails (no-code policy)

This repository hosts the Agentic Delivery Framework methodology and specification only. To keep the canon focused on governance and process:

- **Do not add executable code** (no scripts, services, infrastructure definitions, or runnable samples).
- **Do not commit automation workflows** that build, test, or deploy software artifacts. Workflows MAY validate documentation (lint, link check) or enforce this policy.
- **Do not include vendored dependencies** or compiled assets. Diagram sources, Markdown, and other text-based artifacts are welcome.
- **Reference implementations live elsewhere.** Use companion repositories (e.g., `adf-github-suite`) for Delivery Lead services, Developer tooling, and platform-specific automation under appropriate software licenses.
- **Flag violations immediately.** Open an issue linking to the offending change and coordinate with maintainers to remove the code and redirect contributors to the correct implementation repository.

This policy applies to all directories, including historical branches. Exceptions require approval from the maintainers documented via RFC and governance decision.

## WIP management & modalities

- Keep no more than three Stories in progress per team/agent. Delivery Lead monitors the Sprint Backlog and pauses new starts when the WIP limit is reached.
- Document whether each accountability is fulfilled by Human, AI, or Hybrid pairs in Sprint notes and CR metadata.
- Capture provenance for automated contributions (model, version, prompting) alongside Story Previews and Pulse Increment records.

---

This methodology/spec is licensed under CC BY-SA 4.0.
