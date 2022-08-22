import { useNuxt } from '@nuxt/kit'
import { globby } from 'globby'
import { resolve } from 'pathe'
import type { Import } from 'unimport'

import type { CustomMachinesOptions } from '../module'

export const setupCustomMachines = (machinesOptions: CustomMachinesOptions) => {
  const nuxt = useNuxt()

  const nuxtSrcDir = nuxt.options.srcDir
  const { dir, importSuffix } = machinesOptions

  const resolvedDir = resolve(nuxtSrcDir, dir)

  nuxt.hook('autoImports:extend', async (nuxtImports: Import[]) => {
    const imports = await getMachineImports(resolvedDir, importSuffix)

    nuxtImports.push(...imports)
  })
}

const scanMachines = async (resolvedDir: string) => {
  // Sorting to make it consistent between runs
  return (await globby(resolvedDir)).sort()
}

const getMachineImports = async (resolvedDir: string, importSuffix: string) => {
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

  return imports
}
