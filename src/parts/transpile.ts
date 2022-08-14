import { useNuxt } from '@nuxt/kit'

export const setupTranspilation = () => {
  const nuxt = useNuxt()

  const builder: any = nuxt.options.builder

  //* This is a workaround for a vite incompatibility with xstate as dependency

  // const libraries = ['xstate', '@xstate/vue', '@xstate/fsm']
  // nuxt.options.vite.optimizeDeps.include.push(...libraries)
  // nuxt.options.build.transpile.push(...libraries)

  if (builder === '@nuxt/webpack-builder') {
    nuxt.options.build.transpile.push(
      'xstate',
      '@xstate/vue',
      '@xstate/fsm'
    )
  } else {
    nuxt.options.build.transpile.push(
      // 'xstate',
      // '@xstate/vue',
      '@xstate/fsm'
    )
  }
}
