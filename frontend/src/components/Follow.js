import React from 'react';



/* ===== ORIGINAL VERSION (COMMENTED OUT) =====
import Call from '../assets/call.svg';
import Locate from '../assets/locate.svg';
import './Follow.css';
const Follow = () => {
  return (
    <div className="follow-container">
      
      <div className="follow-text">
        <h1>To Contact Us</h1>
        <h5>We will call you back</h5>
        <button className="number">+380 XX XXX XX XX</button>
        <button className="book">book a call </button>
      </div>
      <div className="follow-items">
        <div className="follow-content">
          <div className="phone-section">
            <div className="follow-text2">
              <h1>Phone</h1>
              <h1>Address</h1>
            </div>
        
            <div className="follow-text3">
              <div className="phone-item">
                <img src={Call} alt="Phone" />
                <h1>+380980099777</h1>
              </div>
              <div className="phone-item">
                <img src={Call} alt="Phone" />
                <h5>+380980099111</h5>
              </div>
              <div className="follow-text5">
                <h6>OPENING HOURS: 8 To 11 P.M.</h6>
                <img src={Locate} alt="" />
                <h4>15/4 Khreshchatyk Street, Kyiv </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Follow;
===== END ORIGINAL ===== */


/* ===== NEW MOBILE-FIRST RESPONSIVE VERSION ===== */
import Call from '../assets/call.svg';
import Locate from '../assets/locate.svg';
import './Follow.css';

const Follow = () => {
  return (
    <div className="follow-container">
      {/* Top contact heading */}
      <div className="follow-text">
        <h1>To Contact Us</h1>
        <h5>We will call you back</h5>
        <div className="button-group">
        <button className="number">+380 XX XXX XX XX</button>
        <button className="book">book a call</button>
      </div>
      </div>
      {/* Contact details section */}
      <div className="contact-sections">
        {/* Headings row */}
        <div className="contact-headings">
          <h2>Phone</h2>
          
          <h2>Address</h2>
        </div>

        {/* Content grid */}
        <div className="contact-content">
          {/* Phone column */}
          <div className="contact-column">
            <div className="phone-item">
              <img src={Call} alt="Phone" />
              <h1>+380980099777</h1>
            </div>
            <div className="phone-item">
              <img src={Call} alt="Phone" />
              <h5>+380980099111</h5>
            </div>
          </div>

          {/* Address column */}
          <div className="contact-column">
            <h6>OPENING HOURS: 8 To 11 P.M.</h6>
            <div className="address-item">
              <img src={Locate} alt="Location" />
              <h4>15/4 Khreshchatyk Street, Kyiv</h4>
            </div>
          </div>
        </div>
      </div>

     
      </div>
    
  );
};

export default Follow;
