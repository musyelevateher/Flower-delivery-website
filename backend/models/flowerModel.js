const mongoose = require('mongoose');

// Define the User schema
const flowerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  }
  
});

module.exports = mongoose.model('Flower', flowerSchema);