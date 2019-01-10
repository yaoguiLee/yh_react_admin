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
    this.isClose = false
  }
  onClickTag = (item, index) => {
    this.setState({ checked: item.path })
  }
  onCloseTag = (item, index) => {
    const { tags } = this.state
    // this.setState({tags: newTags});
    if (tags.length - 1 === 0) {
      this.setState({tags: [{title: '首页', path: '/home'}]})
      this.isClose = true
      this.props.history.push({pathname: '/home'})
    } else {
      const tag = tags[index - 1] || tags[index + 1]
      const newTags = tags.filter(value => value.path !== item.path);
      this.setState({tags: newTags})
      this.isClose = true
      this.props.history.push({pathname: tag.path})
    }
  }
  componentWillReceiveProps(nextProps) {
    const { tags } = this.state
    const {menuList} = this.props.menuStore
    const path = nextProps.location.pathname
    const tag = tags.find(item => item.path === path);
    if (!this.isClose) {
      if (!tag) {
        const item =getTitleByPath(menuList, nextProps.location.pathname, {});
        this.setState({tags: [...tags, {title: item.title, path: path}], checked: path});
      } else {
        this.setState({checked: tag.path});
      }
    }
    this.isClose = false;
  }
  render() {
    const { tags, checked } = this.state
    return (
      <div className="yh_header_tags_container">
        {
          tags.map((item, index, array) => {
            return (
              <Tag closable color={ checked === item.path ? 'cyan' : null } className="yh_header_tag"
                onClick={() => { this.onClickTag(item, index) }}
                onClose={() => { this.onCloseTag(item, index)}}
                key={item.path}
                visible
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