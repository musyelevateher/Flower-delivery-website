import { useState } from 'react';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import navMenuRight from '../assets/navmenu-right.svg'; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setCartOpen(false); // close cart section if it's open
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
    setMenuOpen(false); // close menu section if it's open
  };

  return (
    <div className="top">
      <nav className="navbar">
        <div className="icons-section">
          <div className="hamburger-wrapper">

          <GiHamburgerMenu
            className="hamburger-icon"
            onClick={toggleMenu}
          />
          </div>
        </div>

        
        <div className="icons-section">
          <img
            src={navMenuRight}
            alt="Cart"
            className="cart-icon"
            onClick={toggleCart}
          />
        </div>
      </nav>

      {/* Navigation Menu */}
      {menuOpen && (
        <div className="dropdown menu-dropdown">
          <ul>
            <li>Shop</li>
            <li>Contact</li>
            
          </ul>
        </div>
      )}

      {/* Cart-related Links */}
      {cartOpen && (
        <div className="dropdown cart-dropdown">
          <h3>Sign in</h3>
          <h4>Cart</h4>
        </div>
      )}
    </div>
  );
};

export default Navbar;
