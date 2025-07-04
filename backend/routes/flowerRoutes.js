const express = require('express');
const router = express.Router();
const flowerController = require('../controllers/flowerController');
const multer = require('multer');
const path = require('path');

// Multer storage config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// GET all flowers
router.get('/', flowerController.getAllFlowers);

// POST a new flower with image upload
router.post('/', upload.single('image'), flowerController.createFlower);

// DELETE a flower by ID
router.delete('/:id', flowerController.deleteFlower);

module.exports = router;