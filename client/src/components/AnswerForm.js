import React, { useState, useEffect } from 'react'
import UIfx from "uifx"
import correctAudio from "../assets/correct.mp3"
import incorrectAudio from "../assets/incorrect.mp3"
import Charts from './Charts'
import Dictionary from './Dictionary'
import axios from 'axios'
import styled from "styled-components"

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
  margin-top: 230px;
`

// const answersArray = [
//     'Camino',
//     'Habla',
//     'Comes'
// ]

// const questionsArray = [
//     'Conjugate Caminar to First Person Present',
//     'Conjugate Hablar to Third Person Present',
//     'Conjugate Comer to Second Person Present'
// ]

// const dataArray = [
//     {'Conjugate Caminar to First Person Present': 'Camino'},
//     {'Conjugate Hablar to Third Person Present': 'Habla'},
//     {'Conjugate Comer to Second Person Present': 'Comes'},
//     {'Conjugate Beber to Third Person Present Plural': 'Beben'},
//     {'Conjugate Mirar to First Person Present': 'Miro'},
//     {'Conjugate Pagar to Third Person Present Plural': 'Pagan'},
//     {'Conjugate Parar to Second Person Present': 'Paras'},
//     {'Conjugate Ganar to First Person Present Plural': 'Ganamos'},
//     {'Conjugate Estar to Third Person Present Plural': 'Estan'},
//     {'Conjugate Tener to First Person Present': 'Tengo'},
//     {'Conjugate Ir to Second Person Present': 'Vas'}
// ]

const AnswerForm = props => {

    const [streak, setStreak] = useState(0)
    // const [currentIndex, setCurrentIndex] = useState(0)
    const [totalQs, setTotalQs] = useState(0)

    const [totalQsAnswered, setTotalQsAnswered] = useState(0)

    const [currentQ, setCurrentQ] = useState([])
    const [currentA, setCurrentA] = useState([])
    const [incorrectAnswers, setIncorrectAnswers] = useState(0)
    const [correctAnswers, setCorrectAnswers] = useState(0)
    const [longestStreak, setLongestStreak] = useState(0)
    // useState(Object.keys(dataArray[currentIndex]).join())
    const [answers, setAnswers] = useState({
        answerBar: ''
      })

    const addOne = e => {
        setStreak(streak + 1)
        // setCurrentIndex(currentIndex + 1)
        setTotalQs(totalQs + 1)
        setTotalQsAnswered(totalQsAnswered + 1)
        // setCurrentQ(Object.keys(dataArray[currentIndex + 1]).join())
        // if(currentIndex === 9){
        //     setCurrentQ(Object.keys(dataArray[0]).join())
        //     setCurrentIndex(0)
        // }
    }

    console.log(totalQsAnswered)

    function checkAnswer(){
        if(answers.answerBar === currentA){
            addOne()
            correct.play()
            setCorrectAnswers(correctAnswers + 1)
        }else {
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
      <CardAndChartDiv>
        <div>
            <form onSubmit={event => handleSubmit(event)}>
                <label htmlFor='answerBar'>
                    Answer:
                </label>
                <input 
                type="text" 
                name="answerBar" 
                value={answers.answerBar}
                onChange={event => handleChange(event)} />
                <button className="submit-answer" onSubmit={() => handleSubmit()} onClick={checkAnswer}>Submit!</button>
            </form>
            <p>{currentQ}</p>
                <Dictionary />
        </div>
        <ChartDiv>
            <Charts totalQsAnswered={totalQsAnswered} incorrectAnswers={incorrectAnswers} correctAnswers={correctAnswers} currentStreak={streak} longestStreak={longestStreak} />
        </ChartDiv>
      </CardAndChartDiv>
    )
}

export default AnswerForm