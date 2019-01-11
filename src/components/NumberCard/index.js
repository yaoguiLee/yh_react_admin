import React from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Col, Card, Icon } from 'antd';
import '../../styles/homePage.css'

class NumberCard extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      animatedType: 'fadeIn'
    }
  }
  render() {
    const { option } = this.props
    return (
      <Col className="gutter-row" span={6}>
        <div onMouseEnter={() => { this.setState({ animatedType: 'bounceIn' })}}
          onMouseLeave={() => { this.setState({ animatedType: 'fadeIn' })}}
        >
          <ReactCSSTransitionGroup
              transitionLeave={true}
              transitionEnterTimeout={2500}
              transitionLeaveTimeout={1500}
              transitionName="animated"
          >
            <Card hoverable className="yh_card_container">
                <Icon type={option.icon} style={{color: option.color}}
                  className={`yh_card_icon animated ${this.state.animatedType}`}
                />
              <div className="yh_card_title">
                <p>{option.title}</p>
                <p className="yh_card_number">{option.number}</p>
              </div>
              <div className="yh_card_right"></div>
            </Card>
          </ReactCSSTransitionGroup>
        </div>
      </Col>
    )
  }
}

export default NumberCard;
