const mongoose = require('mongoose');

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
    type: String, // Cloudinary secure URL
  },
  imagePublicId: {
    type: String, // Cloudinary public_id (needed for deleting/updating image)
  }
}, { timestamps: true }); // optional: adds createdAt, updatedAt

module.exports = mongoose.model('Flower', flowerSchema);
