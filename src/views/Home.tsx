import { Breadcrumb, Layout } from 'antd'
import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import MainMenu from '@/components/MainMenu'
const { Header, Content, Footer, Sider } = Layout

const View: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/*  侧边栏 */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}>
        {/* 侧边栏顶部logo */}
        <div className="logo"></div>
        <MainMenu></MainMenu>
      </Sider>
      {/* 右边内容 */}
      <Layout className="site-layout">
        {/* 右边头部 */}
        <Header
          className="site-layout-background"
          style={{ paddingLeft: '16px' }}>
          {/* 面包屑 */}
          <Breadcrumb style={{ lineHeight: '64px' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
        </Header>
        {/* 右边中部内容 */}
        <Content
          style={{ margin: '16px 16px 0' }}
          className="site-layout-background">
          {/* 窗口部分 */}
          <Outlet />
          {/* <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
          </div> */}
        </Content>
        {/* 右边底部 */}
        <Footer
          style={{ textAlign: 'center', padding: '0', lineHeight: '48px' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}
export default View
