import React from "react";
import "./Aroma.css";
import aromaImage from "../assets/aroma-candels.svg";
import Image from "../assets/arrow-left.svg";
const Aroma = () => {
  return (
 <div className="aroma-container">
  <div className="aroma-image">
    <a href="/aroma" className="aroma-link">
      <img src={aromaImage} alt="aroma Candles" />
    </a>
  </div>
  <div className="aroma-details">
    <a href="/aroma" className="aroma-link">
        <h2>Aroma Candels</h2>

    </a>

    <div className="shop-row">
      <a href="/aroma" className="aroma-link">
      <img src={Image} alt="Arrow" className="ow" />
    </a>
      <a href="/aroma" className="aroma-link">
        <h3>Shop now</h3>
      </a>
     
    </div>
  </div>  
</div>

  );
}
export default Aroma;