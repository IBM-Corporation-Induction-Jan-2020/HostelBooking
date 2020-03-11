import React from 'react';
import axios from 'axios'
import './loginandsignup.css';
import NavDisplay from '../../NavBar/navbar';
import { Redirect } from 'react-router-dom';

class Signup extends React.Component {

    constructor() {
        super()
        this.state = {
            userName: '',
            email: '',
            password: '',
            type: 'Customer',
            isSuccess: false
        }
    }

        handleNameChange = (event) => {
            this.setState({ userName: event.target.value });
        }
        handleEmailChange = (event) => {
            this.setState({ email: event.target.value });
        }
        handlePasswordChange = (event) => {
            this.setState({ password: event.target.value });
        }
        handleTypeChange = (event) => {
            this.setState({ type: event.target.value });
        }

        handleSubmit = (event) => {
            const user = {
              type:this.state.type,
              userName: this.state.userName,
              email: this.state.email,
              password: this.state.password
            }

            event.preventDefault();
            console.log(user)
            axios.post('http://desktop-neshcf6:8080/adduser/',  user )
              .then(res=>{
                  this.setState({ isSuccess : res.data});
                console.log(res.data);
                
              })
          }
          redirectPage = ()=>{
              if(this.state.type === "Customer" && this.state.isSuccess === "success"){
                  return <Redirect to="/"></Redirect>
              }
          }

    render() {

        return (<div className="imagee">
            <NavDisplay />
            <div className="container">
                <header>
                    {/* <h1>Login and Registration Form</h1> */}
                </header>
                <section>
                    <div id="container_demo" >
                        <a className="hiddenanchor" id="toregister"></a>
                        <a className="hiddenanchor" id="tologin"></a>
                        <div id="wrapper">
                            <div id="register">
                                <form onSubmit={this.handleSubmit} autoComplete="on">
                                    <h1> Sign up </h1>
                                    <p>
                                        <label htmlFor="usernamesignup" className="uname" >Your username</label>
                                        <input id="usernamesignup" name="userName" required="required" type="text" placeholder="mysuperusername690" onChange={this.handleNameChange} />
                                    </p>
                                    <p>
                                        <label htmlFor="emailsignup" className="youmail"  > Your email</label>
                                        <input id="emailsignup" name="email" required="required" type="email" placeholder="mysupermail@mail.com" onChange={this.handleEmailChange} />
                                    </p>
                                    <p>
                                        <label htmlFor="passwordsignup" className="youpasswd" >Your password </label>
                                        <input id="passwordsignup" name="password" required="required" type="password" placeholder="eg. X8df!90EO" onChange={this.handlePasswordChange} />
                                    </p>
                                    <p>
                                        <label htmlFor="passwordsignup_confirm" className="youpasswd" >Please confirm your password </label>
                                        <input id="passwordsignup_confirm" name="passwordsignup_confirm" required="required" type="password" placeholder="eg. X8df!90EO" />
                                    </p>
                                    <label htmlFor="usertype" className="uname" ><span style={{ paddingRight: 5 }}>I am a </span></label>
                                    <select id="type" onChange={this.handleTypeChange}>
                                        <option default value="Customer">Customer</option>
                                        <option value="Hostel Owner">Hostel Owner</option>
                                    </select>
                                    <p className="signin button">
                                        <input type="submit" className="btn btn-primary" value="Sign up" />
                                    </p>
                                    <p className="change_link">
                                        Already a member ?
									<a href="/login" className="to_register"> Go and log in </a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {this.redirectPage()}
        </div>
        )
    }
}

export default Signup;