import React from "react";
import './style.css';

function Footer() {
  return (
    <div className='footer'>
      <div className="footer_navigation">
        <h3>Footer Navigation</h3>
        <div>Home Page</div>
        <div>Our Services</div>
        <div>Meet the Team</div>
        <div>Blog</div>
        <div>Contact Us</div>
        <div>Gallery</div>
        <div>Portfolio</div>
        <div>Online Shop</div>
      </div>

      <div className="gallery">
        <h3>Latest Gallery</h3>
        <div className="container_gallery">
          <div className="graybox2"></div>
          <div className="graybox2"></div>
          <div className="graybox2"></div>
          <div className="graybox2"></div>
          <div className="graybox2"></div>
          <div className="graybox2"></div>
          <div className="graybox2"></div>
          <div className="graybox2"></div>
          <div className="graybox2"></div>
        </div>
      </div>

      <div className="from_twitter">
        <h3>From Twitter</h3>
        <div className="text_fromtwitter underline">
         @<span className="span_name">name</span>  RT  @<span className="span_name">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<span className="span_name smallertext"> about 9 hours ago</span> 
        </div>
        <div className="text_fromtwitter underline">
         @<span className="span_name">name</span>  RT @<span className="span_name">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<span className="span_name smallertext "> about 9 hours ago</span> 
        </div>
        <div className="text_fromtwitter underline">
         @<span className="span_name">name</span>  RT @<span className="span_name">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<span className="span_name smallertext"> about 9 hours ago</span> 
        </div>
        <div className="text_fromtwitter ">
         @<span className="span_name">name</span>  RT @<span className="span_name">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<span className="span_name smallertext "> about 9 hours ago</span> 
        </div>
        

      </div>
      <div className="contact">
        <h3>Contact Us</h3>
        <label for="smaller1">Name *</label><br></br>
        <input id="smaller1" type="text" ></input><br></br>
        <label for="smaller2">Email *</label><br></br>
        <input id="smaller2" type="text"></input><br></br>
        <input id="bigger" type="text"></input><br></br>
        <button className="contact_btn_orange">SUBMIT</button>
        <button className="contact_btn_gray">RESET</button>
        

      </div>
    </div>
   
  );
}

export default Footer;