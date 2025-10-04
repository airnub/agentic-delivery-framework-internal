# Problem Statement

Current “AI builds my app” approaches feel **waterfall**: one giant plan, one giant run. They struggle with:

- **Unsafe execution**: agents edit unmanaged laptops; changes are hard to recover.
- **Opaque progress**: no crisp linkage between intent (requirements) and delivered artifacts.
- **Environment drift**: agents run in ad-hoc sandboxes that don’t match team stacks.
- **Vendor lock-in**: closed IDEs or pipelines limit container choice and self-hosting.
- **Weak governance**: merges without rigorous change request checks, Performance Budget guardrails, or WIP control.

We require a system that:
- Executes **only in a governed workspace runtime**, under enterprise policies and audit.
- Is **ADF-first** (Product Goal, Sprint Goal, Epics/Stories/Tasks) with observable state in the work management system and Change Requests.
- Provides **Story Previews** before marking Stories Done and publishes a daily **Pulse Increment** for transparency.
- Uses **automated review** + branch protection + security review + Performance Budget verification as guardrails.
- Allows **multi-model** reasoning across commercial and open models.
- Speaks enterprise language—**Delivery Lead**, **Product Owner**, **Developers**—so PMO, product, security, and engineering stay aligned with the Agentic Delivery Framework.
- Applies **WIP limits** (e.g., ≤3 active Stories per team/agent) to maintain flow and avoid overload.

---

This methodology/spec is licensed under CC BY-SA 4.0.
