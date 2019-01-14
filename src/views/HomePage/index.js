import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { withRouter } from 'react-router-dom';
import NumberCard from '../../components/NumberCard/index'
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
      ],
      span: 6
    }
  }
  componentDidMount() {
    window.addEventListener('resize', () => this.reLayout())
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () => this.reLayout());
  }
  reLayout() {
    const parentDom = ReactDOM.findDOMNode(this).parentNode
    const width = parentDom.offsetWidth;
    if (width >= 992) {
      this.setState({span: 6 })
    } else if (width < 992 && width >= 768) {
      this.setState({span: 12 })
    } else if (width < 768) {
      this.setState({span: 24 })
    }
  }
  render() {
    const { options, span } = this.state;
    return (
      <div>
        {
          options.map(option => {
            return <NumberCard option={option} key={option.icon } span={span}/>
          })
        }
      </div>
    )
  }
}

export default HomePage
