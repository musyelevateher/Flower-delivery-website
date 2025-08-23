import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import navMenuRight from '../assets/navmenu-right.svg'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setCartOpen(false);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    setMenuOpen(false);
  };

  return (
    <div className="top">
      <nav className="navbar">
        
        {/* ==== MOBILE / TABLET ==== */}
        <div className="mobile-only icons-section">
          <div className="hamburger-wrapper">
            <GiHamburgerMenu
              className="hamburger-icon"
              onClick={toggleMenu}
            />
          </div>
        </div>

        <div className="mobile-only icons-section">
          <img
            src={navMenuRight}
            alt="Cart"
            className="cart-icon"
            onClick={toggleCart}
          />
        </div>

        {/* ==== DESKTOP ==== */}
        <div className="desktop-only desktop-menu left-menu">
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="desktop-only desktop-menu right-menu">
          <ul>
            <li><Link to="/signin">Sign in</Link></li>
            <li><Link to="/cart">Cart</Link></li>
          </ul>
        </div>
      </nav>

      {/* Dropdowns for mobile/tablet */}
      {menuOpen && (
        <div className="dropdown menu-dropdown">
          <ul>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}

      {cartOpen && (
        <div className="dropdown cart-dropdown">
          <h3><Link to="/signin">Sign in</Link></h3>
          <h4><Link to="/cart">Cart</Link></h4>
        </div>
      )}
    </div>
  );
};

export default Navbar;
