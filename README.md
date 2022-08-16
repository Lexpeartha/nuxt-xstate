# Nuxt XState

![GitHub package.json version](https://img.shields.io/github/package-json/v/Lexpeartha/nuxt-xstate?style=flat-square) ![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/nuxt-xstate/@nuxt/kit?style=flat-square) ![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/nuxt-xstate/xstate?style=flat-square) ![npm](https://img.shields.io/npm/dm/nuxt-xstate?label=npm%20downloads&style=flat-square) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/nuxt-xstate?style=flat-square)

Nuxt XState module allows for easy integration of [XState](https://xstate.js.org/) with Nuxt.js. This module is  🚧 WIP 🚧 so stay alert!

- [Read documentation](https://nuxt-xstate.lexpeartha.com/) :book:
- [Online playground](https://stackblitz.com/edit/nuxt-xstate-playground?file=app.vue) :video_game:

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

### In your project

Check out [documentation](https://nuxt-xstate.lexpeartha.com/getting-started.html#usage) for code example and exact details of usage

## Work in progress :construction:

- [x] Auto-import your own state machines
- [ ] Nuxt 2/Bridge support
- [ ] [XState visualizer](https://xstate.js.org/viz/) support

## Development :computer:

- Clone repository and install dependencies with `yarn install`
- Run `yarn dev:prepare` to generate type stubs.
- Use `yarn dev` to start [playground](./playground) in development mode.
