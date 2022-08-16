---
title: Getting Started
layout: docs
aside: true
---

# {{ $frontmatter.title }}

Nuxt XState module allows for easy integration of [XState](https://xstate.js.org/) with Nuxt.js.

- Online playground :video_game: (*soon*)

::: warning
:warning: This module is still WIP so stay alert!
:::

[[toc]]

## Features

- Nuxt 3 support :sparkles:
- Auto-importing of XState composables :zap:
- Auto-importing of your own state-machines :mechanical_arm:

## Installation

Run one of the following commands:

```bash
yarn add --dev nuxt-xstate
# or
npm install --save-dev nuxt-xstate
```

And add it to your modules in `nuxt.config.ts`:

```ts{4}
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-xstate']
})
```

## Usage

### Options

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


### In your project

Module auto-imports all `@xstate/vue` composables and `createMachine` function from `xstate`. You should be able to use them in your project right away!

To import your own state-machines, go create directory with the name of `machines` (or other name you specified in module options) and create a file that has the name of your state-machine. Module will look for default exports from that file, and append it with the suffix from the options, so you can use it in your project. To make this auto-imports fully type-safe, follow the [official guide](https://xstate.js.org/docs/guides/typescript.html#using-typescript).

::: details Expand to see code example
Let's say you have default options, in which case you would create your machine in `/machines` dir and name it let's say `loading.ts`:
```ts
export default createMachine({
  // Your state-machine logic here
})
```

Then in your components/pages it would be auto-imported and ready for usage:
```html
<script setup lang="ts">
  const { state, send } = useMachine(loadingMachine)
</script>
```
:::

::: warning Known issue
Currently module only scans for your state-machines when launching dev server. If you want your new state-machines to be auto-imported, you need to restart the dev server. See [this issue](https://github.com/Lexpeartha/nuxt-xstate/issues/9) for more details and to track the progress of fixing the issue.
:::

## Work in progress features

- Nuxt 2/Bridge support
- [XState visualizer](https://xstate.js.org/viz/) support