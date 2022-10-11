# Configuration

You can add `xState` field in your `nuxt.config.ts` to configure the module:

```ts{6-12}
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['nuxt-xstate'],
  // Shown below are the default module options
  xState: {
    minimal: false, // boolean
    customMachines: {
      dir: 'machines', // string
      importSuffix: 'Machine', // string
    },
    autoImports: ['createMachine'], // Array<string | [string, string]>,
  },
})
```

::: info Nuxt Bridge usage
Nuxt Bridge as of now does not work properly with minimal implementation of XState. If you are using Nuxt Bridge, you need to either ensure `minimal` is set to `false` (or left untouched, as `false` is the default) in your module options for now, or use the workaround described in [this issue](https://github.com/Lexpeartha/nuxt-xstate/issues/24).
:::

- `minimal`: set to `true` to use minified implementations of certain XState features ([see here](https://xstate.js.org/docs/packages/xstate-fsm/#features))
- `customMachines`: set to `false` to disable auto-importing of your own state-machines. It is an object and it has two properties, `dir` and `importSuffix`
  - `dir`: the directory where your state-machines are located
  - `importSuffix`: the suffix you want appended to your state-machine names
- `autoImports`: an array of strings or arrays of strings. Each string is the name of a XState composable you want to auto-import. If you want to rename the import, you can pass an array of two strings, where the first string is the name of the composable and the second string is the name you want to use for the import. By default it's `['createMachine']`