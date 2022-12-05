import { defineNuxtModule, createResolver } from '@nuxt/kit'

import { name, version } from '../package.json'
import { setupTranspilation } from './parts/transpile'
import { setupAutoImports } from './parts/autoImports'
import { setupComposable } from './parts/composable'
import { setupCustomMachines } from './parts/customMachine'

import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'xState',
    compatibility: {
      nuxt: '^2.16.0 || ^3.0.0',
      bridge: true
    }
  },
  defaults: {
    minimal: false,
    customMachines: {
      dir: 'machines',
      importSuffix: 'Machine'
    },
    autoImports: ['createMachine']
  },
  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    nuxt.options.build.transpile = nuxt.options.build.transpile || []
    nuxt.options.build.transpile.push(resolver.resolve('./runtime'))

    // Setup dependencies to be transpiled
    setupTranspilation()

    // Setup auto-importing
    setupAutoImports(options)

    if (options.customMachines) {
      // Setup custom machines
      setupCustomMachines(options.customMachines)
    }

    // Setup useXState() composable
    setupComposable(options.minimal)
  }
})
