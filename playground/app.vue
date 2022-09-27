<template>
  <div>
    <h1>Current state: {{ state.value }}</h1>
    <button @click="send('CLICK')">
      CLICK
    </button>
  </div>
</template>

<script setup lang="ts">
import loadingMachine from './.nuxt/xstate/loadingMachine'

const { state, send } = useMachine(loadingMachine)
</script>
