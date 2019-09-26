import React, { useState } from 'react'
import styled from 'styled-components'


import AnswerForm from './AnswerForm'
import Dictionary from './Dictionary';
// import Questions from './Questions'

const DivCon = styled.div`
    box-shadow: 1px 1px 5px 5px;
    margin: auto;
    width: 50%;
    height: 20rem;
`;



function Card(){


    return (
        <DivCon>
            <AnswerForm />
        </DivCon>
    )
}

export default Card