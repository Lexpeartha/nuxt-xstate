import { defineNuxtConfig } from 'nuxt'
import XStatemodule from '..'

export default defineNuxtConfig({
  modules: [
    XStatemodule
  ],
  xState: {
    minimal: true
    // minimal: false
  }
})
