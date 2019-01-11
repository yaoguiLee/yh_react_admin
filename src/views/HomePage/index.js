import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import NumberCard from '../../components/NumberCard/index'
import { Row } from 'antd';
@withRouter
class HomePage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      them: '',
      animatedType: '',
      options: [
        {title: 'Online Review', number: 3264, color: '#DD5246', icon: 'pay-circle' },
        {title: 'New Customers', number: 4688, color: '#4B8BF4', icon: 'team' },
        {title: 'Active Projects', number: 7898, color: '#F797D6', icon: 'message' },
        {title: 'Referrals', number: 7878, color: '#FFCD42', icon: 'shopping' }
      ]
    }
  }
  
  render() {
    const { options } = this.state;
    return (
      <Row gutter={16}>
        {
          options.map(option => {
            return <NumberCard option={option} key={option.icon }/>
          })
        }
      </Row>
    )
  }
}

export default HomePage
