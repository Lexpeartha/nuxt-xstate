import { useNuxt, addImportsDir } from '@nuxt/kit'
import { resolve } from 'pathe'

import type { CustomMachinesOptions } from '../types'

export const setupCustomMachines = (machinesOptions: CustomMachinesOptions) => {
  const nuxt = useNuxt()

  const { dir, importSuffix } = machinesOptions

  const resolvedDir = resolve(nuxt.options.srcDir, dir)

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
