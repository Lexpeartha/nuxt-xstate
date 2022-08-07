import { defineNuxtConfig } from 'nuxt'
import XStateModule from '..'

export default defineNuxtConfig({
  modules: [
    XStateModule
  ],
  xState: {
    minimal: true
    // minimal: false
  }
})
