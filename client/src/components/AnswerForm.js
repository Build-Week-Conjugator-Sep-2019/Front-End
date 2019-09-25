import React, { useState, useEffect } from 'react'
import UIfx from "uifx"
import correctAudio from "../assets/correct.mp3"
import incorrectAudio from "../assets/incorrect.mp3"
import Charts from './Charts'

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

const dataArray = [
    {'Conjugate Caminar to First Person Present': 'Camino'},
    {'Conjugate Hablar to Third Person Present': 'Habla'},
    {'Conjugate Comer to Second Person Present': 'Comes'}
]

const AnswerForm = props => {
    const [streak, setStreak] = useState(0)
    const [currentQ, setCurrentQ] = useState(Object.keys(dataArray[streak]).join())
    const [answers, setAnswers] = useState({
        answerBar: ''
      })

    const addOne = e => {
        setStreak(streak + 1)
        setCurrentQ(Object.keys(dataArray[streak + 1]).join())
    }

    function checkAnswer(){
       if(answers.answerBar === Object.values(dataArray[streak]).join()){
            addOne()
            correct.play()
       } else {
         incorrect.play()
       }
    }

    const handleChange = event => {
        setAnswers({[event.target.name]: event.target.value});
        console.log(answers)
      }

      const handleSubmit = event => {
        event.preventDefault();
        setAnswers({answerBar: ''})
        console.log(answers)
      }
    
    
    return (
        <div>
            {streak}  
            <form onSubmit={event => handleSubmit(event)}>
                <label htmlFor='answerBar'>
                    Answer:
                </label>
                <input 
                type="text" 
                name="answerBar" 
                value={answers.answerBar}
                onChange={event => handleChange(event)} />
                <button onSubmit={() => handleSubmit()} onClick={checkAnswer}>Submit!</button>
            </form>
            <p>{currentQ}</p>
            <Charts />
      </div>
    )
}

export default AnswerForm