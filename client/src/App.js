import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import FormikLogin from './components/Login'
import FormikSignUp from './components/SignUp';
import Header from "./components/Header";




function App() {
  return (
    <div className="App">
      <Header />
     
      
      <Route exact path= "/" component={FormikLogin} />
      <Route path="/sign-up" component={FormikSignUp} />
      <Route path="/conjugator" component={Card} />
    </div>
  );
}

export default App;
