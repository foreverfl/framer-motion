import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Framer for Developers",
  favicon: "img/framer-black-mark.svg",

  // Set the production url of your site here
  url: "https://framer.mogumogu.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ko",
    locales: ["ko", "ja"],
    localeConfigs: {
      ko: {
        label: "한국어",
      },
      ja: {
        label: "日本語",
      },
    },
    path: "i18n",
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    navbar: {
      title: "Motion",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          to: "/docs",
          sidebarId: "koSidebar",
          position: "left",
          label: "Docs",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "legal",
          items: [
            // { label: "Cookies", to: "/cookies" },
            { label: "Security", to: "https://www.framer.com/legal/security/" },
            {
              label: "Terms of Service",
              to: "https://www.framer.com/legal/terms-of-service/",
            },
            {
              label: "Privacy Statement",
              to: "https://www.framer.com/legal/privacy-statement/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Framer B.V.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.oceanicNext,
    },
    colorMode: {
      defaultMode: "dark", // 다크 모드로 설정
      disableSwitch: true, // 테마 전환 버튼 비활성화
      respectPrefersColorScheme: false, // 사용자의 OS 설정을 무시
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    function customWebpackPlugin() {
      return {
        name: "custom-webpack-alias-plugin",
        configureWebpack() {
          return {
            resolve: {
              alias: {
                "@": path.resolve(__dirname, "src"), // Webpack alias 설정
              },
            },
          };
        },
      };
    },
  ],
};

export default config;
