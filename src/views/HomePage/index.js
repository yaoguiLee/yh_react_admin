import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Card } from 'antd';
import { withRouter } from 'react-router-dom';
import NumberCard from '../../components/NumberCard/index'
import BaseLine from '../../components/EChart/Line/BaseLine'
import { lineOption } from './chartData'

const ENTER_ANIMATED = 'bounceIn', LEAVE_ANIMATED = 'fadeIn';
const WIDTH_LEVEL_1 = 992, WIDTH_LEVEL_2 = 768;
const SPAN_LEVEL_1 = 6, SPAN_LEVEL_2 = 12, SPAN_LEVEL_3 = 24;
const SPAN_TWO_LEVEL_1 = 18, SPAN_TWO_LEVEL_2 = 24;
const chartOption = lineOption
@withRouter
class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      them: '',
      options: [
        { title: 'Online Review', number: 3264, color: '#DD5246', icon: 'pay-circle', animatedType: '' },
        { title: 'New Customers', number: 4688, color: '#4B8BF4', icon: 'team', animatedType: '' },
        { title: 'Active Projects', number: 7898, color: '#F797D6', icon: 'message', animatedType: '' },
        { title: 'Referrals', number: 7878, color: '#FFCD42', icon: 'shopping', animatedType: '' }
      ],
      spanOne: SPAN_LEVEL_1,
      spanTwo: SPAN_TWO_LEVEL_1

    }
  }
  componentDidMount() {
    this.reLayout()
    window.addEventListener('resize', () => this.reLayout())
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () => this.reLayout());
  }
  reLayout() {
    const parentDom = ReactDOM.findDOMNode(this).parentNode
    const width = parentDom.offsetWidth;
    if (width < WIDTH_LEVEL_1) {
      this.setState({ spanTwo: SPAN_TWO_LEVEL_2 })
    }
    if (width >= WIDTH_LEVEL_1) {
      this.setState({ spanOne: SPAN_LEVEL_1 })
    } else if (width < WIDTH_LEVEL_1 && width >= WIDTH_LEVEL_2) {
      this.setState({ spanOne: SPAN_LEVEL_2 })
    } else if (width < WIDTH_LEVEL_2) {
      this.setState({ spanOne: SPAN_LEVEL_3, spanTwo: SPAN_TWO_LEVEL_2 })
    }
  }
  mouseEnter = (index) => {
    var options = this.state.options
    options[index].animatedType = ENTER_ANIMATED
    this.setState({ options: options })
  }
  mouseLeave = (index) => {
    var options = this.state.options
    options[index].animatedType = LEAVE_ANIMATED
    this.setState({ options: options })
  }
  render() {
    const { options, spanOne, spanTwo } = this.state;
    return (
      <div>
        <Row gutter={24}>
          {
            options.map((option, index) => {
              return <NumberCard option={option} key={option.icon} span={spanOne} animatedType={option.animatedType}
                onEnter={() => this.mouseEnter(index)}
                onLeave={() => this.mouseLeave(index)}
              />
            })
          }
          <Col span={spanTwo}>
            <Card style={{ height: 456 }}>
              <BaseLine id={'chartLine'} width={'100%'} height={400} option={chartOption} />
            </Card>
          </Col>
          {/* <Col span={6}>
            <Row gutter={16}>
              <Col span={24}>
                <Card style={{ height: 228 }}>
                  2
              </Card>
              </Col>
              <Col span={24}>
                <Card style={{ height: 228 }}>
                  3
              </Card>
              </Col>
            </Row>
          </Col> */}
        </Row>
      </div>
    )
  }
}

export default HomePage
