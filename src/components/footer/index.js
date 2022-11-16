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

      </div>
      <div className="from_twitter">
        <h3>From Twitter</h3>

      </div>
      <div className="contact">
        <h3>Contact Us</h3>

      </div>
    </div>
   
  );
}

export default Footer;