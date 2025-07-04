const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // <-- necessary for form-data parsing

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONG_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Static file serving for images
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/flowers', require('./routes/flowerRoutes'));

// Start server
const PORT = process.env.PORT_NUMBER || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
