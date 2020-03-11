import React, { Component } from "react"
import NavDisplay from "./NavBar/navbar"
import FooterDisplay from "./HostelDisplay/footer"
import Axios from "axios";

class SuccessPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hostels1: [],
            hostels2: [],
            hname: this.props.match.params.hname,
            user: this.props.match.params.username
        }
    }
    componentDidMount = () => {
        Axios.get('http://desktop-neshcf6:8080/hostels')
            .then(res => {
                this.setState({
                    hostels1: res.data

                })
            })
        Axios.get('http://desktop-neshcf6:8080/' + this.state.user + '/mybookings')
            .then(res => {
                this.setState({
                    hostels2: res.data

                })
            })
    }

    render() {
        let data = this.state.hostels1.filter((host) => host.hostelName === this.state.hname);
        const host = this.state.hostels2.filter((hos) => hos.hostelName === this.state.hname);
        console.log(data[0]?.hostelName);

        return (<div>
            <NavDisplay></NavDisplay>
            <div>
                <div class="jumbotron">
                    <h1 class="display-4">Booking Succesful</h1>
                    <hr class="my-4" />
                    <p>Thanks For Booking , Happy Stay!</p>
                </div>

                <div class="card" style={{ width: "24rem", height: "30rem", marginLeft: "500px" }}>
                    <img class="card-img-top" src={data[0]?.imgUrl} alt="Card image cap" />
                    <div class="card-body">
                        <h6 class="card-subtitle mb-2 text-muted">{host[0]?.userName}</h6>
                        <h5 class="card-title">{data[0]?.hostelName}</h5>
                        <p class="card-text">{data[0]?.contactName}</p>
                        <p class="card-text">{host[0]?.rent}</p>
                        <a href="/confirmed" class="card-link">Confirm</a>
                        <a href={"/canceled/" + this.state.user + "/" + this.state.hostelName} class="card-link">Cancel</a>
                    </div>
                </div>
                <br></br>
                <br></br>

                
            </div>
            <FooterDisplay />
        </div>
        )




    }
}

export default SuccessPage; 