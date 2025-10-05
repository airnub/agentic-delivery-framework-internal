import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  overview: [
    {
      type: 'category',
      label: 'Start Here',
      collapsed: false,
      items: [
        'overview/start-here',
        'overview/agile-scrum-map',
        'overview/adoption-guide',
        'overview/quickstart-l1',
        'overview/for-scrum-teams',
        'overview/for-kanban-teams',
        'faq',
        'glossary',
      ],
    },
  ],

  spec: [
    {
      type: 'category',
      label: 'Specification',
      collapsed: false,
      items: [
        'specs/adf-spec-v0.5.0',
        { type: 'link', label: 'v0.4.0 (Historical)', href: '/specs/adf-spec-v0.4.0' },
      ],
    },
  ],

  handbook: [
    {
      type: 'category',
      label: 'Handbook',
      collapsed: false,
      items: [
        'handbook/ssp',
        'handbook/cr-gates',
        'handbook/story-preview',
        'handbook/pulse-increment',
        'handbook/evidence-bundle',
        'handbook/metrics',
        'handbook/conformance',
        'handbook/safety-rails',
      ],
    },
  ],

  templates: [
    {
      type: 'category',
      label: 'Templates',
      collapsed: false,
      items: [
        'templates/pr-template',
        'templates/story-preview',
        'templates/conformance-checklist',
        'templates/labels',
        'templates/codeowners.example',
      ],
    },
  ],

  profiles: [
    {
      type: 'category',
      label: 'Profiles (Informative)',
      collapsed: false,
      items: [
        'profiles/github',
        { type: 'link', label: 'GitLab (stub)', href: '/profiles/gitlab' },
        { type: 'link', label: 'Azure DevOps (stub)', href: '/profiles/azure' },
      ],
    },
  ],

  examples: [
    {
      type: 'category',
      label: 'Examples (Informative)',
      collapsed: true,
      items: [
        'examples/github/labels',
        'examples/github/pr-template.example',
        'examples/github/required-checks.list',
        'examples/github/repo-settings',
      ],
    },
  ],

  audits: [
    {
      type: 'category',
      label: 'Audits (Informative)',
      collapsed: true,
      items: [
        'audits/README',
      ],
    },
  ],

  root: [
    { type: 'doc', id: 'README' },
    { type: 'doc', id: 'CHANGELOG' },
  ],
};

export default sidebars;
