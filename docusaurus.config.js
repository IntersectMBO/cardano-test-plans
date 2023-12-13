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
        //algolia: {
        //  apiKey: '',
        //  indexName: '',
        //  appId: '',
        //  algoliaOptions: {}, // Optional, if provided by Algolia
        //},
        colorMode: {
            defaultMode: 'dark',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: '',
            logo: {
                alt: 'Default Logo',
                src: 'img/logo.svg',
                href: '/',
            },
            items: [
                { to: 'docs', label: 'Test Plans', position: 'left' },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Left',
                    items: [
                    ],
                },
                {
                    title: 'Middle',
                    items: [
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Intersect. Built with Docusaurus`,
        },
    },
    plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/input-output-hk/cardano-test-plans/tree/master',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};
