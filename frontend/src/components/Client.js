import React from "react";
import "./Client.css";
import serviceImage from "../assets/event-decor.png";
import Network from "../assets/goo.svg";

const Client = () => {
  return (
    <div className="client-container">
      <div className="client-image">
        <img src={serviceImage}alt="" />
      </div>
      <div className="client-details">
          <img src={Network} alt="" />
          
          </div>
        <div className="client-details1">
          <h1>Our Clients say</h1>
          <p>“Ordered flowers online and they were the best bouquet! Impressed everyone around. Highly recommend this flower shop!” <br />
– Ronald Richards</p>
        <button>READ REVIEWS</button>
        </div>
      </div>  
  );
}
export default Client;
