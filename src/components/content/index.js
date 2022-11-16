import React from "react";
import './style.css';
import Row1 from "./row1";
import Row2 from "./row2";

function Content() {
  return (
    <div className='content'>
        <Row1/>
        <hr></hr>
        <Row2/>
    </div>
   
  );
}

export default Content;