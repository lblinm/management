import handleArr from './index'
let reducer = (
  state = handleArr.state,
  action: { type: string; val: number }
) => {
  let newState = JSON.parse(JSON.stringify(state))
  // switch (action.type) {
  //   case 'sarrpush':
  //     handleArr.action.sarrpush(newState, action)
  //     break
  //   default:
  //     break
  // }
  for (let key in handleArr.action) {
    if (action.type === key) {
      handleArr.action[key](newState, action)
    }
  }
  return newState
}
export default reducer
