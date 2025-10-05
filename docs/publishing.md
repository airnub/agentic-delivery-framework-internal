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
- Internal preview builds MUST set `SITE_PROFILE=internal` before running `npm run build` to ensure internal base paths render correctly while keeping the canonical `https://airnub.github.io` domain.
- Docs workflows in this internal repository MUST default `SITE_PROFILE` to `internal` so preview links, edit URLs, and base paths target the internal mirror. When exporting workflows to the public repository, operators MUST flip the default to `public`.

## Guarantees (Informative)
- No `.github/**`, `scripts/**`, or executable code is exported.
- Only content with safe extensions reaches the public repository.
- Public contributions flow back via PR and inherit the same allowlist and denylist.

## Preview Builds (Informative)
- `SITE_PROFILE` defaults to the internal mirror profile in this repository. Setting `SITE_PROFILE=public` swaps navigation links, edit URLs, and base paths to target the public repository (while keeping the domain and organization fixed) so changes can be validated before publishing.

## Secrets (Informative)
- `PUBLISH_APP_ID` and `PUBLISH_APP_PRIVATE_KEY` store GitHub App credentials for the publish workflow.

This work is licensed under CC BY-SA 4.0.
