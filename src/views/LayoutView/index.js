import React, { Component } from 'react'
import PageMain from '../../routers/PageMain'
import { Layout } from 'antd';
import SiderNav from '../../components/SiderNav/index';
import HeaderBar from '../../components/HeaderBar/index'
import '../../styles/layout.css';
export default class LayoutView extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      collapsed: false
    }
  }
  toggle = () => {
    // console.log(this)  状态提升后，到底是谁调用的它
    this.setState({
      collapsed: !this.state.collapsed
    })
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
              <SiderNav collapsed={this.state.collapsed}/>
            </Sider>
            <Layout>
              <Header className="yh_header_container">
                <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>
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
