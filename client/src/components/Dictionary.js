import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const PCON = styled.p`
    font-size: 2rem;
    margin: 0 3.5rem 1rem 0;
`

function Dictionary(props) {
    const [word, setWord] = useState([])
    const [searchWord, setSearchWord] = useState({
        searchBar: ''
      })
    const [translatedWord, setTranslatedWord] = useState('')

    useEffect(() => {
        axios
            .get(`https://dictionaryapi.com/api/v3/references/spanish/json/${translatedWord}?key=8d2afe52-bece-4d22-bc1a-a01f9564e2ab`)
            .then(response => {
                console.log(response.data[0])
                setWord(response.data[0].shortdef[0])
                // setWord(Object.values(response.data[0]))
            })
            .catch(response => {
                console.log(response.data)
            })
    }, [translatedWord])


    const handleChange = event => {
        setSearchWord({[event.target.name]: event.target.value})
        console.log(searchWord)
    }
    
    const translate = event => {
        event.preventDefault()
        setTranslatedWord(searchWord.searchBar)
        setSearchWord({searchBar: ''})

    }

    return(
        <div>
            <PCON>
                Translator
            </PCON>
            <form onSubmit={(event) => translate(event)}>
                <label htmlFor='searchBar'>
                    Word:
                </label>
                <input 
                type="text" 
                name="searchBar" 
                value={searchWord.searchBar}
                onChange={event => handleChange(event)}
                className='inputs' />
                <button className="LinkStyle2" >Submit!</button>
            </form>
            <PCON>
                {word}
            </PCON>
        </div>
    )
}

export default Dictionary