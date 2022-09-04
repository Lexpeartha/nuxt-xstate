import { useNuxt } from '@nuxt/kit'

export const setupTranspilation = () => {
  const nuxt = useNuxt()

  // const builder: any = nuxt.options.builder

  // Currently Webpack version breaks, follow this issue for more info:
  // https://github.com/nuxt/framework/issues/4084
  const libraries = ['xstate', '@xstate/vue', '@xstate/fsm']

  nuxt.options.vite.optimizeDeps = nuxt.options.vite.optimizeDeps || {}
  nuxt.options.vite.optimizeDeps.include = nuxt.options.vite.optimizeDeps.include || []
  nuxt.options.vite.optimizeDeps.include.push(...libraries)

  nuxt.options.build.transpile = nuxt.options.build.transpile || []
  nuxt.options.build.transpile.push(...libraries)
}
