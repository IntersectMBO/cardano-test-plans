module.exports = {
    title: 'Cardano Test Plans',
    tagline: '',
    url: 'https://example.com',
    baseUrl: '/',
    favicon: 'img/favicon.png',
    organizationName: 'input-output-hk', // Usually your GitHub org/user name.
    projectName: 'cardano-test-plans', // Usually your repo name.
    stylesheets: [
        'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,700&display=swap',
    ],
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        tableOfContents: {
            minHeadingLevel: 2,
            maxHeadingLevel: 2,
          },
        navbar: {
            title: '',
            logo: {
                alt: 'Voltaire',
                src: 'img/done.png',
                href: '/',
            },
            items: [
                { 
                  to: 'docs', 
                  label: 'User Story Inventory CIP-1694', 
                  position: 'left' 
                },
                {
                  href: "https://github.com/input-output-hk/cardano-test-plans",
                  label: "GitHub",
                  position: "right"
                }
            ],
        },
        footer: {
            style: "dark",
            links: [
              {
                title: "Docs",
                items: [
                  {
                    label: "User story inventory",
                    to: "docs"
                  },
                  {
                    label: "CIP-1694",
                    href: "https://cips.cardano.org/cip/CIP-1694"
                  }                  
                ]
              },
              {
                title: "Community",
                items: [               
                  {
                    label: "Stack Exchange",
                    href: "https://cardano.stackexchange.com"
                  },
                  {
                    label: "Discord",
                    href: "https://discord.gg/inputoutput"
                  },
                  {
                    label: "X",
                    href: "https://x.com/InputOutputHK"
                  }
                ]
              },
              {
                title: "Legal",
                items: [
                  {
                    label: "Privacy Policy",
                    href: "https://static.iohk.io/terms/iog-privacy-policy.pdf"
                  }
                ]
              },
              {
                title: "More",
                items: [
                  {
                    label: "GitHub",
                    href: "https://github.com/input-output-hk/cardano-test-plans"
                  }
                ]
              }
            ],
            copyright: `© ${new Date().getFullYear()} Input Output Global, Inc. All Rights Reserved.`
          },
    },
    plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};