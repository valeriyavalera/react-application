import React from "react";
import './style.css';
import Logo from "./logo";
import Navigation from "./navigation";

function Header() {
  return (
    <div className='Header'>
        <Logo/>
        <Navigation/>
    </div>
   
  );
}

export default Header;