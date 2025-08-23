import React from "react";
import Navbar from "../components/Navbar";
import Herosection from "../components/Herosection";
import Order from "../components/Order";
import Fresh from "../components/Fresh";
import Dry from "../components/Dry";
import Live from "../components/Live";
import Aroma from "../components/Aroma";
import Freshner from "../components/Freshner";
import About from "../components/About";
import Choose from "../components/Choose";
import Follow from "../components/Follow";
import Service from "../components/Service";
import Client from "../components/Client";
import Footer from "../components/Footer";





const Home = () => {
return ( 
  <div>
    <Navbar />
    <Herosection />
    <Order />
    <Fresh />
    <Dry />
    <Live />
    <Aroma />
    <Freshner />
    <About />
    <Choose />
    <Follow />
    <Service />
    <Client />
    <Footer />
  </div>
);
};

export default Home;