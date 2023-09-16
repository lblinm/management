import React, { lazy } from 'react'
import Home from '../views/Home'
//import About from '../views/About'
import { Navigate } from 'react-router-dom'

const Page1 = lazy(() => import('../views/page1'))
const Page2 = lazy(() => import('../views/page2'))
//懒加载模式需要添加loading组件
const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{comp}</React.Suspense>
)
const routes = [
  {
    path: '/',
    element: <Navigate to="/page1"></Navigate>,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: withLoadingComponent(<Page1></Page1>),
      },
      {
        path: '/page2',
        element: withLoadingComponent(<Page2></Page2>),
      },
    ],
  },
  // {
  //   path: '/home',
  //   element: <Home></Home>,
  // },
  // {
  //   path: '/about',
  //   element: withLoadingComponent(<About />),
  // },
]

export default routes
