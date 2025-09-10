import React from "react";
import "./Service.css";
import serviceImage from "../assets/for-you.svg";

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-title">Our Service</h1> {/* Top centered heading */}

      <div className="service-row"> {/* Row for image + details */}
        <div className="service-image">
          <img src={serviceImage} alt="Service Decoration" />
        </div>

        <div className="service-details">
          <h2>SERVICE</h2>
          <h1>Flower Subscriptions</h1>
          <p>
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service - up to 30% more profitable
            than one-time purchases.
          </p>
          <button className="service-button">SUBSCRIBE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
