import { addImportsSources, isNuxt2 } from '@nuxt/kit'
import { defineUnimportPreset } from 'unimport'

export const setupAutoImports = (isMinimal: boolean) => {
  // Nuxt Bridge
  if (isNuxt2()) {
    addImportsSources([
      defineUnimportPreset({
        from: isMinimal ? '@xstate/fsm' : 'xstate',
        imports: [...xStateImports]
      }),
      defineUnimportPreset({
        from: 'xstate-vue2',
        imports: [...xStateComposables]
      })
    ])

    return
  }

  // If minimal options is enabled import required
  // things from @xstate/vue/lib/fsm or @xstate/fsm
  if (isMinimal) {
    addImportsSources([
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
    ])

    return
  }

  // Otherwise import everything regularly
  addImportsSources([
    defineUnimportPreset({
      from: 'xstate',
      imports: [...xStateImports]
    }),
    defineUnimportPreset({
      from: '@xstate/vue',
      imports: [...xStateComposables]
    })
  ])
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
