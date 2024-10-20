import React, { Component } from 'react'


export default class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password:""
        }
    }

   

  render() {
    return (
      <div className='sign-in-wrapper'>
        <div className="form">
            <div className="input-wrapper">
                <div className="">Email</div>
                <input className='input' type="text" placeholder='Enter Your Email' value={this.state.email} onChange={e=> this.setState({email:e.target.value})} />
            </div>
           <div className="input-wrapper">
                <div className="">Password</div>
                <input className='input' type="password" placeholder='Enter Password' value={this.state.password} onChange={e=> this.setState({password:e.target.value})}/>
           </div>
            <div className="btn" onClick={()=>this.props.signIn(this.state.email,this.state.password)}>Sign in</div>
        </div>
        </div>
    )
  }
}
