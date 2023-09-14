import React, { lazy } from 'react'
import Home from '../views/Home'
//import About from '../views/About'
import { Navigate } from 'react-router-dom'

const About = lazy(() => import('../views/About'))
//懒加载模式需要添加loading组件
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
)
const routes = [
  {
    path: '/',
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: '/home',
    element: <Home></Home>,
  },
  {
    path: '/about',
    element: withLoadingComponent(<About />),
  },
]

export default routes
