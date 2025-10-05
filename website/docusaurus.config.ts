import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Agentic Delivery Framework',
  tagline: 'Scrum-first, agent-safe delivery',
  url: 'https://airnub.github.io',
  baseUrl: '/agentic-delivery-framework/',
  organizationName: 'airnub',
  projectName: 'agentic-delivery-framework',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  trailingSlash: false,
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/airnub/agentic-delivery-framework/edit/work/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'ADF',
      logo: { alt: 'ADF', src: 'img/favicon.svg' },
      items: [
        { to: '/overview/start-here', label: 'Start', position: 'left' },
        { to: '/overview/adoption-guide', label: 'Adopt', position: 'left' },
        { to: '/specs/adf-spec-v0.5.0', label: 'Spec', position: 'left' },
        { to: '/handbook/ssp', label: 'Handbook', position: 'left' },
        { to: '/templates/pr-template', label: 'Templates', position: 'left' },
        { to: '/profiles/github', label: 'Profiles', position: 'left' },
        { to: '/audits/README', label: 'Audits', position: 'left' },
        { to: '/CHANGELOG', label: 'Changelog', position: 'left' },
        { href: 'https://github.com/airnub/agentic-delivery-framework', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Start', to: '/overview/start-here' },
            { label: 'Spec', to: '/specs/adf-spec-v0.5.0' },
            { label: 'Handbook', to: '/handbook/ssp' },
          ],
        },
        {
          title: 'Operate',
          items: [
            { label: 'Templates', to: '/templates/pr-template' },
            { label: 'Profiles', to: '/profiles/github' },
            { label: 'Audits', to: '/audits/README' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/airnub/agentic-delivery-framework' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Agentic Delivery Framework (Informative site).`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  },
};

export default config;
