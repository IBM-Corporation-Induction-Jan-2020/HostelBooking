import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './Home';
import RoutingHostels from './hostels-routing';
import HostelDetails from './HostelDisplay/HostelDetails';
import ShowBookings from './AdminPages/ShowBookings';


function App() {
  return (
    <RoutingHostels/>
  //   <HostelDetails />
  
  );
}

export default App;
