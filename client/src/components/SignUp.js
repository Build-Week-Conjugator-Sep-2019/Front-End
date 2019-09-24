import React from 'react';
import { Form, Field, withFormik } from "formik";
import styled from "styled-components";

const SignUpTitle = styled.h1`
    font-size: 3rem;
    margin: 2rem 0;
`
const SignUpDiv = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`

const SignUpWrapper = styled.div`
    box-shadow: 1px 1px 5px 5px;
    width: 50%;
    height: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    background-color: white;
`

const FieldCon = styled.input`
    border: none;
    border-bottom: 4px solid #1b79e7;
    font-size: 3rem;
`

const FormCon = styled.form`

`

const ButtonStyle = styled.button`
    width: 50%;
    align-self: center;
    -moz-box-shadow:inset 0px 1px 0px 0px #97c4fe;
    -webkit-box-shadow:inset 0px 1px 0px 0px #97c4fe;
    box-shadow:inset 0px 1px 0px 0px #97c4fe;
    background:-webkit-gradient(linear, left top, left bottom, color-stop(0.05, #1b79e7), color-stop(1, #1e62d0));
    background:-moz-linear-gradient(top, #1b79e7 5%, #1e62d0 100%);
    background:-webkit-linear-gradient(top, #1b79e7 5%, #1e62d0 100%);
    background:-o-linear-gradient(top, #1b79e7 5%, #1e62d0 100%);
    background:-ms-linear-gradient(top, #1b79e7 5%, #1e62d0 100%);
    background:linear-gradient(to bottom, #1b79e7 5%, #1e62d0 100%);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#1b79e7', endColorstr='#1e62d0',GradientType=0);
    background-color: #1b79e7;
    -moz-border-radius:6px;
    -webkit-border-radius:6px;
    border-radius:6px;
    border:1px solid #337fed;
    display:inline-block;
    cursor:pointer;
    color:#ffffff;
    font-family:Arial;
    font-size:18px;
    font-weight:bold;
    padding:10px 74px;
    text-decoration:none;
    text-shadow:0px 1px 0px #1570cd;
`;

const SignUp = () => {
    
    return (
        <SignUpDiv>
            <SignUpWrapper>
                <FormCon>
                    <div>
                        <FieldCon type="text" name="user" placeholder="username" />
                    </div>

                    <div>
                        <FieldCon type="email" name="email" placeholder="email" />
                    </div>

                    <div>    
                        <FieldCon type="password" name="password" placeholder="password" />
                    </div>
                    <ButtonStyle type="submit">Submit</ButtonStyle>
                </FormCon>
            </SignUpWrapper>
        </SignUpDiv>
    )
};


const FormikSignUp = withFormik({
    mapPropsToValues({user, email, password}) {
        return {
            user: user || "",
            email: email || "",
            password: password || ""
    }
  }
})(SignUp);

export default FormikSignUp