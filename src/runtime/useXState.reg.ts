import {
  send,
  sendParent,
  sendUpdate,
  assign,
  mapState,
  matchState,
  matchesState,
  createSchema,
  forwardTo,
  doneInvoke
} from 'xstate'

export const useXState = () => {
  return {
    send,
    sendParent,
    sendUpdate,
    assign,
    mapState,
    matchState,
    matchesState,
    createSchema,
    forwardTo,
    doneInvoke
  }
}
