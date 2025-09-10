import Follow from "./Follow";
import chooseImage from "../assets/kyiv.jpg";
import chooseImage2 from '../assets/social-m-link.svg';
import Call from '../assets/call.svg';
import Locate from '../assets/locate.svg'; 

import "./Hard.css";

const Hard = () => {
  return (
    <>
      {/* Follow Section */}
      <div className="flexation">
        <div className="forget">
          <div className="ollow">
            {/* Top contact heading */}
            <div className="abba">
              <h1>To Contact Us</h1>
              <h5>We will call you back</h5>
              <div className="group">
                <button className="nu">+380 XX XXX XX XX</button>
                <button className="bo">book a call</button>
              </div>
            </div>

            {/* Contact details section */}
            <div className="con">
              {/* Headings row */}
              <div className="conts">
                <h2>Phone</h2>
                <h2>Address</h2>
              </div>

              {/* Content grid */}
              <div className="ent">
                {/* Phone column */}
                <div className="cumn">
                  <div className="tem">
                    <img src={Call} alt="Phone" />
                    <h1>+380980099777</h1>
                  </div>
                  <div className="tem">
                    <img src={Call} alt="Phone" />
                    <h5>+380980099111</h5>
                  </div>
                </div>

                {/* Address column */}
                <div className="cumn">
                  <h6>OPENING HOURS: 8 To 11 P.M.</h6>
                  <div className="add">
                    <img src={Locate} alt="Location" />
                    <h4>15/4 Khreshchatyk Street, Kyiv</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Choose Section */}
        <div className="To-label">
          <div className="abda">
            {/* Image */}
            <div className="huwaida">
              <img src={chooseImage} alt="Choose Us" />
            </div>

            {/* Social Links */}
            <div className="musy">
              <div className="left">
                <h1 className="ati">Follow us</h1>
              </div>

              <div className="hany"></div> {/* divider */}

              <div className="amatu">
                <img src={chooseImage2} alt="Social Media Links" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hard;
