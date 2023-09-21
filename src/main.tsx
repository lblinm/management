import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import './assets/styles/global.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      {/* //该开发模式下组件会渲染两遍 */}
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
