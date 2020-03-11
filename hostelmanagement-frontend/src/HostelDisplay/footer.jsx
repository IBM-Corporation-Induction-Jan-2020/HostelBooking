import React from "react";
import "./all.css";
class FooterDisplay extends React.Component{
   render(){
       return(<div>
{/* <footer className="page-footer font-small unique-color-dark">

<div style={{background:"#6351ce"}}>
  <div className="container">

    <div className="row py-4 d-flex align-items-center">

      <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
        <h6 className="mb-0">Get connected with us on social networks!</h6>
      </div>
      
      <div className="col-md-6 col-lg-7 text-center text-md-right">

        <a className="fb-ic">
          <i className="fab fa-facebook-f white-text mr-4"> </i>
        </a>
        <a className="tw-ic">
          <i className="fab fa-twitter white-text mr-4"> </i>
        </a>
        <a className="gplus-ic">
          <i className="fab fa-google-plus-g white-text mr-4"> </i>
        </a>
        <a className="li-ic">
          <i className="fab fa-linkedin-in white-text mr-4"> </i>
        </a>
        <a className="ins-ic">
          <i className="fab fa-instagram white-text"> </i>
        </a>

      </div>
   
    </div>
   
  </div>
</div>

<div className="container text-center text-md-left mt-5">

  <div className="row mt-3">

    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

      <h6 className="text-uppercase font-weight-bold">Company name</h6>
      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
      <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
        consectetur
        adipisicing elit.</p>

    </div>
    
    
    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

      <h6 className="text-uppercase font-weight-bold">Contact</h6>
      <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "60px"}}/>
      <p>
        <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
      <p>
        <i className="fas fa-envelope mr-3"></i> info@example.com</p>
      <p>
        <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
      <p>
        <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>

    </div>
   
  </div>
 
</div>

<div className="footer-copyright text-center py-3">© 2020 Copyright:
  <a href="#">LuxHostels.com</a>
</div>

</footer> */}
<footer class="page-footer font-small cyan darken-3">

  <div class="container">

    <div class="row">

      <div class="col-md-12 py-5">
        <div class="mb-5 flex-center">

        <a class="fb-ic" href = "https://www.facebook.com">
            <i class="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a class="tw-ic" href = "https://www.twitter.com">
            <i class="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a class="gplus-ic" href = "https://www.google.com">
            <i class="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a class="li-ic" href = "https://www.linkedin.com">
            <i class="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a class="ins-ic" href = "https://www.instagram.com">
            <i class="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
          </a>
          <a class="pin-ic" href = "https://www.pinterest.com"> 
            <i class="fab fa-pinterest fa-lg white-text fa-2x"> </i>
          </a>
        </div>
      </div>

    </div>

  </div>
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#"> LuxHostels.com</a>
  </div>
 
</footer>
</div>
       );
   }

}

export default FooterDisplay;