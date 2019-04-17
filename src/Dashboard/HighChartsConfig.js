export default function (historical) {
  return {

    title: {
      text: 'Cryptocurrency Coin Chart'
    },

    yAxis: {
      title: {
        text: 'Price'
      }
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Months'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },

    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        },
        pointStart: 2010
      }
    },
    credits: {
      enabled: false
    },
    series: historical,

    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }

  }
}