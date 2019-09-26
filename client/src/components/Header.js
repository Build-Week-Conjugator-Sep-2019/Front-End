import React from "react"
import styled from "styled-components"
import GatorPic from "../assets/gator_3.jpg";

const HeaderDiv = styled.header`
    width: 100%;
    height: 7rem;
    background: white;
    position: fixed;
    top: 0;
    display: flex;
    align-items: center;
    box-shadow: 1px 1px 2px 1px black;
    border: 1px solid black;
    
`
const HeaderText = styled.p`
    font-size: 3rem;
    font-family: 'Be Vietnam', sans-serif;
`

const GatorLogo = styled.img`
    width: 125px;
    height: 75px;
    margin-left: 2rem;
    margin-right:2rem;
`


const Header = () => {
    return (
        <HeaderDiv>
            <GatorLogo src={GatorPic} alt="gator logo"/>
            <HeaderText>Conjugator.io</HeaderText>
        </HeaderDiv>
    )
}

export default Header;