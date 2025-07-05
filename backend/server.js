const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const expressListEndpoints = require('express-list-endpoints');

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect(process.env.MONG_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('MongoDB connection error:', err));


app.use('/uploads', express.static('uploads'));


const flowerRoutes = require('./routes/flowerRoutes');
app.use('/api/flowers', flowerRoutes);


const PORT = process.env.PORT_NUMBER || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Available endpoints:');

  const routes = expressListEndpoints(app);
  routes.forEach(route => {
    console.log(`${route.methods.join(', ')} ${route.path}`);
  });
});

