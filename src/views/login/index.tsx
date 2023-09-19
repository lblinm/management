import { useEffect } from 'react'
import styles from './login.module.scss'
import initLoginBg from './init.ts'
import { Input, Space, Button } from 'antd'
// import './login.less'
const view = () => {
  //加载完这个组件之后,加载背景
  useEffect(() => {
    initLoginBg()
    //窗口的改变能够引起初始化
    window.onresize = function () {
      initLoginBg()
    }
  }, [])
  return (
    <div className={styles.loginPage}>
      <canvas id="canvas" style={{ display: 'block' }}></canvas>
      <div className={styles.loginBox}>
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>前端通用后台管理系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单部分 */}
        <div className="form">
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Input placeholder="用户名"></Input>
            <Input.Password placeholder="密码"></Input.Password>
            <Button type="primary" block>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default view
