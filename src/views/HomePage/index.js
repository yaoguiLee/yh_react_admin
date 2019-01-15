import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import { withRouter } from 'react-router-dom';
import { pngName } from '../../tools/weather'
import {
  NumberCard,
  Weather
} from './components'
import BaseLine from '../../components/EChart/Line/BaseLine'
import { lineOption } from './chartData'
import '../../styles/homePage.css'
import axios from 'axios';
const ENTER_ANIMATED = 'bounceIn', LEAVE_ANIMATED = 'fadeIn';
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
      weatherInfo: {}
    }
  }
  componentDidMount() {
    axios.get('https://restapi.amap.com/v3/weather/weatherInfo?city=440300&key=de1b730dc92140ea95eca45189375535').then(rs => {
      if (rs.data.infocode === '10000') {
        const result = rs.data.lives[0]
        const png = pngName[result.weather]
        result.png = png ? require('../../assets/weather/'+ png + '.png') : '';
        this.setState({weatherInfo: result})
      }
    })
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
    const { options, weatherInfo  } = this.state;
    return (
      <div>
        <Row gutter={24}>
          {
            options.map((option, index) => {
              return <NumberCard option={option} key={option.icon} animatedType={option.animatedType}
                onEnter={() => this.mouseEnter(index)}
                onLeave={() => this.mouseLeave(index)}
              />
            })
          }
          <Col lg={18} md={24}>
            <Card style={{ marginBottom: 8 }}>
              <BaseLine id={'chartLine'} width={'100%'} height={400} option={chartOption} />
            </Card>
          </Col>
          <Col lg={6} md={24}>
            <Row gutter={16}>
              <Col lg={24} md={12}>
                <Card className="yh_card_weather" 
                  bodyStyle={{height: 220, padding: 0}}
                >
                  <Weather {...weatherInfo}/>
              </Card>
              </Col>
              <Col lg={24} md={12}>
                <Card className="yh_card_quote"
                  bodyStyle={{height: 220, padding: 0}}
                >
              </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

export default HomePage
