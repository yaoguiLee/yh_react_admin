import React, { Component } from 'react'
import '../../styles/login.css'
import { Form, Icon, Input, Row, Col, Checkbox, Button, message } from 'antd';
import buildVerifyCode from '../../tools/BVerifyCode'
import "animate.css";
import { withRouter } from 'react-router-dom'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { inject, observer } from 'mobx-react/index';
import { setCookie } from '../../tools/Cookie'

const canvasOptions = { id: "verifycode", width: "100", height: "39" }
@withRouter @inject('appStore') @observer @Form.create()
class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      code: ''
    }
  }

  componentDidMount() {
    this.props.appStore.initUsers()
    const code = buildVerifyCode(canvasOptions)
    this.setState({ code: code })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="yh_login_bg">
        <ReactCSSTransitionGroup transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={2500}
          transitionLeaveTimeout={1500}
          transitionName="animated">
          <section className="yh_login_container animated bounceIn">
            <div className="yh_login_form">
              <h3 className="yh_login_h">XXXX后台系统管理</h3>
              <Form onSubmit={this.loginSubmit}>
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [
                      { required: true, message: 'Please input your username!' },
                      { pattern: '^[^ ]+$', message: 'Can not enter spaces!' }
                    ],
                  })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [
                      { required: true, message: 'Please input your Password!' },
                      { pattern: '^[^ ]+$', message: 'Can not enter spaces!' }
                    ],
                  })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('verification', {
                    rules: [{ required: true, message: 'Please input Verification Code!' }],
                  })(
                    <Row gutter={16}>
                      <Col span={15}>
                        <Input prefix={<Icon type="safety" style={{ color: 'rgba(0,0,0,.25)' }} />}
                          type="text" placeholder="verification" />
                      </Col>
                      <Col span={9}>
                        <canvas id="verifycode" onClick={() => { buildVerifyCode(canvasOptions) }}
                          ref={el => this.canvas = el} style={{ cursor: "pointer" }} />
                      </Col>
                    </Row>
                  )}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox className="yh_login_checkbox">Remember me</Checkbox>
                  )}
                  <a className="yh_form_forgot" href="javascipt:void">Forgot password</a>
                  <Button type="primary" htmlType="submit" className="yh_login_btn">
                    Log in
                    </Button>
                </Form.Item>
              </Form>
              <span className="yh_login_footer">欢迎使用XXXX后台管理系统</span>
            </div>
          </section>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
  loginSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((error, value) => {
      if (!error) {
        // 校验验证码是否输入正确
        if (value.verification.toUpperCase() !== this.state.code.toUpperCase()) {
          this.props.form.setFields({
            verification: {
              value: value.verification,
              errors: [new Error('verifyCode error!')]
            }
          })
          return;
        }
        // 校验用户是否存在
        const users = this.props.appStore.users;
        const result = users.find(item => item.username === value.username)
        if (!result) {
          this.props.form.setFields({
            username: {
              value: value.username,
              errors: [new Error('user name does not exist!')]
            }
          })
          return;
        }
        // 校验密码是否输入正确
        if (result.password !== value.password) {
          this.props.form.setFields({
            password: {
              value: value.password,
              errors: [new Error('enter password error!')]
            }
          })
          return;
        }
        setCookie(value.username)
        message.success('Login successfully!')
        const {from} = this.props.location.state || {from: {pathname: '/'}}
        this.props.history.push(from)
        // this.props.history.push({ pathname: '/' })
      }
    })
  }
}
export default LoginForm