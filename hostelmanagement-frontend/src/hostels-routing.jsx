import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import HomePage from "./Home";
import NavDisplay from "./NavBar/navbar";
import DisplayDestination from "./destinations";
import Login from "./Login/Signup/login";
import Signup from "./Login/Signup/signup";
import DisplayHostelsOoty from "./hostes-Ooty";
import DisplayHostelsKashmir from "./hostels-Kashmir";
import DisplayHostelsRameshwaram from "./hostels-Rameshwaram";
import HostelAdd from "./HostelAddition";
import Review from "./review";
import Booking from "./Booking/booking";
import AllHostelDetails from "./HostelDisplay/AllHostelDisplay";
import SuccessPage from "./SuccessPage";

class RoutingHostels extends React.Component {
  render() {
    return (<div>
      <Router>
        <Switch>

          <Route path="/displayDest">
            <DisplayDestination />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
           <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/hosteldetails/:id" component = {AllHostelDetails}>
            
          </Route>

          <Route path="/hosteladd">
            <HostelAdd />
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/success/:name" component = {SuccessPage}>
         
          </Route>
           <Route path="/booknow/:id"  component = {Booking}>
            </Route> 
          <Route path="">  
            <HomePage />
          </Route>
         

        </Switch>

      </Router>
    </div>);
  }
}

export default RoutingHostels;