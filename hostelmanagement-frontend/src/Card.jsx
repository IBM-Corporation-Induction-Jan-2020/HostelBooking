import React from "react";
import axios from 'axios'
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
        const idata = this.state.hostels.map((host, i) => (
            
            <div class="card hostel-card">
                <div class="container card-deck contain">
                    
                        <img className="card-img-top" src={host.imgUrl} alt="Card image cap" height="300px" width="250px" />
                        <div class="card-body">
                            <h5 class="card-title">{host.hostelName}</h5>
                            <p class="card-text">{host.description}</p>
                            <a href={"/hosteldetails/" + i++} class="btn btn-primary">Explore</a>
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