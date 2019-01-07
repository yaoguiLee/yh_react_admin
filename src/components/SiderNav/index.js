import React, { Component } from 'react'
// import logo from '../../static/logo.svg';
import '../../styles/siderNav.css';
import CustomMenu from '../CustomMenu/index';
const menus = [
  {
    title: '首页',
    icon: 'home',
    path: '/home'
  },
  {
    title: '输入组件',
    icon: 'edit',
    path: '/home/entry',
    children: [
      {
        path: '/home/entry/form',
        title: '表单',
        icon: '',
        children: [
          { path: '/home/entry/form/basic-form', title: '基础表单', icon: '' }
        ]
      },
      { path: '/home/entry/upload', title: '上传', icon: '' }
    ]
  }
]
class SiderNav extends Component {
  render() {
    return (
      <div style={{ height: '100vh', overflow: 'auto', overflowX: 'hidden' }}>
        <div className="yh_nav_logo"></div>
        <CustomMenu menus={menus} collapsed={this.props.collapsed}/>
      </div>
    )
  }
}

export default SiderNav;
