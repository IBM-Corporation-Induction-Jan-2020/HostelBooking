import React from 'react'
import { Link } from 'react-router-dom';
import FooterDisplay from './HostelDisplay/footer';
import NavDisplay from './NavBar/navbar';
import axios from "axios";

class HostelCity extends React.Component{

    constructor(props){
        super(props);
        this.state={
          hostels: [],
          hcity : this.props.match.params.city,
          
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
        let data = this.state.hostels.filter((host)=> host.city === this.state.hcity);
        console.log(data);
        let hostel = data.map((host , i)=>(
           
            
                <div class="card hostel-card">
                    <div class="container card-deck contain">
                        
                            <img className="card-img-top" src={host?.imgUrl} alt="Card image cap" height="300px" width="250px" />
                            <div class="card-body">
                                <h5 class="card-title">{host?.hostelName}</h5>
                                <p class="card-text">{host?.description}</p>
                                <a href={"/hosteldetails/" + host.hostelName} class="btn btn-primary">Explore</a>
                            </div>
                        
                    </div>
                </div>
        ));
        return (
        <div>
          <NavDisplay/>
            <div class="jumbotron">
                <h1 class="display-4">Hostels</h1>
                <p class="lead">Gar Firdaus Bar-Rue Zamin Ast, Hami Asto, Hami Asto, Hami Ast !!!</p>
                <hr class="my-4" />
                <p>Please Select Your Hostel</p>
            </div>
              {hostel}
            <div class = "container">
  </div>
      <br></br>
        <br></br>
        <br></br>
        <FooterDisplay></FooterDisplay>
        </div>
        );
    }
}

export default HostelCity;