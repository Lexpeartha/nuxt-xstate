import { useNuxt } from '@nuxt/kit'
import { defineUnimportPreset } from 'unimport'

export const setupAutoImports = (isMinimal: boolean) => {
  const nuxt = useNuxt()

  const isDev = nuxt.options.dev

  nuxt.hook('autoImports:sources', (presets) => {
    // If the minimal option is disabled, import everything regularly
    if (!isMinimal) {
      presets.push(
        defineUnimportPreset({
          from: '@xstate/vue',
          imports: [...xStateComposables]
        })
      )
      presets.push(
        defineUnimportPreset({
          from: 'xstate',
          imports: [...xStateImports]
        })
      )
    } else {
      // Otherwise, import required thing from @xstate/vue/lib/fsm or @xstate/fsm
      presets.push(
        defineUnimportPreset({
          from: '@xstate/vue',
          imports: xStateComposables.filter(composable => composable !== 'useMachine')
        })
      )
      presets.push(
        defineUnimportPreset({
          from: isDev ? '@xstate/vue/lib/fsm' : '@xstate/vue/lib/fsm.js',
          imports: ['useMachine']
        })
      )
      presets.push(
        defineUnimportPreset({
          from: '@xstate/fsm',
          imports: [...xStateImports]
        })
      )
    }
  })
}

const xStateImports = [
  'createMachine'
]

const xStateComposables = [
  'useMachine',
  'useActor',
  'useInterpret',
  'useSelector'
]
