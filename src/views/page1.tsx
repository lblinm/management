import { useSelector, useDispatch } from 'react-redux'

function View() {
  const { num } = useSelector((state: RootState) => ({
    num: state.handleNum.num,
  }))
  const { sarr } = useSelector((state: RootState) => ({
    sarr: state.handleArr.sarr,
  }))
  const dispatch = useDispatch()
  const changeNum = () => {
    dispatch({ type: 'add', val: 1 })
  }
  const changeSarr = () => {
    dispatch({ type: 'sarrpush', val: 1 })
  }
  return (
    <div className="About">
      <p>page1</p>
      <p>{num}</p>
      <button onClick={changeNum}>按钮</button>
      <p>{sarr}</p>
      <button onClick={changeSarr}>按钮</button>
    </div>
  )
}
export default View
