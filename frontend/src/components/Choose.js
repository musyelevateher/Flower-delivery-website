import React from 'react';
import "./Choose.css";
import chooseImage from "../assets/kyiv.jpg";
import chooseImage2 from '../assets/social-m-link.svg';

const Choose = () => {
  return (
    
    <div className="choose-container">
      <div className="choose-columns">
  
        {/* Left column */}
        <div className="choose-left">
          <div className="choose-title-wrapper">
          <h2 className="choose-title">Why choose us ?</h2>
        </div>
        </div>
        

        {/* Vertical divider */}
        <div className="choose-vertical-divider"></div>

        {/* Right column */}
        <div className="choose-right">

          {/* Row 1 */}
          <div className="choose-row">
            <div className="choose-content">
              <h1>Stylish bouquets by florists</h1>
              <p>
                At our floral studio, our professional florists craft the most elegant
                and stylish bouquets using only the freshest and highest quality materials.
                We stay up-to-date with the latest floral design trends and offer unique
                arrangements that are sure to impress. Let us brighten up your day with
                our stunning bouquets and same-day delivery service.
              </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="choose-row">
            <div className="choose-content">
              <h1>On-time delivery</h1>
              <p>
                Never miss a moment with our on-time flower delivery service. Our couriers
                will deliver your bouquet personally, without boxes, to ensure it arrives
                in perfect condition. Trust us to deliver your thoughtful gift reliably.
              </p>
            </div>
          </div>

          {/* Row 3 */}
          <div className="choose-row">
            <div className="choose-content">
              <h1>Safe payment</h1>
              <p>
                You can feel secure when placing an order with us, as we use industry-standard
                security measures to protect your payment information. Your transaction will
                be safe and hassle-free, so you can shop with confidence.
              </p>
            </div>
          </div>

          {/* Row 4 */}
          <div className="choose-row">
            <div className="choose-content2">
              <h1>Subscription by your needs</h1>
              <p className ="beautiful">
                With our subscription service tailored to your specific needs, you can enjoy
                the convenience of having beautiful bouquets delivered straight to your door
                at regular intervals. You'll save time and money with this hassle-free solution
                to your floral needs.
              </p>
            </div>
          </div>

          {/* Image at bottom */}
          <div className="choose-row">
            <div className="choose-image">
              <img src={chooseImage} alt="Choose Us" />
            </div>
          </div>

          {/* Social row */}
          <div className="choose-social">
            <h1 className="social-label">Follow us:</h1>
            <div className="vertical-line"></div>
            <div className="social-icons">
              <img src={chooseImage2} alt="Social Media Links" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Choose;
