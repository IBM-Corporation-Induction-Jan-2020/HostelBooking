import React from 'react';
//import './navbar.css';
class NavDisplay extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light" style={{background:"#e3f2fd"}}>
  <a className="navbar-brand" href="/"><i class="fas fa-hotel fa-2x"></i></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a href="/displayDest" className="nav-link" >Locations</a>
      </li>
      <li classname="nav-item">
        <a href="/review" className="nav-link">Reviews</a>
      </li> 
     
    </ul>
  </div>
  <form className="form-inline">
  <ul className="navbar-nav">
    <li className="nav-item">
        <a className="nav-link mr-sm-2" href="/login" style={{align:"right"}}><i class="fas fa-sign-in-alt fa-2x"></i></a>
      </li>
      <li className="nav-item">
        <a className="nav-link my-2 my-sm-0" href="/signup" tabIndex="-1" ><i class="fas fa-user-plus fa-2x"></i></a>
      </li>
      
     </ul> 
  </form>
</nav>
        );
    }
}
export default NavDisplay;