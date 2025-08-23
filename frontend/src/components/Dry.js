import React from "react";
import "./Dry.css";
import dryImage from "../assets/dry-flower.svg";
import Image from "../assets/arrow-left.svg";

const Dry = () => {
  return (
    <div className="dry-container">
          <div className="dry-image">
           <img src={dryImage} alt="Aroma Candles" />
         </div>
          <div className="shop-rows">
            <img src={Image} alt="" className="ows" />
            <h3 className="aroma-title">Shop now</h3>
           </div>
         
         <div className="dry-details">
           <h2>Dried Flowers</h2>
          
         </div>
        
       </div>
     );
}
export default Dry;