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
        { type: 'link', label: 'v0.4.0 (Historical)', href: '/docs/specs/spec.v0.4.0' },
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

  roadmaps: [
    {
      type: 'category',
      label: 'Roadmaps',
      collapsed: false,
      items: ['roadmaps/adf-roadmap-autonomous-delivery'],
    },
  ],

  profiles: [
    {
      type: 'category',
      label: 'Profiles',
      collapsed: false,
      items: [
        'profiles/overview',
        'profiles/github',
        {
          type: 'html',
          value: '<em>Additional platform profiles stay informative and may land in future releases.</em>',
        },
      ],
    },
  ],

  examples: [
    {
      type: 'category',
      label: 'Examples',
      collapsed: true,
      items: [
        'examples/github/labels',
        'examples/github/pr-template.example',
        'examples/github/required-checks',
        'examples/github/repo-settings',
      ],
    },
  ],

  audits: [
    {
      type: 'category',
      label: 'Audits',
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
