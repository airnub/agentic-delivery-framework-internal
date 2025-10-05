# Publishing / Backflow (NO-CODE public)

- Source of truth: **agentic-delivery-framework-internal**
- Public mirror: **agentic-delivery-framework** (NO-CODE)

## Boundary (Normative)
- Exports MUST follow `.oss.publish.yml` `allow:` patterns.
- Exports MUST exclude any path matched by `.oss.publish.yml` `deny:` rules.
- Public artifacts MUST use extensions listed in `scripts/publish/public_extensions.allowlist`.
- Every export MUST pass `scripts/publish/detect_code_in_tree.sh` before publishing.

## Workflows (Normative)
- The Publish → Public job MUST be triggered via manual dispatch (dry run supported) or by tagging `vX.Y.Z`.
- Operators MUST set `dry_run=true` to preview changes without pushing.
- Backflow ← Public MUST run daily on schedule and MAY be triggered manually for urgent syncs.

## Guarantees (Informative)
- No `.github/**`, `scripts/**`, or executable code is exported.
- Only content with safe extensions reaches the public repository.
- Public contributions flow back via PR and inherit the same allowlist and denylist.

## Secrets (Informative)
- `PUBLISH_APP_ID` and `PUBLISH_APP_PRIVATE_KEY` store GitHub App credentials for the publish workflow.

This work is licensed under CC BY-SA 4.0.
