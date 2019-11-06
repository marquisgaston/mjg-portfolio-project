import React from "react";
import contactImg from "../../../static/assets/images/bio/headshot.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div>
      <div className="contact-wrapper">
        <div className="left"style ={{ backgroundImage: `url(${contactImg})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        </div>
        <div className="right">
          <div className="contact-bullet-points">
            <div className="contact-item-wrapper" >
              <div className="icon"><FontAwesomeIcon icon="phone" /></div>
              <h1>555-555-5555</h1>
            </div>
            <div className="contact-item-wrapper" >
              <div className="icon"><FontAwesomeIcon icon="envelope" /></div>
              <h1>email@email.com</h1>
            </div>
            <div className="contact-item-wrapper" >
            <div className="icon"><FontAwesomeIcon icon="map-marked-alt" /></div>
              <h1>Linked in LinkedInTHINGY</h1>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}