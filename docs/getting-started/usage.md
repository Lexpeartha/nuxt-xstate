# Usage

Module auto-imports all `@xstate/vue` composables and `createMachine` function from `xstate`. You should be able to use them in your project right away!

To import your own state-machines, go create directory with the name of `machines` (or other name you specified in module options) and create a file that has the name of your state-machine. Module will look for default exports from that file, and append it with the suffix from the options, so you can use it in your project. To make this auto-imports fully type-safe, follow the [official guide](https://xstate.js.org/docs/guides/typescript.html#using-typescript).

::: details Expand to see code example
Let's say you have default options, in which case you would create your machine in `machines` dir and name it let's say `loading.ts`:
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

---

If you want to create really complex state machines, you probably need utilities like `assign` and `send`. They are not auto-imported by default, since their names are quite too common and you likely don't want them imported in every file to obstruct naming other things. For such cases, you can use auto-imported `useXState` composable:

```ts
const { assign, send } = useXState()

export default createMachine({
  // Your state-machine logic here
})
```

You can treat it as your own toolbox that you reach out to when creating state machines, instead of thinking about importing utilities that work well with your xstate implementation.
If you see any of the utilities not being returned by `useXState`, please open an issue!

::: warning Be careful
The `useXState` composable returns utils based on whether you use minimal implementation or not. If you do use it, you will not get full features, for which we recommend you to see official docs [here](https://xstate.js.org/docs/packages/xstate-fsm/#features) and see what's available for you.
:::

However, if you prefer any or all of these utilities to be auto-imported, you can do so by adding them to `autoImports` option in your module options. For example, if you want to auto-import `assign` and `send`:

```ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['nuxt-xstate'],
  xState: {
    autoImports: [
      'createMachine' // import createMachine,
      ['assign', 'assignMachine'] // import assign as assignMachine,
      ['send', 'sendMachine'] // import send as sendMachine
    ],
  },
})
```

As you can see, imports are completely configurable, so you can import them as you like.

::: info
In similar vein, be careful what you put in here. If you're using minimal implementation, which is not provided by `@xstate/fsm` as utility - things will most certainly break. If something is missing, please open an issue!
:::