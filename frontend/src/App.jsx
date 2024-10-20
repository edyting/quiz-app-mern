import { useState } from 'react'
import './App.css'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Auth from './components/Auth/Auth';

class App extends React.Component {
  render(){
    return (
      <div className=''>
        <Router>
          <Switch>
            <Route path="/" component={Auth} />
             
            <Route path="/users" />
             
            <Route path=" *">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }


}

export default App
