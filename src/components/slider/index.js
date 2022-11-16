import React from "react";
import './style.css';
import Slider from 'react-material-ui-carousel';

function MySlider() {
   const colors = [
    'orange', 'pink', 'blue'
   ];
   return (
    <div className="slider">
     <Slider height={'443px'}>
      {
       colors.map(color => (<div
        style={{
         backgroundColor: color
        }}
        className="slider-elem"></div>
       ))
      }
     </Slider>
    </div>
   
  );
}

export default MySlider;