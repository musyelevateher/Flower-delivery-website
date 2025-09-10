import { useEffect, useState } from "react";
import "./Cart.css";
import Export from "../assets/Export-lock.svg";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const navigate = useNavigate();

  // 🔑 derive login state directly from localStorage (no stale state)
  const isLoggedIn = !!localStorage.getItem("token");

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const total = storedCart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setSubtotal(total);
  }, []);

  const removeFromCart = (flowerId) => {
    const updatedCart = cartItems.filter((item) => item.flowerId !== flowerId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    navigate("/checkout", { state: { totalPrice: subtotal * 100 } });
  };

  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>;
  }

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <div className="cart-item" key={item.flowerId}>
            <img src={item.image} alt={item.name} className="cart-item-img" />
            <div className="cart-item-info">
              <p className="item-name">{item.name}</p>
              <div className="quantity-price">
                <span className="item-quantity">Quantity ({item.quantity})</span>
                <span className="item-price">${item.price}</span>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.flowerId)}
              >
                Remove
              </button>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Shipping</span>
          <span>Calculated at next step</span>
        </div>
        <hr className="summary-divider" />
        <div className="summary-row total-row">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        {/* 👇 Hide / Show based on login */}
        {isLoggedIn ? (
          <button className="payment-btn" onClick={handleCheckout}>
            Continue to Payment
          </button>
        ) : (
          <button className="payment-btn" onClick={() => navigate("/signin")}>
            Sign in to Checkout
          </button>
        )}

        <div className="secure-checkout">
          <span>Secure Checkout</span>
          <img src={Export} alt="Lock Icon" className="lock" />
        </div>
      </div>
      <hr className="footer-divider" />
    </div>
  );
};

export default Cart;
