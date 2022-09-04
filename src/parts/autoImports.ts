import { useNuxt } from '@nuxt/kit'
import { defineUnimportPreset } from 'unimport'

export const setupAutoImports = (isMinimal: boolean) => {
  const nuxt = useNuxt()

  nuxt.hook('imports:sources', (presets) => {
    // If minimal options is enabled import required
    // things from @xstate/vue/lib/fsm or @xstate/fsm
    if (isMinimal) {
      presets.push(
        defineUnimportPreset({
          from: '@xstate/fsm',
          imports: [...xStateImports]
        }),
        defineUnimportPreset({
          from: '@xstate/vue',
          imports: xStateComposables.filter(composable => composable !== 'useMachine')
        }),
        defineUnimportPreset({
          from: '@xstate/vue/lib/fsm.js',
          imports: ['useMachine']
        })
      )

      return
    }

    // Otherwise import everything regularly
    presets.push(
      defineUnimportPreset({
        from: 'xstate',
        imports: [...xStateImports]
      }),
      defineUnimportPreset({
        from: '@xstate/vue',
        imports: [...xStateComposables]
      })
    )
  })
}

const xStateImports = [
  'createMachine',
  'assign'
]

const xStateComposables = [
  'useMachine',
  'useActor',
  'useInterpret',
  'useSelector'
]
