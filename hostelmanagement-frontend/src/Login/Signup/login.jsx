import React from 'react';
import axios from 'axios'
import './loginandsignup.css';
import { Redirect } from 'react-router-dom';
import NavDisplay from '../../NavBar/navbar';

class Login extends React.Component{
    constructor(){
        super();
        this.state = {
            userName:"",
            password:"",
            isLogin: false
        }
    }
    handleUsername = (e)=>{
          this.setState({userName:e.target.value});
    }
    handlePassword = (e) =>{
        this.setState({password: e.target.value});
    }
    SubmitForm =(event)=>{
        const user={
            userName: this.state.userName,
            password: this.state.password
        }
        event.preventDefault();
        axios.post('http://desktop-neshcf6:8080/login',  user )
        .then(res=>{
          if(res.data === "Customer"){
              console.log(res.data);
              this.setState({ isLogin : true})
          }
        })
    }
    RedirectionOfPage=()=>{
        
        if(this.state.isLogin){
            return <Redirect to="/" />      
          }
          
    }
    render(){
       
        
        return(<div className = "imagee">
            <NavDisplay/>
            <div className="container">
                <header></header>
            <section>				
                <div id="container_demo" >
                    <a className="hiddenanchor" id="toregister"></a>
                    <div id="wrapper">
                        <div id="login" className="animate form">
                            <form autoComplete="on" onSubmit ={this.SubmitForm}> 
                                <h1>Log in</h1> 
                                <p> 
                                    <label htmlFor="username" className="uname" > Your email or username </label>
                                    <input id="username" name="userName" required="required" type="text" onChange = {this.handleUsername} placeholder="myusername or mymail@mail.com"/>
                                </p>
                                <p> 
                                    <label htmlFor="password" className="youpasswd"> Your password </label>
                                    <input id="password" name="password" required="required" type="password" placeholder="eg. X8df!90EO"  onChange= {this.handlePassword}/> 
                                </p>
                                <p className="keeplogin"> 
									<input type="checkbox" name="loginkeeping" id="loginkeeping" value="loginkeeping" /> 
									<label htmlFor="loginkeeping">Keep me logged in</label>
								</p>
                                <p className="login button"> 
                                    <input type="submit"  className="btn btn-primary" value="Login"  /> 
								</p>
                                <p className="change_link">
									Not a member yet ?
									<a href="/signup" className="to_register">Join us</a>
								</p>
                            </form>
                        </div>

                        
						
                    </div>
                </div>  
            </section>
        </div>
        {this.RedirectionOfPage()}
        </div>
        )
    }
}

export default Login;
