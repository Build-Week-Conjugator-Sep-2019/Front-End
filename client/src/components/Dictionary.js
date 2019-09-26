import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Dictionary(props) {
    const [word, setWord] = useState([])
    const [searchWord, setSearchWord] = useState({
        searchBar: ''
      })

    const newWord = searchWord.searchBar

    useEffect(() => {
        axios
            .get(`https://dictionaryapi.com/api/v3/references/spanish/json/${newWord}?key=8d2afe52-bece-4d22-bc1a-a01f9564e2ab`)
            .then(response => {
                console.log(response.data[0].meta.id)
                setWord(response.data[0].shortdef[0])
                // setWord(Object.values(response.data[0]))
            })
            .catch(response => {
                console.log(response.data)
            })
    }, [newWord])

    const handleChange = event => {
        setSearchWord({[event.target.name]: event.target.value});
        console.log(searchWord)
      }

      const handleSubmit = event => {
        event.preventDefault();
        setSearchWord({searchBar: ''})
        console.log(searchWord)
      }

    return(
        <div>
            Dictionary
            <form onSubmit={event => handleSubmit(event)}>
                <label htmlFor='searchBar'>
                    Word:
                </label>
                <input 
                type="text" 
                name="searchBar" 
                value={searchWord.searchBar}
                onChange={event => handleChange(event)} />
                <button className="submit-answer" onSubmit={() => handleSubmit()} >Submit!</button>
            </form>
            {word}
        </div>
    )
}

export default Dictionary