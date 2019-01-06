import React, { Component } from 'react'
import PageMain from '../../routers/PageMain'
import { Layout } from 'antd';
import SiderNav from '../../components/SiderNav/index';
import '../../styles/layout.css';
export default class LayoutView extends Component {
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <div>
        <Layout>
          <Layout>
            <Sider className="yh_sider_container">
              <SiderNav />
            </Sider>
            <Layout>
              <Header className="yh_header_container"></Header>
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
