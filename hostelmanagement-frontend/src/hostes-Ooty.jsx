import React from 'react'
import { Link } from 'react-router-dom';
import FooterDisplay from './HostelDisplay/footer';
import NavDisplay from './NavBar/navbar';


class DisplayHostelsOoty extends React.Component{
    render() {
        return (
        <div>
          <NavDisplay/>
            <div class="jumbotron">
                <h1 class="display-4">Hostels in Ooty</h1>
                <p class="lead">One's destination is never a place but a new way of seeing things.</p>
                <hr class="my-4" />
                <p>Please Choose Your Hostels ?</p>
            </div>

            <div class = "container">
        <div class="card-deck">
        <div class="card">
          <img src="https://img.cdn.zostel.com/cache/_5ec98ae267bce2b56fa38e1e9eab8a97/_MG_2243-HDR_1000x800.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Prabhu's Place</h5>
            <p class="card-text">A great ethinic Home built in the Mountains of Ooty. Come and stay with us to experince Happiness.</p>
          </div>
          <Link to="/hosteldetailsootyone">
          <button type="button" className="btn btn-outline-info">Explore</button>
          </Link>
          <br></br>
        <br></br>
        </div>
        <div class="card">
          <img src="https://img.cdn.zostel.com/cache/_803fe7f68ef2565efcc6e77b74613f37/029_Exterior_03_1000x800.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Aventura Ooty</h5>
            <p class="card-text">A place to put aside your Troubles and go on an adventure in the mountains of Ooty.</p>
          </div>
          <Link to="/hosteldetailsootytwo">
          <button type="button" className="btn btn-outline-info">Explore</button>
          </Link>
          <br></br>
        <br></br>
        </div>
        <div class="card">
          <img src="https://img.cdn.zostel.com/cache/_fb2acf07c41ee5502b8fa9464ca1895f/Entrance_1000x800.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Safa Valley</h5>
            <p class="card-text">Built in valley's of Ooty, with breath taking view and clean air.</p>
          </div>
          <Link to="/hosteldetailsootythree">
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
      <FooterDisplay/>
        </div>
        );
    }
}





export default DisplayHostelsOoty;