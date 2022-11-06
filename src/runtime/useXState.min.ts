import { assign, createMachine } from '@xstate/fsm'

export const useXState = () => {
  return {
    assign,
    createMachine
  }
}
