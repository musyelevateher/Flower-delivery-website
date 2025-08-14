import React from 'react';
import "./Live.css";
import liveImage from "../assets/live-plant.svg";
import Image from "../assets/arrow.svg";
const Live = () => {
  return (
    <div className="live-container">
     
      <div className="live-details">
        <h2>Live Plants</h2>
        <div className="shop-row">
          <h3>Shop now</h3>
          <img src={Image} alt="" className="ow" />
        </div>
      </div>
       <div className="live-image">

        <img src={liveImage} alt="Live Plants" />

      </div>
    </div>
  );
}
export default Live;

