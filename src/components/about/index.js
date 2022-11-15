import React from "react";
import './style.css';
import photo1 from '../images/aboutimg.jpeg'

function About () {
 return (
    <div className="about">
        <div className="card">
            {/* <img className="image" src={photo1} ></img> */}
            <div className="content">
                <h2>About me</h2>
                <p>The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                <h4>Static and dynamic content editing</h4>
                <p>A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                <button >Get in touch</button>
            </div>
        </div>
    </div>
 );
}

export default About;