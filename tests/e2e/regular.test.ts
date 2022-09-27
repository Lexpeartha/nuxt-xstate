/**
 * @vitest-environment node
 */
import { fileURLToPath } from 'node:url'
import { describe } from 'vitest'
import { setup } from '@nuxt/test-utils'

import runTests from './tests'

describe('Regular implementation of the module', async () => {
  await setup({
    server: true,
    browser: true,
    rootDir: fileURLToPath(new URL('../fixture/regular', import.meta.url))
  })

  runTests()
})
