import React from "react";
import './style.css';

function FromTwitter() {
  return (
    <div className="from_twitter">
        <h3>From Twitter</h3>
        <div className="text_fromtwitter underline">
         @<span className="span_name">name</span>  RT  @<span className="span_name">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<span className="span_name smallertext"> about 9 hours ago</span> 
        </div>
        <div className="text_fromtwitter underline">
         @<span className="span_name">name</span>  RT @<span className="span_name">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<span className="span_name smallertext "> about 9 hours ago</span> 
        </div>
        <div className="text_fromtwitter underline">
         @<span className="span_name">name</span>  RT @<span className="span_name">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<span className="span_name smallertext"> about 9 hours ago</span> 
        </div>
        <div className="text_fromtwitter ">
         @<span className="span_name">name</span>  RT @<span className="span_name">name</span> Donec suscipit vehicula turpis sed lutpat Quisque vitae quam neque.<span className="span_name smallertext "> about 9 hours ago</span> 
        </div>
      </div>
  );
}

export default FromTwitter;