import React from "react";
import "./Aroma.css";
import aromaImage from "../assets/aroma-candels.svg";
import Image from "../assets/arrow-left.svg";
const Aroma = () => {
  return (
    <div className="aroma-container">
       <div className="aroma-image">
        <img src={aromaImage} alt="Aroma Candles" />
      </div>
       <div className="shop-rows">
         <img src={Image} alt="" className="ows" />
         <h3 className="aroma-title">Shop now</h3>
        </div>
      
      <div className="aroma-details">
        <h2>Aroma Candels</h2>
       
      </div>
     
    </div>
  );
}
export default Aroma;