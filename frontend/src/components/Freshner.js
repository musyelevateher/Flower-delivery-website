import React from "react";
import "./Freshner.css";
import FreshnerImage from "../assets/freshners.svg";
import Image from "../assets/arrow.svg";
const Freshner = () => {
  return (
<div className="freshner-container">
      <div className="freshner-details">
        <a href="/freshner" className="freshner-link">
          <h2>Freshners</h2>
        </a>
    
        <div className="shop-row">
          <a href="/freshner" className="freshner-link">
            <h3>Shop now</h3>
          </a>
          <a href="/freshner" className="freshner-link">
            <img src={Image} alt="Arrow" className="ow" />
          </a>
        </div>
      </div>
    
      <div className="freshner-image">
        <a href="/freshner" className="freshner-link">
          <img src= {FreshnerImage} alt="Freshners" />
        </a>
      </div>
    </div>
    



   
  );
}
export default Freshner;