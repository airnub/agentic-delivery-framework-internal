# No-Code Policy for the Agentic Delivery Framework Repository

This repository hosts the Agentic Delivery Framework methodology and specification only. To keep the canon focused on governance and process:

- **Do not add executable code** (no scripts, services, infrastructure definitions, or runnable samples).
- **Do not commit automation workflows** that build, test, or deploy software artifacts. Workflows MAY validate documentation (lint, link check) or enforce this policy.
- **Do not include vendored dependencies** or compiled assets. Diagram sources, Markdown, and other text-based artifacts are welcome.
- **Reference implementations live elsewhere.** Use companion repositories (e.g., `adf-github-suite`) for Delivery Lead services, Developer tooling, and platform-specific automation under appropriate software licenses.
- **Flag violations immediately.** Open an issue linking to the offending change and coordinate with maintainers to remove the code and redirect contributors to the correct implementation repository.

This policy applies to all directories, including historical branches. Exceptions require approval from the maintainers documented via RFC and governance decision.

---

This methodology/spec is licensed under CC BY-SA 4.0.
