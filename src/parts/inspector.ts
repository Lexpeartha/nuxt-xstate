import { useNuxt, createResolver } from '@nuxt/kit'
import { NuxtPage } from '@nuxt/schema'
import { addCustomTab } from '@nuxt/devtools-kit'
import { inspect } from '@xstate/inspect'

import type { CustomMachinesOptions } from '../types'

export const setupInspector = (machinesOptions?: CustomMachinesOptions) => {
  const nuxt = useNuxt()
  const resolver = createResolver(import.meta.url)

  // const resolvedComponentPath = resolver.resolve('..', 'runtime', 'XStateInspector.vue')

  // nuxt.hook('pages:extend', async (routes) => {
  //   routes.push({
  //     name: '__xstate__',
  //     path: '/__xstate__',
  //     component: resolvedComponentPath,
  //   })
  // })

  nuxt.hook('ready', () => {
    // TODO: run only on client
    const inspector = inspect()
    console.log(inspector)
  })

  // Logic of the code
  addCustomTab({
    name: 'nuxt-xstate',
    title: 'XState',
    icon: 'logos:xstate',
    view: {
      type: 'iframe',
      src: '/__xstate__'
    }
  })
}
