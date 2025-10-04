# GitHub Platform Profile (Informative)

This profile maps the Agentic Delivery Framework (ADF) neutral terminology to GitHub services. It is informative and does not change the normative specification.

| ADF Term | GitHub Mapping |
| --- | --- |
| Work Management System | GitHub Issues + Projects (Iterations) |
| Workspace Runtime | GitHub Codespaces |
| Change Request | Pull Request |
| Automated Review | Copilot Code Review or GitHub Actions review bots |
| Security Review | CodeQL, dependency review, or third-party scanning via Actions |
| Program Director Auth | GitHub App with appropriate permissions |
| Delivery Team Tools | Codespaces devcontainer with agents (Aider, Cline, Continue, OpenHands) |

## Implementation Reference

For an opinionated GitHub implementation, see [airnub/adf-github-suite](https://github.com/airnub/adf-github-suite). It provides automation, configuration, and integration aligned with this profile.

## Additional Notes

- Branch protection rules enforce required status checks and reviews before merge.
- Projects (Iterations) drive the Iteration timebox; automation can move Issues based on change request events.
- Codespaces prebuilds and retention policies fulfill the workspace runtime lifecycle requirements.
- Security review may include CodeQL, dependency review, or partner scanners triggered via GitHub Actions.

To contribute updates or clarifications to this profile, follow the process in [CONTRIBUTING.md](../CONTRIBUTING.md) and the [RFC guidelines](../RFCs/README.md).
