import { defineConfig } from "vitepress"

export default defineConfig({
  title: 'Nuxt XState',
  description: 'XState integration for Nuxt',
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
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
      { text: 'Installation', link: '/getting-started#installation' },
      { text: 'Usage', link: '/getting-started#usage' },
    ],
    sidebar: [],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Aleksa Sević'
    }
  }
})