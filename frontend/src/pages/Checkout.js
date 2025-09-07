import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./Checkout.css";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:4000";

function CheckoutForm({ totalPrice }) {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      setMessage("Stripe or Elements not loaded.");
      return;
    }

    try {
      setProcessing(true);
      setMessage("");

      console.log("Sending totalPrice to backend:", totalPrice); // Debug log
      const res = await fetch(`${BACKEND_URL}/api/create-payment-intent`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalPrice }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Backend error: ${errorData.error || "Unknown error"}`);
      }

      const { clientSecret } = await res.json();
      console.log("Received clientSecret:", clientSecret); // Debug log

      if (!clientSecret) {
        throw new Error("No clientSecret received from backend.");
      }

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (result.error) {
        setMessage(`Payment failed: ${result.error.message}`);
      } else if (result.paymentIntent?.status === "succeeded") {
        localStorage.removeItem("cart");
        setMessage("✅ Payment successful! Redirecting...");
        setTimeout(() => navigate("/"), 2000);
      }
    } catch (err) {
      console.error("Payment error:", err);
      setMessage(`Error: ${err.message}`);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2 className="checkout-title">Checkout</h2>
      <div className="card-element-wrapper">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#333",
                fontFamily: "'Inter', sans-serif",
                "::placeholder": { color: "#b0b0b0" },
              },
              invalid: { color: "#e53e3e" },
            },
            hidePostalCode: true,
          }}
        />
      </div>
      <button type="submit" disabled={!stripe || processing} className="checkout-button">
        {processing ? "Processing..." : `Pay $${(totalPrice / 100).toFixed(2)}`}
      </button>
      {message && <p className="checkout-message">{message}</p>}
    </form>
  );
}

export default function Checkout() {
  const location = useLocation();
  const totalPrice = location.state?.totalPrice || 0;

  return (
    <div className="checkout-container">
      <Elements stripe={stripePromise}>
        <CheckoutForm totalPrice={totalPrice} />
      </Elements>
    </div>
  );
}