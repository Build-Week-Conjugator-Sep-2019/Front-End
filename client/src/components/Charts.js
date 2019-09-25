import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'
import Chart from 'chart.js'

import '../../src/App.css'

const DivCon = styled.div`
    background: white;
`;

const data = {
    labels: [1, 2, 3],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };


function Charts (props) {
    const [dataSet, setDataSet] = useState()
    // console.log(props.streak)

    const data = {
        labels: [1, 2, 3, 4],
        datasets: [
          {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [props.streak, props.currentIndex, props.streak, props.currentIndex]
          }
        ]
      };

    return (
        <DivCon style={{ position: 'relative', width: 600, height: 350 }}>
            <h3>Consistency</h3>
            <Line
                // options={{
                //     responsive: true
                // }}
                data={data}
            />

        </DivCon>
    )
}

export default Charts

// import React from 'react';
// import {Pie} from 'react-chartjs-2';

// const data = {
// 	labels: [
// 		'Red',
// 		'Blue',
// 		'Yellow'
// 	],
// 	datasets: [{
// 		data: [300, 50, 100],
// 		backgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		],
// 		hoverBackgroundColor: [
// 		'#FF6384',
// 		'#36A2EB',
// 		'#FFCE56'
// 		]
// 	}]
// };

// export default React.createClass({
//   displayName: 'PieExample',

//   render() {
//     return (
//       <div>
//         <h2>Pie Example</h2>
//         <Pie data={data} />
//       </div>
//     );
//   }
// });
