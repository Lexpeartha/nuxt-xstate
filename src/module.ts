import { defineNuxtModule } from '@nuxt/kit'

import { name, version } from '../package.json'
import { setupTranspilation } from './parts/transpile'
import { setupAutoImports } from './parts/autoImports'
import { setupCustomMachines } from './parts/customMachine'

import type { ModuleOptions } from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'xState',
    compatibility: {
      nuxt: '^2.16.0 || ^3.0.0-rc.10',
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
  setup (options) {
    // Setup dependencies to be transpiled
    setupTranspilation()

    // Setup auto-importing
    setupAutoImports(options.minimal)

    if (options.customMachines) {
      // Setup custom machines
      setupCustomMachines(options.customMachines)
    }
  }
})
