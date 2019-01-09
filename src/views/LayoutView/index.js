import React, { Component } from 'react'
// import { inject, observer } from 'mobx-react/index';
import PageMain from '../../routers/PageMain'
import { Layout } from 'antd';
import SiderNav from '../../components/SiderNav/index';
import HeaderBar from '../../components/HeaderBar/index'
import RouterTag from '../../components/RouterTags/index'
import { withRouter } from 'react-router-dom'
import '../../styles/layout.css';

@withRouter
class LayoutView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      collapsed: false,
      currentPath: ''
    }
  }
  toggle = () => {
    // console.log(this)  状态提升后，到底是谁调用的它
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({currentPath: nextProps.location.pathname})
  }
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <div>
        <Layout>
          <Layout>
            <Sider className="yh_sider_container"
              trigger={null}
              collapsible
              collapsed={this.state.collapsed}
            >
              <SiderNav collapsed={this.state.collapsed} currentPath={this.state.currentPath}/>
            </Sider>
            <Layout>
              <Header className="yh_header_container">
                <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle} />
                <RouterTag />
              </Header>
              <Content className="yh_main_container">
                <PageMain />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default LayoutView;