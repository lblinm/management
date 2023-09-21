import handleNum from './index'
let reducer = (state = handleNum.state, action: { type: string; val: any }) => {
  let newState = JSON.parse(JSON.stringify(state))

  //优化switch->遍历
  // switch (action.type) {
  //   case 'add':
  //     handleNum.action.add(newState, action)
  //     break
  //   default:
  //     break
  // }
  // for (let key in handleNum.actionNames) {
  //   if (action.type === handleNum.actionNames[key]) {
  //     handleNum.action[key](newState, action)
  //     break
  //   }
  // }
  for (let key in handleNum.action) {
    if (action.type === key) {
      handleNum.action[key](newState, action)
      break
    }
  }
  return newState
}
export default reducer
