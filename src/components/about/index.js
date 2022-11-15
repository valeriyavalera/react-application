import React from "react";
import './style.css';
import photo1 from '../images/aboutimg.png'

function About () {
 return (
    <div className="about">
        <div className="about_card">
            <img className="about_image" src={photo1} ></img>
            <div className="about_content">
                <h2>About me</h2>
                <p className="p_about">The rich text element allows you to create and format headings, paragraphs, blockquotes, images, and video all in one place instead of having to add and format them individually. Just double-click and easily create content.</p>
                <h4>Static and dynamic content editing</h4>
                <p className="p_about">A rich text element can be used with static or dynamic content. For static content, just drop it into any page and begin editing. For dynamic content, add a rich text field to any collection and then connect a rich text element to that field in the settings panel. Voila!</p>
                <button >Get in touch</button>
            </div>
        </div>
    </div>
 );
}

export default About;