import React, { useState } from 'react'
import { Pie } from 'react-chartjs-2'
import styled from 'styled-components'

import '../../src/App.css'

const BottomDiv = styled.div`
  background: white;
  width: 100%;
  height: 20rem;
  box-shadow: 1px 1px 5px 5px;
  display:flex;
  justify-content: space-evenly;
`

const StreakDiv = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  width: 40%;
`

const StreakPar = styled.p`
  font-size: 1.2rem;
  margin: .8rem auto;
  
`

const ChartDiv = styled.div`
  width: 60%;
`

const StreakNum = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`

function Charts ({ incorrectAnswers, correctAnswers, currentStreak, longestStreak }) {

const data = {
	labels: [
		'Correct',
    'Incorrect'
	],
	datasets: [{
    data: [ correctAnswers, incorrectAnswers ],
    options: {
      legend: {
        fontColor: 'white'
      }
    },
		backgroundColor: [
    '#36A2EB',
    '#e7891b'
		],
		hoverBackgroundColor: [
    '#00BFFF',
    '#f3c58e'
		]
	}]
};

  return (
    <BottomDiv>
      <StreakDiv>
        <StreakPar>Your current streak is <StreakNum>{currentStreak}</StreakNum></StreakPar>
        <StreakPar>Your longest streak is <StreakNum>{longestStreak}</StreakNum></StreakPar>
      </StreakDiv>
      <ChartDiv>
      <h2>Correct vs. Incorrect Answers</h2>
      <Pie classname="chart" data={data} />
      </ChartDiv>
    </BottomDiv>
  );
};



export default Charts