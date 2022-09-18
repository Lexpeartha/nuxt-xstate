/**
 * @vitest-environment node
 */
import { fileURLToPath } from 'node:url'
import { describe, test, expect } from 'vitest'
import { setup, createPage } from '@nuxt/test-utils'

describe('ssr', async () => {
  await setup({
    server: true,
    browser: true,
    rootDir: fileURLToPath(new URL('../fixture', import.meta.url))
  })

  test('shows proper state before clicking', async () => {
    const page = await createPage('/')

    const stateText = await page.innerText('[data-test-id="state-txt"]')
    expect(stateText).toBe('idle')
  })

  test('shows proper state after clicking', async () => {
    const page = await createPage('/')

    await page.click('[data-test-id="click-btn"]')

    const stateText = await page.innerText('[data-test-id="state-txt"]')
    expect(stateText).toBe('loading')
  })

  // test('auto-imports state machine correctly', () => {
  //   expect(1 + 1).toBe(2)
  // })
})
