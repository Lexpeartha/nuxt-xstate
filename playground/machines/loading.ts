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
