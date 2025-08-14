import React from "react";
import "./Service.css";
import serviceImage from "../assets/for-you.svg";

const Service = () => {

  return (
    <div className="service-container">
      <div className="service-image">
        <h1>Our Service</h1>
        <img src={serviceImage} alt="Service Decoration" />
      </div>
      <div className="service-details">
        <h2>SERVICE</h2>
        <h1>Flower Subcriptions</h1>
        <p>Experience the convenience and savings of regular flower deliveries with our flexible subscription service - up to 30% more profitable than one-time purchases.</p>
        <button className="service-button">SUBSCRIBE NOW</button>
      </div>
    </div>

  );        
}             
export default Service;