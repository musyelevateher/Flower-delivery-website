import React from "react";
import "./Dry.css";
import dryImage from "../assets/dry-flower.svg";
import Image from "../assets/arrow-left.svg";

const Dry = () => {
  return (
    <div className="dry-container">
  {/* Image clickable */}
  <div className="dry-image">
    <a href="/dried" className="dry-link">
      <img src={dryImage} alt="Dried Flowers" />
    </a>
  </div>
  <div className="dry-details">
    <a href="/dried" className="dry-link">
      <h2>Dried Flowers</h2>
    </a>

  {/* Shop now + arrow clickable */}
  <div className="shop-row">
    <a href="/dried" className="dry-link">
      <img src={Image} alt="Arrow" className="ow" />
    </a>
    <a href="/dried" className="dry-link">
      <h3 className="dry-title">Shop now</h3>
    </a>
  </div>

  {/* Dried Flowers text clickable */}
  
  </div>
</div>
  );
}
export default Dry;