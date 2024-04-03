# Nuxt XState

![GitHub package.json version](https://img.shields.io/github/package-json/v/Lexpeartha/nuxt-xstate?style=flat-square) ![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/nuxt-xstate/@nuxt/kit?style=flat-square) ![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/nuxt-xstate/xstate?style=flat-square) ![npm](https://img.shields.io/npm/dm/nuxt-xstate?label=npm%20downloads&style=flat-square) ![Website](https://img.shields.io/website?down_message=offline&label=documentation&style=flat-square&up_message=online&url=https%3A%2F%2Fnuxt-xstate.lexpeartha.com%2F) ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/Lexpeartha/nuxt-xstate/ci.yml?label=ci&style=flat-square&branch=main)

Nuxt XState module allows for easy integration of [XState](https://xstate.js.org/) with Nuxt.js.

- [Read documentation](https://nuxt-xstate.lexpeartha.com) :book:
- [Online playground](https://stackblitz.com/edit/nuxt-xstate-playground?file=app.vue) :video_game:

## Features :sparkles:

- Nuxt Bridge & Nuxt 3 supported
- Auto-importing of XState composables
- Auto-importing of your own state-machines

## Installation :floppy_disk:

Run one of the following commands:

```bash
npx nuxi@latest module add xstate
```

And add it to your `nuxt.config.ts`:

```js
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['nuxt-xstate']
})
```

## Usage :toolbox:

:point_right: Check out the [documentation](https://nuxt-xstate.lexpeartha.com/getting-started/usage)

## Work in progress :construction:

- [ ] [`@xstate/inspect`](https://xstate.js.org/docs/packages/xstate-inspect/) support

## Development :computer:

- Clone repository and install dependencies with `yarn install`
- Run `yarn dev:prepare` to generate type stubs.
- Use `yarn dev` to start [playground](./playground) in development mode.
