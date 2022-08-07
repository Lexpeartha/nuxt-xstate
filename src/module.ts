import { defineNuxtModule } from '@nuxt/kit'
import { setupAutoImports } from './parts/autoImports'

export interface ModuleOptions {
  minimal: boolean;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-xstate',
    configKey: 'xState'
  },
  defaults: {
    minimal: false
  },
  setup (options, nuxt) {
    // Transpile packages that include xstate in their name
    nuxt.options.build.transpile.push(/xstate/)

    // Setup auto-importing
    setupAutoImports(options.minimal)
  }
})
