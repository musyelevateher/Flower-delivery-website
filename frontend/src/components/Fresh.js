import React from "react";
import "./Fresh.css";
import FreshImage from "../assets/fresh-flower.svg";
import ArrowImage from "../assets/arrow.svg";

const Fresh = () => {
  return (
    <div className="fresh-container">
  <div className="fresh-details">
    <a href="/fresh" className="fresh-link">
      <h2>Fresh Flowers</h2>
    </a>

    <div className="shop-row">
      <a href="/fresh" className="fresh-link">
        <h3>Shop now</h3>
      </a>
      <a href="/fresh" className="fresh-link">
        <img src={ArrowImage} alt="Arrow" className="ow" />
      </a>
    </div>
  </div>

  <div className="fresh-image">
    <a href="/fresh" className="fresh-link">
      <img src={FreshImage} alt="Fresh Flowers" />
    </a>
  </div>
</div>
  );
};

export default Fresh;
