<template>
  <div>
    <h1>Current state: <span data-test-id="state-txt">{{ state.value }}</span></h1>
    <button data-test-id="click-btn" @click="send('CLICK')">
      CLICK
    </button>
    <p data-test-id="machine">
      {{ machine }}
    </p>
  </div>
</template>

<script setup>
const machine = useMachine(loadingMachine)
const { state, send } = machine
</script>
