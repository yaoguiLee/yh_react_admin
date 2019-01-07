import React, { Component } from 'react'
import '../../styles/header.css'
import screenfull from 'screenfull'
import { Icon, Badge, Avatar, Modal } from 'antd'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

@withRouter @inject('appStore') @observer
class HeaderBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      icon: 'arrows-alt',
      count: 100,
      visible: false,
      head: require('../../assets/01.jpg')
    }
  }
  componentDidMount () {
    screenfull.onchange(() => {
      this.setState({
        icon: screenfull.isFullscreen ? 'shrink' : 'arrows-alt'
      })
    })
  }
  componentWillUnmount () {
    screenfull.off('change')
  }
  screenfullToggle = () => {
    if (screenfull.enabled) {
      screenfull.toggle()
    }
  }
  toggle = () => {
    this.props.onToggle()
  }
  render() {
    const { icon, count, head, visible } = this.state
    const { collapsed, appStore } = this.props
    return (
      <div className="yh_header_bar">
        <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.toggle} />
        <div className="yh_header_right_main">
          <ul id="yh_header_ul">
            <li> <Icon type={icon} onClick={this.screenfullToggle}/> </li>
            <li> 
              <Badge count={appStore.isLogin ? count : 0} overflowCount={99}
               style={{position: 'absolute',left: 0, width: '35px' }}>
                <Icon type="notification"/>
              </Badge>
            </li>
            <li>
              <Avatar src={head} onClick={() => this.setState({visible: true})}/>
            </li>
          </ul>
        </div>
        <Modal
          footer={null} closable={false}
          visible={visible}
          wrapClassName="vertical-center-modal"
          onCancel={() => this.setState({visible: false})}>
          <img src={head} alt="" width='100%'/>
        </Modal>
      </div>
    )
  }
}

export default HeaderBar;