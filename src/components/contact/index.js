import React from "react";
import './style.css';

function Contact () {
 return (
    <div className="contact">
       <div className="contact_card">
            <h2 className="contact_h2">Get in touch</h2>
            <p className="contact_p">Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p className="contact_p">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
            <label for="smaller1">Name</label><br></br>
            <input id="smaller1" type="text" placeholder="Enter your name"></input><br></br>
            <label for="smaller2">Email Adress</label><br></br>
            <input id="smaller2" type="text" placeholder="Enter your email address"></input><br></br>
            <label for="bigger">Message</label><br></br>
            <input id="bigger" type="text" placeholder="Enter your mesage"></input><br></br>
            <button className="contact_btn">Submit</button>


       </div>
    </div>
 );
}

export default Contact;