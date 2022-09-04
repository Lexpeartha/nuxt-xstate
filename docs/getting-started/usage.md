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

::: warning Known issue
Currently module only scans for your state-machines when launching dev server. If you want your new state-machines to be auto-imported, you need to restart the dev server. See [this issue](https://github.com/Lexpeartha/nuxt-xstate/issues/9) for more details and to track the progress of fixing the issue.
:::