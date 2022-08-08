import { defineNuxtConfig } from 'nuxt'
import XStateModule from '..'

export default defineNuxtConfig({
  modules: [
    XStateModule
  ],
  builder: 'vite',
  xState: {
    minimal: true
    // minimal: false
  }
})
