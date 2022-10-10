---
title: Getting Started
description: Getting started with nuxt-xstate module
layout: docs
aside: true
---

# {{ $frontmatter.title }}

Nuxt XState module allows for easy integration of [XState](https://xstate.js.org/) with Nuxt.js.

- [Online playground](https://stackblitz.com/edit/nuxt-xstate-playground?file=app.vue) :video_game:

::: warning Project Status: Beta
:warning: APIs may change on minor releases. Lock the version to avoid breakage.
:::

## Features :toolbox:

- Nuxt Bridge & Nuxt 3 support :sparkles:
- Auto-importing of XState composables :zap:
- Auto-importing of your own state-machines :mechanical_arm:

## Issues to be aware of :bug:

1. [Webpack build not working](https://github.com/Lexpeartha/nuxt-xstate/issues/26)
2. [Nuxt Bridge with minimal implementation throwing type error](https://github.com/Lexpeartha/nuxt-xstate/issues/24) (*workaround available*)

## Work in progress features :carpentry_saw:

- [`@xstate/inspect`](https://xstate.js.org/docs/packages/xstate-inspect/) support

For more details, check out this discussion: [v1.0 Checklist](https://github.com/Lexpeartha/nuxt-xstate/discussions/10)