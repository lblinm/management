import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import './assets/styles/global.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App></App>
    </BrowserRouter>
  </React.StrictMode>
)
