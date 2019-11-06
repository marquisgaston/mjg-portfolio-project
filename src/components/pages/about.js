import React from "react";
import loginImg from "../../../static/assets/images/bio/headshot.jpg";

export default function() {
  return (
    <div>
      <div className="aboutme-wrapper">
        <div className="left"style ={{ backgroundImage: `url(${loginImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        </div>
        <div className="right">
          <div className="title-wrapper" >
            <h1>Title About Me</h1>
          </div>
          <div className="about-me-content">
            <p>ABOUT ME CONTENT</p>
          </div>
        </div>
      </div>
    </div>
  );
}