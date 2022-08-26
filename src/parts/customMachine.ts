import fs from 'fs/promises'
import { useNuxt, addTemplate, useLogger } from '@nuxt/kit'
import { globby } from 'globby'
import { resolve } from 'pathe'

import type { CustomMachinesOptions } from '../module'

export const setupCustomMachines = async (machinesOptions: CustomMachinesOptions) => {
  const nuxt = useNuxt()

  const nuxtSrcDir = nuxt.options.srcDir
  const nuxtBuildDir = nuxt.options.buildDir
  const { dir, importSuffix } = machinesOptions

  const resolvedDir = resolve(nuxtSrcDir, dir)
  const resolvedBuildDir = resolve(nuxtBuildDir, 'xstate')

  await handleAutoImport({
    resolvedDir,
    resolvedBuildDir,
    importSuffix,
    moduleStarting: true
  })

  nuxt.hook('autoImports:dirs', (dirs) => {
    dirs.push(resolvedBuildDir)
  })

  nuxt.hook('builder:watch', async (event, path) => {
    // change, add, unlink
    const machineDirAffected = resolve(nuxtSrcDir, path).includes(resolvedDir)
    const isJsOrTs = path.endsWith('.js') || path.endsWith('.ts')

    if (machineDirAffected && isJsOrTs && event === 'change') {
      await handleAutoImport({ resolvedDir, resolvedBuildDir, importSuffix })
    }
  })
}

const handleAutoImport = async (options: {
  resolvedDir: string,
  resolvedBuildDir: string,
  importSuffix: string,
  moduleStarting?: boolean
}) => {
  const logger = useLogger()
  const { resolvedDir, resolvedBuildDir, importSuffix, moduleStarting = false } = options

  logger.info(
    moduleStarting
      ? 'Custom state machine importing is enabled, setting up auto-imports...'
      : 'Change to state machine directory detected, updating imports...'
  )
  const startTime = Date.now()

  // Remove all previous files
  await deleteMachineImportFiles(resolvedBuildDir)
  // Generate new ones
  await updateMachineImportsTemplates(resolvedDir, importSuffix)

  const elapsedTime = Date.now() - startTime
  logger.info(
    `Finished ${moduleStarting ? 'creating' : 'updating'} imports for state machines in ${elapsedTime}ms`
  )
}

const scanMachines = async (resolvedDir: string) => {
  // Sorting to make it consistent between runs
  return (await globby(resolvedDir)).sort()
}

const deleteMachineImportFiles = async (resolvedBuildDir: string) => {
  let errorOccurred = false

  const files = await fs.readdir(resolvedBuildDir).catch((_) => {
    errorOccurred = true
  })

  if (errorOccurred || !files) { return }

  const fileDeletionPromises = files.map(f => fs.unlink(resolve(resolvedBuildDir, f)))

  await Promise.all(fileDeletionPromises)
}

const updateMachineImportsTemplates = async (resolvedDir: string, importSuffix: string) => {
  const scannedFiles = await scanMachines(resolvedDir)

  for (const file of scannedFiles) {
    const fullFileLocation = file.split('/').slice(0, -1).join('/')
    const fullFileName = file.split('/').at(-1)
    const bareName = fullFileName.split('.').at(0).toLowerCase()

    const newName = bareName + importSuffix
    const location = fullFileLocation + '/' + bareName

    addTemplate({
      write: true,
      filename: `xstate/${newName}.ts`,
      getContents: () => {
        return `export { default } from '${location}'`
      }
    })
    // addTemplate({
    //   filename: `xstate/${newName}.d.ts`,
    //   getContents: () => {
    //     return `export {} \ndeclare global { const ${newName}: typeof import('${location}')['default'] }`
    //   }
    // })
  }
}
