// import store from '@/store'
//类型声明文件里不要使用import from而是使用import(''),否则导出后还要引入才能使用
//returntype获取函数类型的返回值
type RootState = ReturnType<typeof import('@/store').getState>
interface Window {
  __REDUX_DEVTOOLS_EXTENSION__: function
}
