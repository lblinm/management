import { useEffect, useState, ChangeEvent } from 'react'
import styles from './login.module.scss'
import initLoginBg from './init.ts'
import { Input, Space, Button } from 'antd'
import './login.less'

const view = () => {
  //加载完这个组件之后,加载背景
  useEffect(() => {
    initLoginBg()
    //窗口的改变能够引起初始化
    window.onresize = function () {
      initLoginBg()
    }
  }, [])
  const [usernameVal, setUsernameVal] = useState('')
  const [passwordVal, setPasswordVal] = useState('')
  const [captchaVal, setCaptchaVal] = useState('')
  const usernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsernameVal(e.target.value)
  }
  const passwordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordVal(e.target.value)
  }
  const captchaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCaptchaVal(e.target.value)
  }
  const goLogin = () => {
    console.log(usernameVal, passwordVal, captchaVal)
  }
  return (
    <div className={styles.loginPage}>
      <canvas id="canvas" style={{ display: 'block' }}></canvas>
      <div className={styles.loginBox + ' loginbox'}>
        {/* ' loginbox'一定要有空格！！！ */}
        {/* 标题部分 */}
        <div className={styles.title}>
          <h1>前端通用后台管理系统</h1>
          <p>Strive Everyday</p>
        </div>
        {/* 表单部分 */}
        <div className="form">
          <Space direction="vertical" size="large" style={{ display: 'flex' }}>
            <Input placeholder="用户名" onChange={usernameChange}></Input>
            <Input.Password
              placeholder="密码"
              onChange={passwordChange}></Input.Password>
            <div className="captchaBox">
              <Input placeholder="验证码" onChange={captchaChange}></Input>
              <div className="captchaImg">
                <img
                  height="38px"
                  src="http://register.yunya2.chaoxing.com/showCode"></img>
              </div>
            </div>
            <Button className="loginBtn" type="primary" block onClick={goLogin}>
              登录
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default view
