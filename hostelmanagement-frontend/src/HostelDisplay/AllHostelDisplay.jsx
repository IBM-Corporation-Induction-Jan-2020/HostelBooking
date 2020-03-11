
import React from "react";
import "./hostel.css";
import "./all.css";
import FooterDisplay from "./footer";
import NavDisplay from "../NavBar/navbar";
import { Link } from "react-router-dom";
import axios from "axios";
class AllHostelDetails extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      hostels: [],
      hostel:{
          hostelName:"",
        description:"",
        imgUrl:""
      },
      name : this.props.match.params.id,
      
    }
  }

  componentDidMount= () =>{
    axios.get('http://desktop-neshcf6:8080/hostels')
    .then(res=>{
        this.setState({
            hostels : res.data
        
        })
    }) 
   
     
}    
       
    render() {
         let data = this.state.hostels.filter((host) => host.hostelName===this.state.name);  // this ? is null check for us 
         
   return (
    <div>
           <NavDisplay/>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
    <h1 class="display-4">{data[0]?.hostelName}</h1>
    <p class="lead">{data[0]?.description}</p>
                </div>
            </div>
            <div class="container-fluid">
    <div class="row">
        <div class="col-12 mt-3">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="" src={data[0]?.imgUrl} alt="Card image cap" height = "440px" widht="330px"/>
                    </div>
                    <div class="card-body">
    <h4 class="card-title">{data[0]?.hostelName}</h4>
                        <p class="card-text">
                        <dl class="row">
  <dt class="col-sm-3">Price</dt>
   <dd class="col-sm-9">{data[0]?.pricePerBed + " INR"}</dd>

  <dt class="col-sm-3">Max Capacity</dt>
  <dd class="col-sm-9">
    <p>{data[0]?.bedsAvailable +" Persons Accomodation"}</p>
    <p>This is a Mix Dorm.</p>
  </dd>

  <dt class="col-sm-12">Unit Animities</dt>


  <dt class="col-sm-3 text-truncate"><h1><i class="fas fa-water fa-2x"></i></h1></dt>
  <dd class="col-sm-9">Hot Water Avilable.</dd>

  <dt class="col-sm-3"><i class="fas fa-wifi fa-2x"></i>

</dt>
  <dd class="col-sm-9">Free Wifi
   </dd>
   <dt class="col-sm-3"><i class="fas fa-shower fa-2x"></i>

</dt>
  <dd class="col-sm-9">Shower
   </dd>
   <dt class="col-sm-3"><i class="fas fa-egg fa-2x"></i>

</dt>
  <dd class="col-sm-9">Free Breakfast
   </dd>
   <dt class="col-sm-3"><i class="fas fa-temperature-low fa-2x"></i>

</dt>
  <dd class="col-sm-9">Air Conditioning
   </dd>
   <dt class="col-sm-3"><i class="fas fa-cocktail fa-2x"></i>

</dt>
  <dd class="col-sm-9">Common Hangout Area
   </dd>

   <dt class="col-sm-3"><i class="fas fa-concierge-bell fa-2x"></i>

</dt>
  <dd class="col-sm-9">24/7 Reception
   </dd>

   <dt class="col-sm-3"><i class="fas fa-coffee fa-2x"></i>

</dt>
  <dd class="col-sm-9">Cafe
   </dd>
    
   <dt class="col-sm-3"><i class="fas fa-luggage-cart fa-2x"></i>

</dt>
  <dd class="col-sm-9">Storage Facility
   </dd>

   <dt class="col-sm-3"><i class="far fa-credit-card fa-2x"></i>

</dt>
  <dd class="col-sm-9">Card Payment Accepted
   </dd>
</dl>
                          
    </p>
                    </div>
                </div>
                 <div class="wrap"> 
                                   {/* <Link to="/booknow">  */} 
                <a href={"/booknow/" + data[0]?.hostelName} type="button" class="btn btn-info">Book Now</a>
                <a href={"/booknow/" + data[0]?.hostelName} type="button" class="btn btn-info">Add Review</a>
                  {/* </Link> */}
                  </div>  
             </div> 
 </div>
     </div>
 </div>
 <FooterDisplay/>  

</div>
        );
    }
}

export default AllHostelDetails;