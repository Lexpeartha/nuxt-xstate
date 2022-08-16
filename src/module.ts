import { defineNuxtModule } from '@nuxt/kit'

import { name, version } from '../package.json'
import { setupTranspilation } from './parts/transpile'
import { setupAutoImports } from './parts/autoImports'
import { setupCustomMachines } from './parts/customMachine'

export interface CustomMachinesOptions {
  dir?: string,
  importSuffix?: string,
}

export interface ModuleOptions {
  minimal: boolean;
  customMachines: CustomMachinesOptions | false;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: 'xState',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    minimal: false,
    customMachines: {
      dir: 'machines',
      importSuffix: 'Machine'
    }
  },
  // eslint-disable-next-line require-await
  async setup (options, nuxt) {
    // Setup dependencies to be transpiled
    setupTranspilation()

    // Setup auto-importing
    setupAutoImports(options.minimal)

    if (options.customMachines) { await setupCustomMachines(options.customMachines) }
  }
})
