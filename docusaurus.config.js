const path = require('path');
const {components} = require('./src/plugins/components');

module.exports = {
  title: 'Nziie',
  tagline: 'Imagine a custom discord bot made to your liking at a cheap price...',
  url: 'https://nziie.xyz',
  baseUrl: '/',
  favicon: 'img/logo.png',
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  organizationName: 'Nziie-Development',
  projectName: 'website-new',
  deploymentBranch:"main",
  themeConfig: {
    prism: {
      theme: require('./src/plugins/prism_themes/github'),
      darkTheme: require('./src/plugins/prism_themes/monokai'),
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },
    metadata: [
      {name: 'keywords', content: 'discord bot, discord services, discord bot maker, discord bot creator, build a discord bot, buy a discord bot, purchase a discord bot, custom discord bot, discord services'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'theme-color', content: '#3f09ff'},
    ],
    navbar: {
      title: 'Nziie',
      logo: {
        alt: 'Nziie\'s Logo',
        src: 'img/logo.png',
      },
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: 'services', label: 'Services', position: 'left'},
        {to: 'terms', label: 'Terms', position: 'right'}, 
      ],
    },
    scripts: ['./src/scripts/discord-components.js'],
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Useful Links',
          items: [
            {
              label: 'Discord',
              to: 'support',
            },
            {
              label: 'Services',
              to: 'services',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Terms of Service',
              to: 'terms',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nziie Development`,
    },
    // announcementBar: {
    //   id: 'star_the_dang_repo',
    //   content: `<strong>Hey, 🫵 you, make sure you've <a target="_blank" rel="noopener noreferrer" href="https://github.com/benthosdev/benthos">⭐ starred the repo ⭐</a> otherwise you won't be entered into our daily prize draw for silent admiration.</strong>`,
    //   backgroundColor: 'var(--ifm-color-primary)',
    //   textColor: 'var(--ifm-background-color)',
    //   isCloseable: true,
    // },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          feedOptions: {
            type: 'all',
          },
        },
      },
    ],
  ],
  plugins: [
  ],
};
