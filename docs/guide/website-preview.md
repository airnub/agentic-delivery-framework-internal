---
title: Preview Build Workflow
description: Steps for running the informative Docusaurus site locally and verifying the GitHub Pages deployment.
---

> **Informative:** This guide describes optional steps for working with the documentation site implementation.

## Local Preview
- Ensure Node.js 20 or later is available (the site uses the `engines.node` constraint from `website/package.json`).
- From the repository root run `npm ci --prefix website` to install dependencies without modifying lock files.
- Execute `npm run build --prefix website` to verify the static build. Use `npm run start --prefix website` when a live preview is desired.

## GitHub Pages Deployment
- The `docs-deploy` workflow builds the site from the `website` folder and publishes it to GitHub Pages when changes merge to `main`.
- The workflow caches npm modules and uploads the generated `website/build` artifact for deployment through `actions/deploy-pages`.
- The no-code enforcement workflow allows updates under `website/` so that required configuration or asset adjustments can still ship alongside documentation updates.

## Troubleshooting Checklist
- Re-run `npm ci --prefix website` after updating dependencies to clear stale modules.
- Confirm that new Markdown files live under `docs/` so they are included in the Docusaurus content pipeline.
- Use the GitHub Actions run summary to review build logs whenever the `docs-deploy` workflow reports a failure.

---

This methodology/spec is licensed under CC BY-SA 4.0.
