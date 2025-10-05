# Recommended Labels for ADF v0.5.0

| Label | Description | Usage Guidance |
| --- | --- | --- |
| `story:<id>` | Links CR to a Story or work item. | Replace `<id>` with backlog identifier; required on all CRs. |
| `story:preview-ready` | Indicates Story Preview satisfies checklist. | Apply when Preview evidence complete; triggers reviewer notification. |
| `risk:pci` / `risk:pii` / `risk:auth` | Flags sensitive scope requiring human approval. | Apply alongside Story Preview risk notes to ensure CODEOWNERS review. |
| `break-glass` | Authorized bypass of gates 3–7 with CAPA requirement. | Only Delivery Lead applies; ensure CAPA link in CR and Pulse. |
| `preview-needs-update` | Signals reviewers that Preview lacks required evidence. | Remove after Story Owner updates Preview assets. |
| `pulse-blocker` | Marks CRs that must merge before next Pulse. | Use sparingly; escalate during Delivery Pulse planning. |

---

This methodology/spec is licensed under CC BY-SA 4.0.
