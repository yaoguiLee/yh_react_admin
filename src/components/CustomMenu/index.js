import React, { Component } from 'react'
import {Link,withRouter} from 'react-router-dom'
import {Menu, Icon} from 'antd'

@withRouter
class CustomMenu extends Component {
  componentDidMount = () => {
    const pathname = this.props.location.pathname
  };
  
  render() {
    return (
      <div>
        123
      </div>
    )
  }
};

export default CustomMenu;
