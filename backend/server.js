const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const expressListEndpoints = require('express-list-endpoints');
const path = require('path');
const Stripe = require("stripe");
 //const passport = require("./routes/stripe")
  //require("./Utilities/Passport")


dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); // put your Secret Key in .env


// Allow only your frontend domains
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://flower-delivery-website-admin-frontend.onrender.com" // if you also have a customer-facing frontend
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONG_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/api/auth', require('./routes/authRoutes'));
const flowerRoutes = require('./routes/flowerRoutes');
app.use('/api/flowers', flowerRoutes);
app.post("/api/create-payment-intent", async (req, res) => {
  try {
    const { totalPrice } = req.body; // frontend sends total in cents (e.g., $50 = 5000)

    if (!totalPrice || totalPrice < 1) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice, 
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe error:", err.message);
    res.status(500).json({ error: err.message });
  }
});


const PORT = process.env.PORT_NUMBER || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Available endpoints:');

  const routes = expressListEndpoints(app);
  routes.forEach(route => {
    console.log(`${route.methods.join(', ')} ${route.path}`);
  });
});

