import React, { useState, useEffect } from 'react'
import UIfx from "uifx"
import correctAudio from "../assets/correct.mp3"
import incorrectAudio from "../assets/incorrect.mp3"
import Charts from './Charts'
import Dictionary from './Dictionary'
import axios from 'axios'
import styled from "styled-components"
import '../../src/App.css'

const correct = new UIfx (
  correctAudio,
  {
    volume: 0.6
  }
)

const incorrect = new UIfx (
  incorrectAudio,
  {
    volume: 0.6,
    throttleMs: 300
  }
)

const CardAndChartDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const ChartDiv = styled.div`
  margin: 3rem 0 0 0;
`
const DictCon = styled.div`
  position: relative;
  margin: 5rem 10rem 0 0;
  height: 15vh;
`

const PCON = styled.p`
  font-size: 1.25rem;
`

const AnswerForm = props => {

    const [streak, setStreak] = useState(0)
    const [totalQs, setTotalQs] = useState(0)
    const [totalQsAnswered, setTotalQsAnswered] = useState(0)
    const [currentQ, setCurrentQ] = useState([])
    const [currentA, setCurrentA] = useState([])
    const [incorrectAnswers, setIncorrectAnswers] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [longestStreak, setLongestStreak] = useState(0)
    const [answers, setAnswers] = useState({
        answerBar: ''
      })

    const addOne = e => {
        setStreak(streak + 1)
        setTotalQs(totalQs + 1)
        setTotalQsAnswered(totalQsAnswered + 1)
    }

    function checkAnswer(){
        if(answers.answerBar === currentA){
            addOne()
            correct.play()
            setCorrectAnswers(correctAnswers + 1)
        } else {
            setStreak(0)
            incorrect.play()
            setIncorrectAnswers(incorrectAnswers + 1)
       }
    }

    function longStreak() {
      if (streak > longestStreak) {
        setLongestStreak(streak)
      }
    }

    useEffect(() => {
        axios
        .get(`https://conju.herokuapp.com/api/verbs`)
        .then(response => {
            console.log(response.data)
            const valueArray = Object.values(response.data[totalQs])
            console.log(valueArray)
            setCurrentQ(valueArray[1])
            setCurrentA(valueArray[2])
            if(valueArray[1] === 'abandonar') {
                setCurrentQ(`Conjugate ${valueArray[1]} to First Person Present`)
            } else if (valueArray[1] === 'abordar') {
                setCurrentQ(`Conjugate ${valueArray[1]} to First Person Present`)
            } else if (valueArray[1] === 'abrazar') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Second Person Present`)
            } else if (valueArray[1] === 'abrir') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Second Person Present`)
            } else if (valueArray[1] === 'aburrir') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Second Person Present`)
            } else if (valueArray[1] === 'acampar') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Second Person Present`)
            } else if (valueArray[1] === 'acercar') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Second Person Present`)
            } else if (valueArray[1] === 'acortar') {
                setCurrentQ(`Conjugate ${valueArray[1]} to First Person Present Plural`)
            } else if (valueArray[1] === 'adivinar') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Second Person Present`)
            } else if (valueArray[1] === 'admirar') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Third Person Present Plural`)
            } else if (valueArray[1] === 'admitir') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Third Person Present Plural`)
            } else if (valueArray[1] === 'adorar') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Third Person Present Plural`)
            } else if (valueArray[1] === 'adornar') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Third Person Present Plural`)
            } else if (valueArray[1] === 'advertir') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Third Person Present Plural`)
            } else if (valueArray[1] === 'afirmar') {
                setCurrentQ(`Conjugate ${valueArray[1]} to Third Person Present Plural`)
            }
        })
        .catch(error => {
            console.log(error)
        })

        longStreak();
    }, [streak])
    

    const handleChange = event => {
        setAnswers({[event.target.name]: event.target.value});
        // console.log(answers)
      }

      const handleSubmit = event => {
        event.preventDefault();
        setAnswers({answerBar: ''})
        // console.log(answers)
      }
    
    return (
      <CardAndChartDiv className='mainCon2'>
        <div>
            <form className='answerForm' onSubmit={event => handleSubmit(event)}>
                <label htmlFor='answerBar'>
                    Answer:
                </label>
                <input 
                type="text" 
                name="answerBar"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="off" 
                value={answers.answerBar}
                onChange={event => handleChange(event)}
                className='inputs' />
                <button className="LinkStyle2" onSubmit={() => handleSubmit()} onClick={checkAnswer}>Submit!</button>
            </form>
            <PCON>{currentQ}</PCON>
            <DictCon>
                <Dictionary className='inputs' />
            </DictCon>
        </div>
        <ChartDiv>
            <Charts totalQsAnswered={totalQsAnswered} incorrectAnswers={incorrectAnswers} correctAnswers={correctAnswers} currentStreak={streak} longestStreak={longestStreak} />
        </ChartDiv>
      </CardAndChartDiv>
    )
}

export default AnswerForm