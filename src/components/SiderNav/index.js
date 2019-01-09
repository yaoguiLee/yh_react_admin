import React, { Component } from 'react'
// import logo from '../../static/logo.svg';
import '../../styles/siderNav.css';
import CustomMenu from '../CustomMenu/index';
import { inject, observer } from 'mobx-react/index';

@inject('menuStore') @observer
class SiderNav extends Component {
  render() {
    const { menuStore } = this.props
    const menus = menuStore.getMenuList()
    return (
      <div style={{ height: '100vh', overflow: 'auto', overflowX: 'hidden' }}>
        <div className="yh_nav_logo"></div>
        <CustomMenu menus={ menus } collapsed={this.props.collapsed}/>
      </div>
    )
  }
}

export default SiderNav;
