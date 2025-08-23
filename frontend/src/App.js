import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Pages/Category";
import Navbar from "./components/Navbar";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Signin from "./pages/Signin";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div> 
       <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}
export default App;
