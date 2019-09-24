import React, { useState, useEffect } from 'react'

const answersArray = [
    'Camino',
    'Habla',
    'Comes'
]

const questionsArray = [
    'Conjugate Caminar to First Person Present',
    'Conjugate Hablar to Third Person Present',
    'Conjugate Comer to Second Person Present'
]

const AnswerForm = props => {
    const [streak, setStreak] = useState(0)
    const [currentQ, setCurrentQ] = useState(questionsArray[streak])
    const [answers, setAnswers] = useState({
        answerBar: ''
      })


    const addOne = e => {
        setStreak(streak + 1)
        setCurrentQ(questionsArray[streak + 1])
    }

    function checkAnswer(){
       if(answers.answerBar === answersArray[streak]){
            addOne()
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
      </div>
    )
}

export default AnswerForm