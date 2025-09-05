// import React from 'react';
// import Navbar from '../Components/Navbar';
// import Footer from '../Components/Footer';
// import './Checkout.css';

// // Assets
// import Angle from "../assets/Rectangle-69.svg";
// import Notification from "../assets/Notification.svg";

// const Checkout = () => {
//   return ( 
//     <div>
//       {/* Navbar */}
//       <div>
//         <Navbar />
//       </div>

//       {/* Product Image */}
//       <div>
//         <img src={Angle} alt="Checkout Item" />
//       </div>

//       {/* Product Info */}
//       <div>
//         <h1>Snowfall</h1>
//         <h5>Quantity (1)</h5>
//         <h5>$100</h5>
//       </div>

//       {/* Subtotal + Shipping */}
//       <div>
//         <h2>Subtotal</h2>
//         <h3>Shipping</h3>
//         <h4>$100.00</h4>
//         <h6>Calculated at next step</h6>
//       </div>

//       {/* Total + Notification */}
//       <div>
//         <h1>Total</h1>
//         <h3>$100.00</h3>
//         <img src={Notification} alt="Notification Icon" />
//       </div>

//       {/* Footer */}
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }
 
// export default Checkout;
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_YOUR_PUBLISHABLE_KEY"); // Replace with Publishable Key

function CheckoutForm({ totalPrice }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call backend to create payment intent
    const { clientSecret } = await fetch("http://localhost:4000/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalPrice }), // send total amount in cents
    }).then((res) => res.json());

    // Confirm payment with Stripe
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setMessage(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      setMessage("✅ Payment successful! Your flowers are on the way 🌹");
      // You can also call your backend here to save the order in DB
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 shadow-lg rounded-lg bg-white max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-3">Checkout</h2>
      <CardElement className="p-2 border rounded-lg mb-4" />
      <button
        type="submit"
        disabled={!stripe}
        className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
      >
        Pay ${(totalPrice / 100).toFixed(2)}
      </button>
      {message && <p className="mt-3 text-green-600">{message}</p>}
    </form>
  );
}

export default function CheckoutPage() {
  const totalPrice = 5000; // Example: $50.00, replace with actual cart total

  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm totalPrice={totalPrice} />
    </Elements>
  );
}
