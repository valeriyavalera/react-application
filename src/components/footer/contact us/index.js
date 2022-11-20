import React from "react";
import './style.css';

function ContactUs() {
  return (
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
  );
}

export default ContactUs;

