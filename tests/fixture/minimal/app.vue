<template>
  <div>
    <h1>Current state: <span data-test-id="state-txt">{{ state.value }}</span></h1>
    <button data-test-id="click-btn" @click="send('CLICK')">
      CLICK
    </button>
  </div>
</template>

<script setup>
const { state, send } = useMachine(loadingMachine)
</script>
