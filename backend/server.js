const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const expressListEndpoints = require('express-list-endpoints');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONG_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Static file serving for images
app.use('/uploads', express.static('uploads'));

// ✅ Proper route registration
const flowerRoutes = require('./routes/flowerRoutes');
app.use('/api/flowers', flowerRoutes);

// Start server
const PORT = process.env.PORT_NUMBER || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Available endpoints:');

  const routes = expressListEndpoints(app);
  routes.forEach(route => {
    console.log(`${route.methods.join(', ')} ${route.path}`);
  });
});

