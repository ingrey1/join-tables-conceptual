// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Conceptual Document Example',
  tagline: 'SQL Join Tables',
  url: 'https://ingrey1.github.io/join-tables-conceptual/',
  baseUrl: '/join-tables-conceptual/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'ingrey1', // Usually your GitHub org/user name.
  projectName: 'join-tables-conceptual', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/ingrey1/join-tables-conceptual.git',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: true
      },
      navbar: {
        title: 'Welcome',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'SQL Join Tables',
          },
  
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
