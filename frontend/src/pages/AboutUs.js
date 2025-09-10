import React from 'react';
import './AboutUs.css';

// Assets (images)
import Story from "../assets/Story.svg";
import Hero from "../assets/Hero.svg";
import Cut from "../assets/Cut.svg";
import Parlour from "../assets/Parlour.svg";
import Rectangle from '../assets/Rectangle-76.svg';

const AboutUs = () => {
  return ( 
    <div>
      
      {/* Story + Hero Images Side by Side */}
      <div className="story-hero">
        <div className="images-row">
          <div className="story">
            <img src={Story} alt="Our Story Banner" />
          </div>

          <div className="hero-img">
            <img src={Hero} alt="Hero Section" />
          </div>
        </div>
      </div>  {/* ✅ closed story-hero properly */}

      <div className="story-section">  {/* outer div for full-width border */}
  <div className="hero-text">     {/* inner div to center text */}
    <h1>OUR STORY</h1>
    <h2>OUR Founder's Passion</h2>
    <p>
      Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the goal of 
      bringing unique and exquisite bouquets to the people of Kyiv. Natalia has always 
      had a passion for flowers and design, and her vision was to create a local floral studio 
      that would specialize in the creation and delivery of fresh, beautiful, and distinctive bouquets.
    </p>
  </div>
</div>

      {/* Expertly Crafted Bouquets */}
      <div className="hero-section">
        <div className="hero-img">
          <img src={Cut} alt="Expertly Crafted" />
        </div>
        <div className="hero-text">
          <h2>Expertly Crafted Bouquets</h2>
          <p>
            At Kyiv LuxeBouquets, we take pride in our team of talented and experienced florists who 
            carefully select each bloom, ensuring that only the freshest and most stunning flowers make it 
            into our bouquets. We work directly with farms to source the highest quality flowers, and our 
            skilled florists expertly craft each bouquet to perfection.
          </p>
        </div>
      </div>

      {/* Bouquets, Gifts & Ambiance */}
      <div className="hero-section">
        <div className="hero-img">
          <img src={Parlour} alt="Parlour" />
        </div>
        <div className="hero-text">
          <h2>Bouquets, Gifts & Ambiance</h2>
          <p>
            In addition to our stunning bouquets, we also offer a collection of dried bouquets, house plants, 
            and fragrant candles from luxury brands to create the perfect ambiance. We believe that sending flowers, 
            plants, and gifts should be easy and stress-free, which is why we offer same or next-day delivery throughout Kyiv.
          </p>
        </div>
      </div>

      {/* Making Every Day Special */}
      <div className="hero-section">
        <div className="hero-img">
          <img src={Rectangle} alt="Making Every Day Special" />
        </div>
        <div className="hero-text">
          <h2>Making Every Day Special</h2>
          <p className="simple">
            Our mission is simple: to make every day special and memorable for our customers. We are dedicated 
            to providing the highest quality flowers, exceptional customer service, and a seamless online experience 
            that will make you feel confident and satisfied with your purchase. Thank you for choosing Kyiv LuxeBouquets. 
            We look forward to bringing joy and happiness to your life with our beautiful bouquets and gifts.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="discover">
        <h1>Discover Our Beautiful Bouquets</h1>
        <p>
          Explore our collection of exquisite bouquets and surprise your loved ones with the perfect gift. 
          Click the button below to start shopping
        </p>
        <div className="market-container">
          <button className="market">SHOP NOW</button>
        </div>
      </div>

    </div>
  );
}

export default AboutUs;
