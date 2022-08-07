import { defineNuxtModule } from '@nuxt/kit'
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
    // Transpile packages that include xstate in their name
    nuxt.options.build.transpile.push(/xstate/)

    // Setup auto-importing
    setupAutoImports(options.minimal)
  }
})
