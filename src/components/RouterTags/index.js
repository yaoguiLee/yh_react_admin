import React, { Component } from 'react'
import '../../styles/routerTags.css'
import { Tag } from 'antd';
import { withRouter, Link } from 'react-router-dom'
import { getTitleByPath } from '../../tools/menuUtils'
import { inject, observer } from 'mobx-react'
@withRouter @inject('menuStore') @observer
class RouterTags extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       tags: [],
       checked: '/home'
    }
  }
  onClickTag = (item, index) => {
    this.setState({ checked: item.path })
  }
  onCloseTag = (item, index) => {
    const { tags } = this.state
    const newTags = tags.filter(value => value.path !== item.path);
    this.setState({tags: newTags});
  }
  componentWillReceiveProps(nextProps) {
    const { tags } = this.state
    const {menuList} = this.props.menuStore
    const path = nextProps.location.pathname
    const tag = tags.find(item => item.path === path);
    if (!tag) {
      const item =getTitleByPath(menuList, nextProps.location.pathname, {});
      this.setState({tags: [...tags, {title: item.title, path: path}], checked: path});
    } else {
      this.setState({checked: tag.path});
    }
  }
  render() {
    const { tags, checked } = this.state
    return (
      <div className="yh_header_tags_container">
        {
          tags.map((item, index) => {
            return (
              <Tag closable color={ checked === item.path ? 'cyan' : null } className="yh_header_tag"
                onClick={() => { this.onClickTag(item, index) }}
                onClose={() => { this.onCloseTag(item, index)}}
                key={item.path}
              >
                <span>
                  <Link to={item.path} className="yh_header_tag_link"><span>{item.title}</span></Link>
                </span>
              </Tag>
            )
          })
        }
      </div>
    )
  }
}

export default RouterTags