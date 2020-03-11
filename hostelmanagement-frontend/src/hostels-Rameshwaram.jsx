import React from 'react'
import { Link } from 'react-router-dom';
import FooterDisplay from './HostelDisplay/footer';
import NavDisplay from './NavBar/navbar';

class DisplayHostelsRameshwaram extends React.Component{
    render() {
        return (
        <div>
          <NavDisplay></NavDisplay>
            <div class="jumbotron jumbotron-fluid">
                <h1 class="display-4">Hostel in Rameshwaram</h1>
                <p class="lead">Rameshwaram has, Since Antiquity, been an important pilgrimage destination.</p>
                <hr class="my-4" />
                <p>Please Choose Your Hostel ?</p>
            </div>

            <div class = "container">
        <div class="card-deck">
        <div class="card">
          <img src="https://img.cdn.zostel.com/cache/_c05e85c8e0659119a191a91128abeac7/8BedDorm_2_DetailedShot1_1000x800.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Rameshwaram Grand</h5>
            <p class="card-text">A place near the feet of God.Come here to Gain spiritual freedom and happiness</p>
          </div>
          <Link to="/hosteldetailsrameshwaramone">
          <button type="button" className="btn btn-outline-info">Explore</button>
          </Link>
          <br></br>
        <br></br>
        </div>
        <div class="card">
          <img src="https://img.cdn.zostel.com/cache/_fe76fa4d7cff56ff94ebb8d14f920099/RoofTop_01_1000x800.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Sdim Golden Tower</h5>
            <p class="card-text">A place to rest and rejoice. Built near waterfalls. Includes all kinds of Fun activities</p>
          </div>
          <Link to="/hosteldetailsrameshwaramtwo">
          <button type="button" className="btn btn-outline-info">Explore</button>
          </Link>
          <br></br>
        <br></br>
        </div>
        <div class="card">
          <img src="https://img.cdn.zostel.com/cache/_f343eabe3df09665bb9f0293656abe2b/1st_floor07_1000x800.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Sunrise View</h5>
            <p class="card-text">Wake up to the beautiful view of Sun rising. Built on Mountain with Pleseant weather throughout the year.</p>
          </div>
          <Link to="/hosteldetailsrameshwaramthree">
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
      <FooterDisplay />
        </div>
        );
    }
}

export default DisplayHostelsRameshwaram;