import React from 'react'
import { Component } from 'react';
import NavDisplay from '../NavBar/navbar';

class BookingConfirmation extends Component{
    render(){
        return(
           
        <div>
            <NavDisplay/>
             <div class="jumbotron">
                <h1 class="display-4">Booking Confirmation</h1>
                <p class="lead">Your Booking Has Been Confirmed</p>
                <hr class="my-4" />
                <p>Happy Stay !!</p>
            </div>

            <div class="alert alert-success" role="alert">
            <h4 class="alert-heading">Well done!</h4>
            <p>You have Successfully taken time out of your busy schedule to take a vacation. Enjoy Your Stay</p>
            <hr/>
            <p class="mb-0"></p>
            </div>
            
        </div>
        )
    }
}
export default BookingConfirmation;