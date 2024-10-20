import React, { Component } from 'react'

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password:"",
            firstName:"",
            lastName:""
        }
    }


  render() {
    return (
        <div className='sign-in-wrapper'>
        <div className="form">

        <div className="input-wrapper">
                <div className="">FirstName</div>
                <input className='input' type="text" placeholder='Enter Your firstName' value={this.state.firstName} onChange={e=> this.setState({firstName:e.target.value})} />
            </div>

            <div className="input-wrapper">
                <div className="">LastName</div>
                <input className='input' type="text" placeholder='Enter Your lastName' value={this.state.lastName} onChange={e=> this.setState({lastName:e.target.value})} />
            </div>

            <div className="input-wrapper">
                <div className="">Email</div>
                <input className='input' type="text" placeholder='Enter Your Email' value={this.state.email} onChange={e=> this.setState({email:e.target.value})} />
            </div>
           <div className="input-wrapper">
                <div className="">Password</div>
                <input className='input' type="password" placeholder='Enter Password' value={this.state.password} onChange={e=> this.setState({password:e.target.value})}/>
           </div>
            <div className="btn" onClick={()=>this.props.signUp({...this.state})}>Sign Up</div>
        </div>
        </div>
    )
  }
}
