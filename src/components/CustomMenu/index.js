import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu, Icon } from 'antd' 
@withRouter
class CustomMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      openPaths: [],
      selectPaths: []
    }
  }

  componentDidMount = () => {
    const pathname = this.props.location.pathname
    const rank = pathname.split('/')

    switch (rank.length) {
      case 2:
        this.setState({
          selectPaths: [pathname],
          openKeys: [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
        })
        break;
      default:
        this.setState({
          selectPaths: [pathname],
          openPaths: [pathname.substr(0, pathname.lastIndexOf('/'))]
        })
    }
  };
  componentWillReceiveProps(nextProps) {
    //当点击面包屑导航时，侧边栏要同步响应
    const pathname = nextProps.location.pathname
    if (this.props.location.pathname !== pathname) {
      this.setState({
        selectPaths: [pathname],
      })
    }
  }
  onOpenChange = (openPaths) => {
    //此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单）
    if (openPaths.length === 0 || openPaths.length === 1) {
      this.setState({
        openPaths
      })
      return
    }

    //最新展开的菜单
    const latestOpenKey = openPaths[openPaths.length - 1]
    //判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，不是父级菜单就展开父级菜单和当前子菜单
    //因为我的子菜单的key包含了父级菜单，所以不用像官网的例子单独定义父级菜单数组，然后比较当前菜单在不在父级菜单数组里面。
    //只适用于3级菜单
    if (latestOpenKey.includes(openPaths[0])) {
      this.setState({
        openPaths
      })
    } else {
      this.setState({
        openPaths: latestOpenKey ? [latestOpenKey] : []
      })
    }
  }
  renderMenuItem = ({path, icon, title }) => {
    return (
      <Menu.Item key={path} >
        <Link to={path}>
          {icon && <Icon type={icon}/>}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    )
  }
  renderSubMenu = ({path, icon, title, children }) => {
    return (
      <Menu.SubMenu key={path} title={<span>{icon && <Icon type={icon}/>}<span>{title}</span></span>}>
        {
          children && children.map(item => {
            return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
          })
        }
      </Menu.SubMenu>
    )
  }
  render() {
    const {openPaths, selectPaths} = this.state
    return (
      <Menu
        onOpenChange={this.onOpenChange}
        openKeys={openPaths}
        selectedKeys={selectPaths}
        theme='dark'
        mode={ this.props.collapsed ? 'vertical' : 'inline'}
      >
      {
        this.props.menus && this.props.menus.map(item => {
          return item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item)
        })
      }
      </Menu>
    )
  }
};

export default CustomMenu;
