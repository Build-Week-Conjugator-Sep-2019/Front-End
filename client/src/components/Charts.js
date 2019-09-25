import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import styled from 'styled-components'

import '../../src/App.css'

const DivCon = styled.div`
    background: white;
    border: 2px solid red;
`;



function Charts () {
    const [dataSet, setDataSet] = useState({
        data: {
            labels: ['1', '2', '3', '4', '5'],
            datasets: [
                {
                    label: 'Videos Made',
                    backgroundColor: 'rgba(255, 0, 255, 0.75)',
                    data: [4, 5, 1, 10, 32, 2, 12]
                },
                {
                    label: 'Subscriptions',
                    backgroundColor: 'rgba(0, 255, 0, 0.75)',
                    data: [14, 15, 21, 0, 12, 4, 2]
                }
            ]
        }
    })

    console.log(dataSet)

    return (
        <DivCon style={{ position: 'relative', width: 600, height: 350 }}>
            <h3>Chart Samples</h3>
            <Line
                options={{
                    responsive: true
                }}
                data={dataSet}
            />

        </DivCon>
    )
}

export default Charts