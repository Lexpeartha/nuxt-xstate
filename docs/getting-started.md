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

## Features

- Nuxt 3 support :sparkles:
- Auto-importing of XState composables :zap:

## Installation

Run one of the following commands:

```bash
yarn add --dev nuxt-xstate
# or
npm install --save-dev nuxt-xstate
```

And add it to your modules in `nuxt.config.ts`:

```js{4}
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-xstate']
})
```

## Usage

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

## Work in progress features

- Nuxt 2/Bridge support
- Auto-import your own state machines
- [XState visualizer](https://xstate.js.org/viz/) support