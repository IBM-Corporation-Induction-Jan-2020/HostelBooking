import React from 'react'
import { Link } from 'react-router-dom';
import FooterDisplay from './HostelDisplay/footer';
import NavDisplay from './NavBar/navbar';

class DisplayHostelsKashmir extends React.Component{
    render() {
        return (
        <div>
          <NavDisplay/>
            <div class="jumbotron">
                <h1 class="display-4">Hostel in Kashmir</h1>
                <p class="lead">Gar Firdaus Bar-Rue Zamin Ast, Hami Asto, Hami Asto, Hami Ast !!!</p>
                <hr class="my-4" />
                <p>Please Select Your Hostel</p>
            </div>

            <div class = "container">
        <div class="card-deck">
        <div class="card">
          <img src="https://img.cdn.zostel.com/cache/_97b74bb92c4165138baa29409936b0be/003_1000x800.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">The Shelter Heritage Hostel Block</h5>
            <p class="card-text">The Shelter Heritage offer day tours for Kashmir valley and Multiple day treks like Great Lake Trek, Kolohic Glacier Trek, Tarsar Marsar lake Trek.</p>
          </div>
          <Link to="/hosteldetails"> 
          <button type="button" className="btn btn-outline-info">Explore</button>
          </Link>
          <br></br>
        <br></br>
        </div>
        <div class="card">
          <img src="https://img.cdn.zostel.com/cache/_8060a55d13923f98994f685361e03f4e/ZostelManali_Exterior_01_1000x800.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">House Boat Royal Lodge</h5>
            <p class="card-text">My houseboat is located in Dal lake it has beautiful view of the lake and lotus flowers</p>
          </div>
          <Link to="hosteldetailskashmirtwo">
          <button type="button" className="btn btn-outline-info">Explore</button>
          </Link>
          <br></br>
        <br></br>
        </div>
        <div class="card">
          <img src="https://img.cdn.zostel.com/cache/_2fd280855f2f4c6124d095b710cd4882/044_Exterior_2_WithOutTree_1000x800.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Zostel Srinagar</h5>
            <p class="card-text">Located in Nishat area at 5-minute walking distance from Dal lake, Zostel Srinagar sits peacefully in the middle of the pristine natural beauty of the Srinagar valley.</p>
          </div>
          <Link to="/hosteldetailskasmirthree">
          <button type="button" className="btn btn-outline-info">Explore</button>
          </Link>
          <br></br>
        <br></br>
        </div>
        
      </div>
      </div>
      <br></br>
        <br></br>
        <br></br>
        <FooterDisplay></FooterDisplay>
        </div>
        );
    }
}

export default DisplayHostelsKashmir;