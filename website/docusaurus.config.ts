import type {Config} from '@docusaurus/types';
import githubTheme from 'prism-react-renderer/themes/github';
import draculaTheme from 'prism-react-renderer/themes/dracula';

const isPublic = process.env.SITE_PROFILE !== 'internal'; // default = PUBLIC
const org = 'airnub';
const pubRepo = 'agentic-delivery-framework';
const intRepo = 'agentic-delivery-framework-internal';
const repo = isPublic ? pubRepo : intRepo;

const config: Config = {
  title: 'Agentic Delivery Framework',
  tagline: 'Scrum-friendly delivery for human+agent teams',
  url: isPublic ? 'https://airnub.github.io' : 'https://docs-internal.airnub.io',
  baseUrl: isPublic ? '/agentic-delivery-framework/' : '/adf/',
  favicon: 'img/favicon.svg',
  organizationName: org,
  projectName: repo,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {defaultLocale: 'en', locales: ['en']},
  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          routeBasePath: 'docs',
          // Hide internal docs from PUBLIC build
          include: isPublic ? ['**/*.{md,mdx}', '!internal/**'] : ['**/*.{md,mdx}'],
          editUrl: `https://github.com/${org}/${repo}/edit/main/`,
        },
        blog: false,
        theme: {customCss: require.resolve('./src/css/custom.css')}
      } as any
    ]
  ],
  themeConfig: {
    navbar: {
      title: 'ADF',
      logo: {alt: 'ADF', src: 'img/logo.svg'},
      items: [{to: '/docs/intro', label: 'Docs', position: 'left'}, {href: `https://github.com/${org}/${repo}`, label: 'GitHub', position: 'right'}]
    },
    footer: {
      style: 'dark',
      links: [{title: 'Community', items: [{label: 'GitHub', href: `https://github.com/${org}/${pubRepo}` }]}],
      copyright: `© ${new Date().getFullYear()} Airnub`
    },
    prism: {theme: githubTheme, darkTheme: draculaTheme},
    metadata: isPublic ? [] : [{name: 'robots', content: 'noindex,nofollow'}]
  }
};

export default config;
