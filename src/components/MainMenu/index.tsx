import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    label: '栏目一',
    key: '/page1',
    icon: <PieChartOutlined />,
  },
  {
    label: '栏目二',
    key: '/page2',
    icon: <DesktopOutlined />,
  },
  {
    label: '栏目三',
    key: 'page3',
    icon: <UserOutlined />,
    children: [
      {
        label: '栏目301',
        key: '/page3/page301',
      },
      {
        label: '栏目302',
        key: '/page3/page302',
      },
    ],
  },
  {
    label: '栏目四',
    key: 'page4',
    icon: <TeamOutlined />,
    children: [
      {
        label: '栏目401',
        key: '/page4/page401',
      },
      {
        label: '栏目402',
        key: '/page4/page402',
      },
    ],
  },
]
const Comp: React.FC = () => {
  const currentRoute = useLocation()
  const [openKeys, setOpenKeys] = useState([
    currentRoute.pathname.split('/')[1],
  ])
  // function findkey(obj: { key: string }) {
  //   return obj.key === currentRoute.pathname
  // }
  // for (let i = 0; i < items.length; i++) {
  //   if (items[i]!['children'] && items[i]!['children'].find(findkey)) {
  //     setOpenKeys([items[i]!.key as string])
  //     break
  //   }
  // }
  const navigateTo = useNavigate()

  const menuClick = (e: { key: string }) => {
    //点击跳转到对应路由    编程式导航跳转路由    利用hook
    navigateTo(e.key)
  }
  const handleOpenChange = (keys: string[]) => {
    //展开和回收时执行
    //key是一个数组，记录了哪个展开
    setOpenKeys([keys[keys.length - 1]])
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRoute.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={handleOpenChange}
      //当前展开项的key数组
      openKeys={openKeys}
    />
  )
}
export default Comp
