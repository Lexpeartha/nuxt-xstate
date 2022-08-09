import { defineNuxtModule } from '@nuxt/kit'

import { setupTranspilation } from './parts/transpile'
import { setupAutoImports } from './parts/autoImports'

export interface ModuleOptions {
  minimal: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-xstate',
    configKey: 'xState',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    minimal: false
  },
  // eslint-disable-next-line require-await
  async setup (options, nuxt) {
    // Setup dependencies to be transpiled
    setupTranspilation()

    // Setup auto-importing
    setupAutoImports(options.minimal)
  }
})
