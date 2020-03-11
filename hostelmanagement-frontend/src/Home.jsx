import React from "react";
import NavDisplay from "./NavBar/navbar";
import CardDisplay from "./Card";
import FooterDisplay from "./HostelDisplay/footer";

class HomePage extends React.Component {
    render() {
        return (<div >
            <div className="navdisplay" >
                <NavDisplay />
            </div>
            <div className="carddisplay" >
                <CardDisplay />
            </div>
            <div className= "footerdiaply">
                <FooterDisplay/>
            </div>
        </div>
        );
    }
}

export default HomePage;
