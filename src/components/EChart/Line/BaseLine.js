import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
// import 'echarts/lib/component/toolbox'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/tooltip'
class BaseLine extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       width: props.width
    };
  };
  
  initEchart = (id, option) => {
    const chart = echarts.init(document.getElementById(id));
    this.setOption(chart, option)
  }
  setOption = (chart, options) => {
    chart.setOption(options)
  }
  componentDidMount() {
    const { id, option } = this.props
    window.addEventListener('resize', () => this.reChart(echarts))
    this.initEchart(id, option)
  }
  componentWillUnmount() {
    const {id} = this.props
    window.removeEventListener('resize', () => this.reChart(echarts))
    const instance = echarts.getInstanceByDom(document.getElementById(id))
    instance.clear()
  }
  reChart(echarts) {
    const parentDom = ReactDOM.findDOMNode(this)
    const {id} = this.props
    const instance = echarts.getInstanceByDom(document.getElementById(id))
    instance.getDom().style.width = parentDom.offsetWidth
    instance.resize()
  }
  componentDidUpdate() {
    const { id, option } = this.props
    this.initEchart(id, option)
  }
  render() {
    const { id, height } = this.props;
    const { width } = this.state;
    return (
      <div id={id} style={{width: width, height: height}}></div>
    )
  }
}

export default BaseLine;
