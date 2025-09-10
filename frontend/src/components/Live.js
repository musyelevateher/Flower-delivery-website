import React from 'react';
import "./Live.css";
import liveImage from "../assets/live-plant.svg";
import Image from "../assets/arrow.svg";
const Live = () => {
  return (
     <div className="live-container">
      <div className="live-details">
        <a href="/live" className="live-link">
          <h2>Live Plants</h2>
        </a>
    
        <div className="shop-row">
          <a href="/live" className="live-link">
            <h3>Shop now</h3>
          </a>
          <a href="/live" className="live-link">
            <img src={Image} alt="Arrow" className="ow" />
          </a>
        </div>
      </div>
    
      <div className="live-image">
        <a href="/live" className="live-link">
          <img src={liveImage} alt="Live Plants" />
        </a>
      </div>
    </div>
    
  );
}
export default Live;

