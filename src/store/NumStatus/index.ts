export default {
  state: {
    num: 20,
  },
  action: {
    add(newState: { num: number }, action: { type: string; val: number }) {
      newState.num += action.val
    },
  },
  actionNames: {
    add: 'add',
  },
}
