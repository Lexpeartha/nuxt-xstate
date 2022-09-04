# Quick Start

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

## Using in the project

Module auto-imports everything you need to create your own state machines, below are the basic first steps you can take

- export `createMachine` object from your machines directory (`machines` by default):
```ts
export default createMachine({
  id: 'loading',
  initial: 'idle',
  predictableActionArguments: true,
  states: {
    idle: {
      on: {
        CLICK: 'loading'
      }
    },
    loading: {
      on: {
        CLICK: 'idle'
      }
    }
  }
})
```

- It will be auto-imported in your components/pages and ready for usage:
```vue
<template>
  <div>
    <h1>Current state: {{ state.value }}</h1>
    <button @click="send('CLICK')">
      CLICK
    </button>
  </div>
</template>

<script setup lang="ts">
const { state, send } = useMachine(loadingMachine)
</script>
```

For more check out the [usage](/getting-started/usage) page.