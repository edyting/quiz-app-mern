import React, { Component } from 'react'
import Signin from './Signin';
import Signup from './signup';
import axios from "axios";
import "./Auth.css"

export default class Auth extends Component {
    constructor(props){
        super(props);
        this.state={
            tab:"signin"
        }
    }

    signIn = (email,password)=>{

    }

    signUp = (firstName,lastName,email,password) =>{

    }

    changeTab = ()=>{
        this.setState({
            tab: this.state.tab === "signup" ? "signin" : "signup"
        })
    }

  render() {
    let page = this.state.tab === "signin" ? <Signin signIn={this.signIn}/> : <Signup signUp={this.signUp}/>

    return (
      <div className='auth-wrapper'>
        {/* left */}
        <div className="left">
            {/* image */}
            <img src="" alt="" />
        </div>
        {/* right */}
        <div className="right">
            <div className="header">Quiz-App</div>
            <div className="sub-header">
                Welcome to Quiz-App
            </div>
            {page}
            <div className="new" onClick={this.changeTab}>{this.state.tab === "signin" ? "New to Quiz-app? sign up here" : "Already have an account? Sign In"}</div>
        </div>

      </div>
    )
  }
}
