import React from "react";
import './style.css';
import FooterNavigation from "./footer navigation";
import LatestGallery from "./latest gallery";
import FromTwitter from "./from twitter";
import ContactUs from "./contact us";

function Footer() {
  return (
    <div className='footer'>
      <FooterNavigation/>
      <LatestGallery/>
      <FromTwitter/>
      <ContactUs/>
    </div>
   
  );
}

export default Footer;