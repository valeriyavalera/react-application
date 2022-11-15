import React from "react";
import { NavLink } from 'react-router-dom';
import './style.css';
import facebook from '../images/facebook.svg'
import email from '../images/email.png'
import instagram from '../images/instagram.svg'
import linkedin from '../images/linkedin.svg'
import twitter from '../images/twitter.svg'



function Navigation (){
    return(
        <nav className="sidebar">
            <div className="milton"> Milton </div>
            <hr></hr>
            <div className="text"> Denali is a simple responsive blog template.
                 Easily add new posts using the Editor or change layout and design using the Designer.
            </div>
            <hr></hr>
            <div className="pages">
                <div><NavLink to='/'>HOME</NavLink></div>
                <div><NavLink to='/about'>ABOUT</NavLink></div>
                <div><NavLink to='/contact'>CONTACT</NavLink></div>
            </div>
            <hr></hr>
            <div className="socials">
                <img className="fb" src={facebook}></img>
                <img className="inst" src={instagram}></img>
                <img className="tw" src={twitter}></img>
                <img className="in" src={linkedin}></img>
                <img className="post" src={email}></img>
            </div>
            

        </nav>
    )
}

export default Navigation;