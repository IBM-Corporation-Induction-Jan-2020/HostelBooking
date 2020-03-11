import React from 'react';
import { Link } from 'react-router-dom';
import FooterDisplay from './HostelDisplay/footer';
import NavDisplay from './NavBar/navbar';

class DisplayDestination extends React.Component {

  constructor(props){
    super(props);

    this.state={
      city1:"Kashmir",
      city2:"Ooty",
      city3:"Rameswaram"
  }
  }

    render() {
      let data = this.state;
        return (
        <div>
          <NavDisplay/>
            <div class="jumbotron">
                <h1 class="display-4">HOLA!</h1>
                <p class="lead">Hostel Destinations</p>
                <hr class="my-4" />
                <p>We Are Gonna Show The Hostel Destinations Choose One!</p>
            </div>
        
        <div class = "container">
        <div class="card-deck">
        <div class="card">
          <img src="https://s.yimg.com/ny/api/res/1.2/sONDe79RpC8h6zDfOHecuQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-08/f05a0150-bf9a-11e9-889d-4965fab2ec1e" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Kashmir</h5>
            <p class="card-text">A valley between the Great Himalayan range and the Pir Panjal mountain range, Kashmir is a place of beautiful simplicity and pristine natural beauty.</p>
          </div>
          <a href={"/city/" + this.state.city1}  class="btn btn-info">Explore</a>
          
        </div>
        <div class="card">
          <img src="https://www.holidify.com/images/bgImages/OOTY.jpg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Ooty</h5>
            <p class="card-text">Even the most beautiful lines, the most effective words and the most impactful poems can’t do justice, when describing the beauty of this small hill station.</p>
          </div>
          <a href={"/city/" + this.state.city2} type="button" class="btn btn-info">Explore</a>
          
        </div>
        <div class="card">
          <img src="https://cdn1.goibibo.com/t_tg_fs/tamil-nadu-rameshwaram-149353085445-orijgp.jpg" class="card-img-top" alt="Card image cap" height = "230px" widht="250px"/>
          <div class="card-body">
            <h5 class="card-title">Rameshwaram</h5>
            <p class="card-text">Rameshwaram is also a popular pilgrimage destination. The town has special significance to Hindus as one of the holy Char Dham—the four sacred abodes associated with incarnations of Lord Vishnu.</p>
          </div>
          <a href={"/city/" + this.state.city3} type="button" class="btn btn-info">Explore</a>
          
        </div>
      </div>
      </div>
      <br></br>
          <br></br>
          <FooterDisplay/>
     </div> 
        );
    }
}
export default DisplayDestination;