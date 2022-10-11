import { addImportsSources, isNuxt2 } from '@nuxt/kit'
import { defineUnimportPreset } from 'unimport'
import type { PresetImport } from 'unimport'

import { ModuleOptions } from '../types'

export const setupAutoImports = (options: ModuleOptions) => {
  const {
    minimal: isMinimal,
    autoImports: xStateImports
  } = options

  // User defined imports from xstate
  const toImportFromXState = xStateImports.map<PresetImport>(i =>
    typeof i === 'string' ? i : [i[0], i[1]]
  )

  // Nuxt Bridge
  if (isNuxt2()) {
    // Minimal implementation
    if (isMinimal) {
      addImportsSources([
        defineUnimportPreset({
          from: '@xstate/fsm',
          imports: toImportFromXState
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
        imports: toImportFromXState
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
        imports: toImportFromXState
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
      imports: toImportFromXState
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

const xStateComposables = [
  'useMachine',
  'useActor',
  'useInterpret',
  'useSelector'
]
