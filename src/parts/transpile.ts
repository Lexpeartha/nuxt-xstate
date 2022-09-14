import { useNuxt } from '@nuxt/kit'

export const setupTranspilation = () => {
  const nuxt = useNuxt()

  nuxt.options.build.transpile = nuxt.options.build.transpile || []

  // For some reason, xstate libraries really dislike being transpiled
  // by Vite, so they are only transpiled when webpack is used
  if (nuxt.options.builder === '@nuxt/webpack-builder') {
    nuxt.options.build.transpile.push(
      'xstate',
      '@xstate/vue',
      '@xstate/fsm'
    )
  }
}
