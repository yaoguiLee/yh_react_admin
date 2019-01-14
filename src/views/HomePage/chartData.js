export const lineOption = {
  title: {
    text: 'Yearly Sales'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Food', 'Clothes', 'Electronics']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
    borderColor: '#000'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Food',
      type: 'line',
      symbol: 'circle',
      smooth: true,
      symbolSize: [8, 8],
      itemStyle: {
        normal: {
          color:'#63EA90',
          lineStyle: {
            // type: 'dashed',
            color: '#63EA90'
          }
        }
      },
      data: [369, 392, 378, 300, 405, 410, 436, 488]
    },
    {
      name: 'Clothes',
      type: 'line',
      symbol: 'circle',
      smooth: true,
      symbolSize: [8, 8],
      itemStyle: {
        normal: {
          color:'#8FC9FB',
          lineStyle: {
            // type: 'dashed',
            color: '#8FC9FB'
          }
        }
      },
      data: [248, 360, 388, 375, 250, 370, 468, 492]
    },
    {
      name: 'Electronics',
      type: 'line',
      symbol: 'circle',
      smooth: true,
      symbolSize: [8, 8],
      itemStyle: {
        normal: {
          color:'#E33C35',
          lineStyle: {
            // type: 'dashed',
            color: '#E33C35'
          }
        }
      },
      data: [320, 363, 370, 349, 200, 280, 351, 458]
    }
  ]
}