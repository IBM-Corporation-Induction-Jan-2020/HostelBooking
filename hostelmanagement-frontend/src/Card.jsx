import React from "react";
import axios from 'axios';
import './App.css';
class CardDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            hostels: []
        }
    }

    componentDidMount = () => {
        axios.get('http://desktop-neshcf6:8080/hostels')
            .then(res => {
                this.setState({
                    hostels: res.data
                })
            })

    }
    render() {
        const i = -1;
        const idata = this.state.hostels.map((host) => (
            
            <div class="card hostel-card ">
                <div class="card-deck">
                    <img className="card-img-top" src={host.imgUrl} alt="Card image cap" height="300px"/>
                    <div class="card-body">
                        <h5 class="card-title"><b>{host.hostelName}</b></h5>
                        <p class="card-text">{host.description}</p>
                        <a href={"/hosteldetails/" + host.hostelName} class="btn btn-primary">Explore</a>
                    </div>
                </div>
            </div>
            
        ));
        return (<div>
            {idata}

        </div>
        );

    }
}

export default CardDisplay;