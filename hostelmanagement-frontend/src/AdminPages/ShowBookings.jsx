import React from 'react';
import NavDisplay from '../NavBar/navbar';
import Axios from 'axios';
import FooterDisplay from '../HostelDisplay/footer';
class ShowBookings extends React.Component{
   constructor(props){
       super(props);
       this.state = {
            bookings : []
       }
   }
   componentDidMount(){
    Axios.get('http://desktop-neshcf6:8080/allbookings')
    .then(res=>{
        this.setState({bookings : res.data});
            console.log(res.data);
      
    })
   }
    render(){
        const idata = this.state.bookings.map((host) => (
            
            <div class="card">
            <div class="card-header">
              {host.hostelName}
            </div>
            <div class="card-body">
             
        <p>{"Booking Name " + host.userName}</p>
        <p>{"From Date : " + host.fromDate}</p>
        <p>{"To Date : " + host.toDate}</p>
         
            </div>
            <br/>
          </div>
          
        ));
       return(<div>
        <NavDisplay/>
        <div class="jumbotron">
                    <h1 class="display-4">HOLA!</h1>
                    <hr class="my-4" />
                    <p>All The Bookings Right Away !!</p>
                </div>
                {idata}
                <br>
                </br>
                <FooterDisplay/>
                </div>     
       );
   }
}

export default ShowBookings;