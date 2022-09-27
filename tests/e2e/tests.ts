import { test, expect } from 'vitest'
import { createPage } from '@nuxt/test-utils'

export default function () {
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
}
