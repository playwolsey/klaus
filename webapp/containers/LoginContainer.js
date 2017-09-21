import React , { Component } from 'react'
import { Input } from 'antd'

import '../style/login.scss'

export default class LoginContainer extends Component {
    render() {
        return (
            <div className="m-login">
                <div className="login-wrapper">
                    <div className="cover-container">
                        <div className="inner">
                            <h3 className="cover-heading">登录</h3>
                            <div className="clearfix">
                                <div>
                                    <Input size="large" name="email" placeholder="您的Email地址" />
                                </div>
                                <div>
                                    <Input type="password" name="password" placeholder="请填写密码" />
                                </div>
                                <div>
                                    <button className="button button-lg button-circle button-block button-pasific hover-ripple-out">确认登录</button>
                                    <a className="color-light mt20">没有账户，马上注册</a>
                                    <a className="color-light mt20" href="/account/forgetpass">忘记密码</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

