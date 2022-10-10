import { useNuxt, addImportsDir, createResolver } from '@nuxt/kit'

import type { CustomMachinesOptions } from '../types'

export const setupCustomMachines = (machinesOptions: CustomMachinesOptions) => {
  const nuxt = useNuxt()
  const resolver = createResolver(import.meta.url)

  const { dir, importSuffix } = machinesOptions

  const resolvedDir = resolver.resolve(nuxt.options.srcDir, dir)

  addImportsDir(resolvedDir)

  nuxt.hook('imports:extend', (imports) => {
    for (const i of imports) {
      const file = i.from
      if (!file.startsWith(resolvedDir)) { continue }

      // Update import name with import suffix
      const fullFileName = file.split('/').at(-1)
      const bareName = fullFileName.split('.').at(0).toLowerCase()

      const newName = bareName + importSuffix

      i.as = newName
    }
  })
}
