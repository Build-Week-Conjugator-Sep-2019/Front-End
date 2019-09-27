import React, { useState } from 'react'
import styled from 'styled-components'


import AnswerForm from './AnswerForm'
import Dictionary from './Dictionary'

const DivCon = styled.div`
    box-shadow: 1px 1px 5px 5px;
    margin: 0 auto 15rem auto;
    width: 50%;
    height: 20rem;
    background: white;

`;

function Card(){


    return (
        <DivCon>
            <AnswerForm />
        </DivCon>
    )
}

export default Card