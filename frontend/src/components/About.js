import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';



const About = () => {
   const navigate = useNavigate();

  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About us</h1>
      </div>

      <div className="about-divider"></div>

      <div className="about-description">
        <h3>OUR STORY</h3>
        <h1>Kyiv LuxeBouquets</h1>
        <p>
          We are a modern local floral studio, which specializes in the design and
          delivery of unique bouquets. We have the best florists who carefully
          select each look, our studio cooperates directly with farms for growing
          different flowers, so we always have fresh flowers, which are collected by
          our florists in exquisite bouquets. We have a collection of fresh bouquets,
          collections of dried bouquets, house plants, as well as fragrant candles
          from luxury brands to create the perfect atmosphere. Make someone's day
          amazing by sending flowers, plants and gifts the same or next day. Ordering
          flowers online has never been easier.
        </p>

        {/* ✅ moved button here */}
        <button className="about-btn"onClick={() => navigate("/about")}>Learn More</button>
        
    
      </div>
    </div>
  );
};

export default About;
