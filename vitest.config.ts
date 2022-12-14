/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    deps: {
      inline: [/@nuxt\/test-utils/]
    },
    testTimeout: 15000
  }
})
