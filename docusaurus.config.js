// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CIP-1694 Test Plans',
  tagline: '',
  favicon: 'img/cardano.ico',

  // Set the production url of your site here
  url: 'https://intersectMBO.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cardano-test-plans/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'intersectMBO', // Usually your GitHub org/user name.
  projectName: 'cardano-test-plans', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/',
        },
        blog: false
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cardano-logo.png',
      navbar: {
        title: 'CIP-1694 User stories and Test Plan ',
        logo: {
          alt: 'CIP-1694 Test Plan',
          src: 'img/cardano-logo.png',
          srcDark:'img/cardano-logo-darkmode.png'
        },
        items: [
          {
            href: 'https://github.com/IntersectMBO',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/z5pURn74N5',
              },
              {
                label: 'Twitter Cardano Foundation',
                href: 'https://twitter.com/Cardano_CF',
              },
              {
                label: 'Twitter IntersectMBO',
                href: 'https://twitter.com/InputOutputHK',
              },
              {
                label: 'Twitter IOG',
                href: 'https://twitter.com/InputOutputHK',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/IntersectMBO',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Disclaimer',
                href: 'https://github.com/IntersectMBO',
              },
            ],
          },
        ],
        copyright: `Copyright © IntersectMBO ${new Date().getFullYear()}`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.tomorrow,
      },
    }),
};

export default config;