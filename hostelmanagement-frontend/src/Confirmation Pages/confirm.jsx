import React from 'react';
import FooterDisplay from '../HostelDisplay/footer';
import NavDisplay from '../NavBar/navbar';
import Axios from 'axios';
import './oop-image.css';

class CancelledBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hostelname: this.props.match.params.hname,
      user: this.props.match.params.username
    }
  }

  componentDidMount() {
    const user = {
      hostelName: this.state.hostelname,
      userName: this.state.user
    }

    console.log(user)
    Axios.post('http://desktop-neshcf6:8080/' + this.state.user + '/' + this.state.hostelname + '/cancelbooking', user)
      .then(res => {
        this.setState({ status: res.data });
        console.log(res.data);

      })
  }
  render() {
    return (<div>

      <NavDisplay />
      <div class="jumbotron">
        <h1 class="display-4">Booking Sucessfully Cancelled</h1>
        <hr class="my-4" />
        <p>Sorry for inconvenience, please visit us again !!</p>
      </div>

      <div>
        <img class="card-img-top contain2" src="https://i.dlpng.com/static/png/5402123-oops-sticker-transparent-png-svg-vector-oops-png-512_512_preview.png" alt="Card image cap" height="700px" width="200px" />
        <h2>Your Booking Got Cancelled !!</h2>
      </div>

      <FooterDisplay />
    </div>
    );
  }
}
export default CancelledBooking;