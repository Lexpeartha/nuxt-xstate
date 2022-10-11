import { createResolver, addImports } from '@nuxt/kit'

export const setupComposable = (isMinimal = false) => {
  const resolver = createResolver(import.meta.url)

  const composable = resolver.resolve(
    '..',
    'runtime',
    `useXState.${isMinimal ? 'min' : 'reg'}.ts`
  )

  addImports(
    // XState composable
    { from: composable, name: 'useXState' }
  )
}
