import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import Card from './components/Card'
// import Navigation from './components/Navigation'
import FormikLogin from './components/Login'
import FormikSignUp from './components/SignUp';




function App() {
  return (
    <div className="App">
      {/* <Navigation /> */}
      <Card />
      
      <Route exact path= "/" component={FormikLogin} />
      <Route path="/sign-up" component={FormikSignUp} />
    </div>
  );
}

export default App;
