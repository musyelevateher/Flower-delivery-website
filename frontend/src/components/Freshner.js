import React from "react";
import "./Freshner.css";
import FreshnerImage from "../assets/freshners.svg";
import Image from "../assets/arrow.svg";
const Freshner = () => {
  return (
    <div className="freshner-container">
      
      <div className="freshner-details">
        <h2>Freshners</h2>
        <div className="shop-row">
          <h3>Shop now</h3>
          <img src={Image} alt="" className="ow" />
        </div>
      </div>
      <div className="freshner-image">
        <img src={FreshnerImage} alt="Freshners" />
      </div>
    </div>
  );
}
export default Freshner;