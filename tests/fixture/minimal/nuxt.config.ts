import { defineNuxtConfig } from 'nuxt/config'
import XStateModule from '../../../'

// Fixture module used mostly for testing when using the minimal option
export default defineNuxtConfig({
  modules: [
    // @ts-ignore-next-line
    XStateModule
  ],
  xState: {
    minimal: true
  }
})
