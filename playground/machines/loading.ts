export const loadingMachine = createMachine({
  id: 'loading',
  initial: 'idle',
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
