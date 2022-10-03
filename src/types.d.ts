export interface CustomMachinesOptions {
  dir?: string,
  importSuffix?: string,
}

export interface ModuleOptions {
  /**
   * Whether to use minimal xstate implementation
   *
   * @default false
   */
  minimal: boolean,
  /**
   * Custom machines options
   *
   * @default { dir: 'machines', importSuffix: 'Machine' }
   */
  customMachines: CustomMachinesOptions | false,
  /**
   * Array of auto imports from xstate to be available in your app.
   *
   * @default ['createMachine']
   *
   * @example
   * ```js
   * autoImports: [
   *  // automatically import `createMachine`
   *  'createMachine',
   *  // automatically import `createMachine` as `createXStateMachine`
   *  ['createMachine', 'createXStateMachine']',
   * ]
   * ```
   *
   */
  autoImports: Array<string | [string, string]>,
}
