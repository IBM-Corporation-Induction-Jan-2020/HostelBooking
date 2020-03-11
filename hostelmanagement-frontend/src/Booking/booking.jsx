import React from "react";
import './booking.css'
import axios from 'axios'
import moment from 'moment'
import NavDisplay from "../NavBar/navbar";
import { Redirect } from "react-router-dom";

class Booking extends React.Component
{

    constructor(props){
        super(props);

        this.state={
        arrival: new moment(),
        departure: new moment(),
        userName:"",
        stayDays:0,
        persons:1,
        hostelName : this.props.match.params.id,
        status : 0
        }
    }

    handleNameChange = (event) => {
        this.setState({ userName: event.target.value });
    }
    handleArrivalDateChange = (event) => {
        this.setState({ arrival: event.target.value });
    }
    handleDepartureDateChange = (event) => {
        this.setState({ departure: event.target.value });
    }
    handleStayDaysChange = (event) => {
        this.setState({ stayDays: event.target.value });
    }
    handlePersonsChange = (event) => {
        this.setState({ persons: event.target.value });
    }
    SubmitForm =(event) =>{
        const user = {
            bedsBooked:this.state.persons,
            rent:5000,
            hostelName: this.state.hostelName,
            totalDays: moment(this.state.departure).diff(moment(this.state.arrival),'days'),
            userName: this.state.userName,
            fromDate: this.state.arrival,
            toDate: this.state.departure,

          }
          event.preventDefault();
          console.log(user)
          axios.post('http://desktop-neshcf6:8080/booking',  user )
            .then(res=>{
                this.setState({status : res.data});
              console.log(res.data);
              
            })
        }
    RedirectionOfPage=()=>{
        if(this.state.status !=0){
            return <Redirect to ={"/success/" + this.state.hostelName + "/"+this.state.userName}></Redirect>
        }
    }
     
    render() {
        // console.log(moment(this.state.departure).diff(moment(this.state.arrival),'days'))
        return(<div className = "imagee">
            <NavDisplay/>
        <div className="container">
            <header></header>
        <section>				
            <div id="container_demo" >
                <a className="hiddenanchor" id="toregister"></a>
                <div id="wrapper">
                    <div id="booking" className="animate form">
                        <form autoComplete="on" > 
                            <h1> Book Now </h1> 
                            <p> 
                                <label htmlFor="cname" className="cname" > Name </label>
                                <input id="name" name="name" required="required" type="text" placeholder = "eg. Rahul" onChange={this.handleNameChange}/>
                            </p>
                            <p> 
                                <label htmlFor="arrivaldate" className="adate" > Arrival Date </label>
                                <input id="arrivaldate" name="arrivaldate" required="required" type="date" onChange={this.handleArrivalDateChange}/>
                            </p>
                            <p> 
                                <label htmlFor="departuredate" className="ddate" > Departure Date </label>
                                <input id="departuredate" name="departuredate" required="required" type="date" onChange={this.handleDepartureDateChange}/>
                            </p>
                           
                            <p> 
                                <label htmlFor="persons" className="youpasswd"> No. of Persons </label>
                                <input id="pax" name="persons" required="required" type="text" placeholder="eg. 1-2" onChange={this.handlePersonsChange}/> 
                            </p>
                            
                            <p className="login button"> 
                                <a onClick={this.SubmitForm} href={"/success/" + this.state.hostelName+ "/" + this.state.userName} className="btn btn-primary" style={{color:"white"}}>Book Now</a> 
                            </p>
                            <p className="change_link">
                                Not Logged in yet ?
                                <a href="/login" className="to_register">login Now</a>
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
export default Booking