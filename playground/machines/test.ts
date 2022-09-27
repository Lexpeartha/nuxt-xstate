export default createMachine({
  id: 'test',
  initial: 'notStarted',
  predictableActionArguments: true,
  states: {
    notStarted: {
      on: {
        CLICK: 'testing'
      }
    },
    testing: {
      on: {
        CLICK: 'notStarted'
      }
    }
  }
})
