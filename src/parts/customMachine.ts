import { useNuxt, addImports } from '@nuxt/kit'
import { Import } from 'unimport'
import { globby } from 'globby'
import { resolve } from 'pathe'

import type { CustomMachinesOptions } from '../types'

export const setupCustomMachines = async (machinesOptions: CustomMachinesOptions) => {
  const nuxt = useNuxt()

  const nuxtSrcDir = nuxt.options.srcDir
  const { dir, importSuffix } = machinesOptions

  const resolvedDir = resolve(nuxtSrcDir, dir)

  const scannedFiles = await scanMachines(resolvedDir)

  // Map with resolved paths as key, and values as import names
  const resolvedNames = new Map<string, string>()

  for (const file of scannedFiles) {
    const fullFileName = file.split('/').at(-1)
    const bareName = fullFileName.split('.').at(0).toLowerCase()

    resolvedNames.set(file, bareName + importSuffix)
  }

  const imports: Import[] = []
  resolvedNames.forEach((importName, filePath) => {
    imports.push({
      from: filePath,
      name: 'default',
      as: importName
    })
  })

  addImports(imports)
}

const scanMachines = async (resolvedDir: string) => {
  // Sorting to make it consistent between runs
  return (await globby(resolvedDir)).sort()
}
