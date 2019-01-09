import React, { Component } from 'react'
import '../../styles/routerTags.css'
import { Tag } from 'antd';
import { withRouter, Link } from 'react-router-dom'
@withRouter
class RouterTags extends Component {
  render() {
    return (
      <div className="yh_header_tags_container">
        <Tag closable>
          <span>
            <Link to={"/home"}><span>首页</span></Link>
          </span>
        </Tag>
      </div>
    )
  }
}

export default RouterTags