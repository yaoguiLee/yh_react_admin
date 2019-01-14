import React from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Col, Card, Icon } from 'antd';
import '../../styles/homePage.css'

const NumberCard = ({option, span, onEnter, onLeave }) => {
  return (
    <Col className="yh-card-item" span={span}>
      <div
        onMouseEnter={ () => onEnter() }
        onMouseLeave={ () => onLeave() }
      >
        <ReactCSSTransitionGroup
            transitionLeave={true}
            transitionEnterTimeout={2500}
            transitionLeaveTimeout={1500}
            transitionName="animated"
        >
          <Card hoverable className="yh_card_container">
              <Icon type={option.icon} style={{color: option.color}}
                className={`yh_card_icon animated ${ option.animatedType }`}
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

export default NumberCard;
