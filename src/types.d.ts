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
   * WARNING: Make sure that strings you use should be provided by `xstate`
   * or `@xstate/fsm` package, depending on whether you use minimal option.
   *
   * @default ['createMachine']
   *
   * @example
   * ```js
   * autoImports: [
   *  // automatically import `createMachine`
   *  'createMachine',
   *  // automatically import `createMachine` as `createXStateMachine`
   *  ['createMachine', 'createXStateMachine']
   * ]
   * ```
   *
   */
  autoImports: Array<string | [string, string]>,
}
