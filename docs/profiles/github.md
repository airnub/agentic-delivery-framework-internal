# GitHub Platform Profile (Informative)

This profile maps the Agentic Delivery Framework (ADF) neutral terminology to GitHub services. It is informative and does not change the normative specification.

| ADF Term | GitHub Mapping |
| --- | --- |
| Delivery Lead | GitHub App / workflow orchestrator managing Projects Iterations and branch policies |
| Product Owner | Product manager using Projects (Sprint views) + Issues |
| Developers | Contributors (human or agent) working inside Codespaces |
| Work Management System | GitHub Issues + Projects (Iterations) |
| Workspace Runtime | GitHub Codespaces |
| Change Request | Pull Request |
| Story Preview | PR body checklist + Codespaces preview URL or `npm start` / `docker compose up` instructions |
| Pulse Increment | Nightly GitHub Actions workflow deploying latest green main branch to demo environment |
| Automated Review | Copilot Code Review or GitHub Actions review bots |
| Security Review | CodeQL, dependency review, or third-party scanning via Actions |
| Performance Budget | Lighthouse/Artillery/Custom perf checks in GitHub Actions |
| WIP Limits | Projects Iteration WIP column limits or automation enforcing ≤3 in-progress Issues per team |

## Implementation Reference

For an opinionated GitHub implementation, see [airnub/adf-github-suite](https://github.com/airnub/adf-github-suite). It provides automation, configuration, and integration aligned with this profile.

## Additional Notes

- Branch protection rules enforce required status checks and reviews before merge; include Performance Budget workflows when performance-sensitive code changes.
- Projects (Iterations) drive the Sprint timebox; automation can move Issues based on Change Request events and Delivery Pulse summaries.
- Codespaces prebuilds and retention policies fulfill the workspace runtime lifecycle requirements.
- Story Preview checklists live in `.github/pull_request_template.md` and reference preview URLs or run recipes.
- Daily Pulse Increment may deploy to GitHub Pages, an ephemeral environment, or another demo target triggered by Actions.
- WIP dashboards can be implemented with Projects views or custom Actions that flag when teams exceed policy.

To contribute updates or clarifications to this profile, follow the process in [contributing.md](../contributing.md) and the [RFC guidelines](../rfcs/process.md).

---

This methodology/spec is licensed under CC BY-SA 4.0.
