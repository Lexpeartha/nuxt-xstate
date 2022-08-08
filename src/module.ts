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
    const builder: any = nuxt.options.builder

    if (builder === '@nuxt/webpack-builder') {
      nuxt.options.build.transpile.push('xstate')
      nuxt.options.build.transpile.push('@xstate/vue')
      nuxt.options.build.transpile.push('@xstate/fsm')
    } else {
      nuxt.options.build.transpile.push('@xstate/fsm')
    }

    // Setup auto-importing
    setupAutoImports(options.minimal)
  }
})
