# Configuration

You can add `xState` field in your `nuxt.config.ts` to configure the module:

```ts{6-12}
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-xstate'],
  // Shown below are the default module options
  xState: {
    minimal: false, // boolean
    customMachines: {
      dir: 'machines', // string
      importSuffix: 'Machine', // string
    }
  },
})
```

- `minimal`: set to `true` to use minified implementations of certain XState features ([see here](https://xstate.js.org/docs/packages/xstate-fsm/#features))
- `customMachines`: set to `false` to disable auto-importing of your own state-machines. It is an object and it has two properties, `dir` and `importSuffix`
  - `dir`: the directory where your state-machines are located
  - `importSuffix`: the suffix you want appended to your state-machine names