type ActionMethods = {
  [key: string]: (
    newState: { sarr: number[] },
    action: { type: string; val: number }
  ) => void
}

const handleArr = {
  state: {
    sarr: [1, 2, 3],
  },
  action: {
    sarrpush: (
      newState: { sarr: number[] },
      action: { type: string; val: number }
    ) => {
      newState.sarr.push(action.val)
    },
  } as ActionMethods,
}
export default handleArr
