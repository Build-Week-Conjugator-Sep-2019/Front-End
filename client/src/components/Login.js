import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withFormik, Form, Field } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";

import "../App.css";

const DivCon = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`;

const DivCon2 = styled.div`
  box-shadow: 1px 1px 5px 5px;
  width: 60%;
  height: 30rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
`;

const DivCon3 = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 0 20rem;
  height: 30vh;
`;

const Login = ({ status, handleSubmit, history, errors, touched }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status) {
      setUsers([...users, status]);
      history.push("/conjugator");
    }
  }, [status]);

  return (
    <DivCon>
      <DivCon2 className="mainCon">
        <DivCon3>
          <Form className="FormCon">
            <div className="fields">
              <Field
                className="FieldCon"
                type="text"
                name="email"
                placeholder="Email"
              />
              {touched.email && errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div className="fields">
              <Field
                className="FieldCon"
                type="password"
                name="password"
                placeholder="Password"
              />
              {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>
            <button onClick={handleSubmit} className="LinkStyle">
              Login
            </button>
          </Form>

          <Link className="LinkStyle" to="/sign-up">
            Sign Up!
          </Link>
        </DivCon3>
      </DivCon2>
    </DivCon>
  );
};

const FormikLogin = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password || ""
    };
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().required("You must put an email"),
    password: Yup.string().required("You must put a password")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post(`https://conju.herokuapp.com/api/auth/login`, values)
      .then(response => {
        setStatus(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    resetForm();
  }
})(Login);

export default FormikLogin;
