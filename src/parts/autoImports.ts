import { addImportsSources, isNuxt2 } from '@nuxt/kit'
import { defineUnimportPreset } from 'unimport'

export const setupAutoImports = (isMinimal: boolean) => {
  // Nuxt Bridge
  if (isNuxt2()) {
    // Minimal implementation
    if (isMinimal) {
      addImportsSources([
        defineUnimportPreset({
          from: '@xstate/fsm',
          imports: [...xStateImports]
        }),
        defineUnimportPreset({
          from: 'xstate-vue2',
          imports: xStateComposables.filter(filterOutMinimalComposables)
        }),
        defineUnimportPreset({
          from: 'xstate-vue2/lib/fsm',
          imports: minimalComposables
        })
      ])

      return
    }

    // Regular one
    addImportsSources([
      defineUnimportPreset({
        from: 'xstate',
        imports: [...xStateImports]
      }),
      defineUnimportPreset({
        from: 'xstate-vue2',
        imports: [...xStateComposables]
      })
    ])

    return
  }

  // Nuxt 3
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
        imports: xStateComposables.filter(filterOutMinimalComposables)
      }),
      defineUnimportPreset({
        from: '@xstate/vue/lib/fsm',
        imports: minimalComposables
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

// Composables provided in minimal implementation
const minimalComposables = ['useMachine']

const filterOutMinimalComposables = (composable: string) => !minimalComposables.includes(composable)

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
