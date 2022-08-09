# Nuxt XState

Nuxt XState module allows for easy integration of [XState](https://xstate.js.org/) with Nuxt.js. This module is  🚧 WIP 🚧 so stay alert!

- Read documentation :book: (*soon*)
- Online playground :video_game: (*soon*)

Basic documentation has been set up, but [this VitePress issue](https://github.com/vuejs/vitepress/issues/917) is blocking it from being deployed by CI/CD workflow. Temporarily hosted docs can be found [here](https://nuxt-xstate.netlify.app/) - it's location will most certainly change in the future!

## Features :sparkles:

- Nuxt 3 support
- Auto-importing of XState composables

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
  // Below are shown default values
  xState: {
    minimal: false // boolean
  },
})
```

- `minimal`: set to `true` to use minified implementations of certain XState features ([see here](https://xstate.js.org/docs/packages/xstate-fsm/#features))

### In your project

Module auto-imports all `@xstate/vue` composables and `createMachine` function from `xstate`. You should be able to use them in your project without any issues.

## Work in progress :construction:

- [ ] Nuxt 2/Bridge support
- [ ] Auto-import your own state machines
- [ ] [XState visualizer](https://xstate.js.org/viz/) support

## Development :computer:

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
