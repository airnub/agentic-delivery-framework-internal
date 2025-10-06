# Story Preview Template

## Spec Alignment
- **Story Spec:** `[link to story-spec.yaml instance]`
- **Verification Checklist:** `[link to verification-checklist.yaml instance]`
- **Evidence Bundle:** ``requirements-trace.json`` (update with bundle location)
- **Pulse Increment Window:** `start ➝ end`

## Scope Snapshot
| Path / Component | Intent | Evidence Link |
| --- | --- | --- |
| `path/to/file-or-dir` | Brief summary of change | [Spec §reference](#) |

## Scenario Traceability
| Scenario ID | Title | Evidence | Gate Coverage |
| --- | --- | --- | --- |
| scenario-1 | Short description | [Demo / Log / Screenshot](#) | spec-verify ✅ · tests-ci ✅ |

- Note: Align scenario IDs with `scenarios[].id` in the Story Spec.

## Preview Evidence
### Demos & Visuals
- [ ] Link to recorded demo or screenshot album
- [ ] API trace or log excerpt supporting key scenario

### Quality Signals
- [ ] Tests summary (unit/integration/SSP tasks)
- [ ] Schema / RLS diff explanation
- [ ] Performance snapshot vs perf-budget gate
- [ ] Security/static analysis notes
- [ ] Dependency / supply-chain review outcome

## Sequential Subtask Pipeline (SSP)
- `todo` → `doing` → `done`
  - [ ] Subtask / owner / evidence target
  - [ ]

## Decision & Risk Log
- **Security / Privacy:** `call out mitigations`
- **Rollout / Flags:** `launch plan`
- **Open Risks:** `link to issue or checklist item`

## Open Questions & Follow-ups
- [ ] Question / reference to spec section or checklist gate
- [ ]

## Handoff Notes (if applicable)
- **Current status:**
- **Next executor:**
- **Pending evidence:**

---

This work is licensed under CC BY-SA 4.0.
