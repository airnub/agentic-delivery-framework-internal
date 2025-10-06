## Story Preview (Spec-aligned)
- **Story Spec:** `[link to story-spec.yaml instance]`
- **Story Preview:** `[link to updated preview doc]`
- **Verification Checklist:** `[link to verification-checklist.yaml instance]`
- **Evidence Bundle:** ``requirements-trace.json`` (path in repo or storage)

### Scope & Scenarios
- [ ] Scope table in Preview matches `scope.included` / `scope.excluded`
- [ ] Scenario IDs align with `scenarios[].id` in the Story Spec
- [ ] Evidence links in Preview map to Verification Checklist entries

### Gate Evidence (MUST reference artifacts or job URLs)
- [ ] `spec-verify`
- [ ] `tests-ci`
- [ ] `security-static`
- [ ] `deps-supply-chain`
- [ ] `perf-budget`
- [ ] `framework-guard`
- [ ] `mode-policy`
- [ ] `preview-build`
- [ ] `human-approval`

### Neutrality & Hygiene
- [ ] Terminology and filenames match ADF canon (`requirements-trace.json`, gate names)
- [ ] Links validated and scoped to repository or neutral hosts
- [ ] SSP board updated with current status and owners

---

This work is licensed under CC BY-SA 4.0.
