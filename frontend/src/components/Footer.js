import React from 'react';
import './Footer.css';
import logo from '../assets/social-m-link.svg';
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-details">
        <p>Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... <br /> Reminds you 7 days before. No spam or sharing your address</p>
        <input type="email" placeholder=" Your Email" className="mail" />
        <button type="submit">Remind</button>
        </div>
      <div className="footer-text">
        <h1>Contact Us</h1>
        <h2>Address</h2>
        <h6>15/4 Khreshchatyk Street, Kyiv </h6>
        <h2>Phone</h2>
        <h6>+380980099777</h6>
        <h2> General Enquiry</h2>
        <h6>Kiev.Florist.Studio@gmail.com</h6>
        <h2>Follow Us</h2>
        <img src={logo} alt="" />
      </div>
   
      <div className="footer-text2">
        <h1>Shop</h1>
        <h5>All Products</h5>
        <h5>Fresh Flowers</h5>
        <h5>Dried Flowers</h5>
        <h5>Live Plants</h5>
         <h5>Designer Vases</h5>
         <h5>Aroma Candles</h5>
        <h5>Freshener Diffuser</h5>
        <h1>Service</h1>
        <h5>Flower Subcription</h5>
        <h5>Wedding & Event Decor</h5>
      </div>
      <div className="footer-text3">
        <h1>About Us</h1>
        <h5>Our story</h5>
        <h5>Blog</h5>
        <h5>Shipping & returns</h5>
<h5>Terms & conditions</h5>
<h5>Privacy policy</h5>
</div>
</div>

  );
}
export default Footer;

      
  