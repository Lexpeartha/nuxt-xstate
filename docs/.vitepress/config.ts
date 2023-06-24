import { defineConfig } from "vitepress"

export default defineConfig({
  title: 'Nuxt XState',
  lang: 'en-US',
  description: 'XState integration for Nuxt',
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'light-plus',
      dark: 'dark-plus',
    },
    lineNumbers: false
  },
  themeConfig: {
    siteTitle: 'Nuxt/XState',
    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/lexpeartha' },
      { icon: 'github', link: 'https://github.com/Lexpeartha/nuxt-xstate' },
    ],
    nav: [
      { text: 'Quick Start', link: '/getting-started/quick-start' },
      { text: 'Usage', link: '/getting-started/usage' },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'About Module', link: '/getting-started/about' },
          { text: 'Quick Start', link: '/getting-started/quick-start' },
          { text: 'Configuration', link: '/getting-started/configuration' },
          { text: 'Usage', link: '/getting-started/usage' },
        ]
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Aleksa Sević'
    }
  }
})