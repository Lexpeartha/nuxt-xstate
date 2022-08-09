import { useNuxt } from '@nuxt/kit'

export const setupTranspilation = () => {
  const nuxt = useNuxt()

  const builder: any = nuxt.options.builder

  if (builder === '@nuxt/webpack-builder') {
    nuxt.options.build.transpile.push('xstate')
    nuxt.options.build.transpile.push('@xstate/vue')
    nuxt.options.build.transpile.push('@xstate/fsm')
  } else {
    nuxt.options.build.transpile.push('@xstate/fsm')
  }
}
