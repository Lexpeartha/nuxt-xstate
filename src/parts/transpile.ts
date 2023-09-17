import { useNuxt, createResolver } from '@nuxt/kit'

export const setupTranspilation = () => {
  const nuxt = useNuxt()

  const resolver = createResolver(import.meta.url)

  nuxt.options.build.transpile = nuxt.options.build.transpile || []
  nuxt.options.build.transpile.push(resolver.resolve('./runtime'))

  // For some reason, xstate libraries really dislike being transpiled
  // by Vite, so they are only transpiled when webpack is used
  if (nuxt.options.builder === '@nuxt/webpack-builder') {
    nuxt.options.build.transpile.push(
      'xstate',
      'xstate/es',
      'xstate-vue2',
      '@xstate/vue',
      '@xstate/fsm'
    )
  }
}
