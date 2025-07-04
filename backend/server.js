// Step 1: Import Express module
const express = require('express');
const mongoose = require ( 'mongoose' );
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();

// Import the user routes


// Step 2: Create an Express application
const app = express();

// Use the port from .env or default to 3000

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors()); // Enable CORS for all routes

mongoose
  .connect(process.env.MONG_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));


//use the flower routes
app.use('/api/flowers', require('./routes/flowerRoutes'));
app.use('/uploads', express.static('uploads'));


// Step 4: Start the server and listen on port 3000
const PORT = process.env.PORT_NUMBER || 4000; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);});