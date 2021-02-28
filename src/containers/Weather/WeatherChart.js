import React from 'react';

import { Line } from 'react-chartjs-2'

const data = {
  labels: [],
  datasets: [
    {
      label: '',
      data: [],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
}

const options = {
  scales: {
    xAxes: [
      {
        scaleLabel: {
            display: true,
            labelString:'Time',
            fontSize: 19
        },
        ticks: {
            fontSize: 15
        }
      },
    ],
  },
  yAxes: [
      {
          ticks: {
              fontSize: 20
          }
      }
  ]
}

const LineChart = (props) =>{
    data.datasets[0].data = props.arr;
    data.labels = props.time;
    data.datasets[0].label = props.label;
    return (
    <>
        <Line data={data} width={"1200px"} height={"300px"} options={options} />
    </>
    )
}

export default LineChart

