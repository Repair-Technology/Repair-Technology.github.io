import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Repair-Technology',
  tagline: 'Repair are cool',
  favicon: 'img/favicon.ico',
  trailingSlash: false,
  // Set the production url of your site here
  url: 'https://Repair-Technology.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Repair-Technology', // Usually your GitHub org/user name.
  projectName: 'Repair-Technology.github.io', // Usually your repo name.

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
            'https://github.com/Repair-Technology/Repair-Technology.github.io/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Repair-Technology/Repair-Technology.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Repair-Technology',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          position: 'left',
          label: '手  册',
          items: [
            {
              label: '维修理论手册',
              to: '/docs/intro',
            },
            {
              label: '家庭维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
            {
              label: '商用维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
            {
              label: '农用维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
            {
              label: '医用维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
            {
              label: '工业维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
            {
              label: '特殊维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
          ],
        },
        {to: '/blog', label: '公司新闻', position: 'left'},
        {
          href: 'https://github.com/Repair-Technology/Repair-Technology.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '手  册',
          items: [
            {
              label: '维修理论手册',
              to: '/docs/intro',
            },
            {
              label: '家庭维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
            {
              label: '商用维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
            {
              label: '农用维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
            {
              label: '医用维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
            {
              label: '工业维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
            {
              label: '特殊维修手册',
              href: 'https://repair-technology.github.io/household-facilities-repairing',
            },
          ],
        },
        {
          title: '产  品',
          items: [
            {
              label: '工具 || 配件',
              to: '/docs/intro',
            },
            {
              label: '会员周边',
              to: '/docs/intro',
            },
            {
              label: '供应商入口',
              to: '/docs/intro',
            },
            {
              label: '采购入口',
              to: '/docs/intro',
            },
            {
              label: '维修技能认证',
              to: '/docs/intro',
            },
            {
              label: '可维修性认证',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '社  区',
          items: [
            {
              label: '加入我们',
              to: '/docs/intro',
            },
            {
              label: '论坛',
              to: '/docs/intro',
            },
            {
              label: '问答',
              to: '/docs/intro',
            },
            {
              label: '视频',
              to: '/docs/intro',
            },
            {
              label: '手册',
              to: '/docs/intro',
            },
            {
              label: '小组',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: '公  司',
          items: [
            {
              label: '公司新闻',
              to: '/blog',
            },
            {
              label: '公司简介',
              to: '/about',
            },
            {
              label: '招聘信息',
              to: '/hires',
            },
            {
              label: '联系我们',
              to: '/contact',
            },
          ],
        },
         {
          title: '法  律',
          items: [
            {
              label: '无障碍',
              to: '/accessibility',
            },
            {
              label: '隐私协议',
              to: '/privacy',
            },
            {
              label: '服务协议',
              to: '/agreement',
            },
            {
              label: '内容授权',
              to: '/licensing',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Repair-Technology Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
