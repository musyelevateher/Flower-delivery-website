import React from "react";
import "./Fresh.css";
import FreshImage from "../assets/fresh-flower.svg";
import ArrowImage from "../assets/arrow.svg";

const Fresh = () => {
  return (
    <div className="fresh-container">
      {/* Left Side */}
      <div className="fresh-details">
        <h2>Fresh Flowers</h2>
        <div className="shop-row">
          <h3>Shop now</h3>
          <img src={ArrowImage} alt="Arrow" className="ow" />
        </div>
      </div>

     

      {/* Right Side */}
      <div className="fresh-image">
        <img src={FreshImage} alt="Fresh Flowers" />
      </div>
    </div>
  );
};

export default Fresh;
