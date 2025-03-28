import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type { Configuration } from 'webpack';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'The Terra Programming Language',
  tagline: 'The best code is code that you don\'t have to write',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'terra-website',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'renehiemstra', // Usually your GitHub org/user name.
  projectName: 'terra-website', // Usually your repo name.

  onBrokenLinks: 'throw',
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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    function webpackConfigPlugin() {
      return {
        name: 'custom-webpack-config',
        configureWebpack(): Configuration {
          return {
            resolve: {
              fallback: {
                module: false, // Disable Node.js 'module'
                fs: false, // Disable 'fs'
                path: require.resolve('path-browserify'), // Polyfill 'path'
                buffer: require.resolve('buffer/'), // Polyfill 'buffer'
                process: require.resolve('process/browser.js'), // Use fully specified 'process/browser.js'
              },
            },
            module: {
              rules: [
                {
                  test: /\.wasm$/,
                  type: 'asset/resource',
                },
              ],
            },
            plugins: [
              new (require('webpack')).ProvidePlugin({
                process: 'process/browser.js', // Use fully specified path here too
                Buffer: ['buffer', 'Buffer'],
              }),
            ],
          };
        },
      };
    },
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Home',
      logo: {
        alt: 'My Site Logo',
        src: 'img/terra-logo-light.svg',
      },
      items: [
        { 
            href: 'https://github.com/terralang/terra/releases', 
            label: 'Download', 
            position: 'left'
        },
        {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'About',
        },
        {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Getting started',
        },
        {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/terralang/terra',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/terralang/terra',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Terralang.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
