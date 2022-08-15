# Nuxt XState

Nuxt XState module allows for easy integration of [XState](https://xstate.js.org/) with Nuxt.js. This module is  🚧 WIP 🚧 so stay alert!

- Read documentation :book: (*soon*)
- Online playground :video_game: (*soon*)

Basic documentation has been set up, but [this VitePress issue](https://github.com/vuejs/vitepress/issues/917) is blocking it from being deployed by CI/CD workflow. Temporary and manually deployed docs can be found [here](https://nuxt-xstate.netlify.app/) - it's location will most certainly change in the future!

## Features :sparkles:

- Nuxt 3 support
- Auto-importing of XState composables
- Auto-importing of your own state-machines

## Installation :floppy_disk:

Run one of the following commands:

```bash
yarn add --dev nuxt-xstate
# or
npm install --save-dev nuxt-xstate
```

And add it to your `nuxt.config.ts`:

```js
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-xstate']
})
```

## Usage :toolbox:

### Options

You can add `xState` field in your `nuxt.config.ts` to configure the module:

```js
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-xstate'],
  // Shown below are the default module options
  xState: {
    minimal: false // boolean
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

### In your project

Module auto-imports all `@xstate/vue` composables and `createMachine` function from `xstate`. You should be able to use them in your project right away!

To import your own state-machines, go create directory with the name of `machines` (or other name you specified in module options) and create a file that has the name of your state-machine. Module will look for default exports from that file, and append it with the suffix from the options, so you can use it in your project. To make this auto-imports fully type-safe, follow the [official guide](https://xstate.js.org/docs/guides/typescript.html#using-typescript).

Check out [temporary docs](https://nuxt-xstate.netlify.app/) for code example and more details

## Work in progress :construction:

- [x] Auto-import your own state machines
- [ ] Nuxt 2/Bridge support
- [ ] [XState visualizer](https://xstate.js.org/viz/) support

## Development :computer:

- Clone repository and install dependencies with `yarn install`
- Run `yarn dev:prepare` to generate type stubs.
- Use `yarn dev` to start [playground](./playground) in development mode.
