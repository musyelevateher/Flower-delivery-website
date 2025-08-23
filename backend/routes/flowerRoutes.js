const express = require('express');
const router = express.Router();
const flowerController = require('../controllers/flowerController');
const multer = require('multer');
const path = require('path');


// ...existing code...
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'uploads')); // Use absolute path
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });
// ...existing code...

router.get('/', flowerController.getAllFlowers);


router.post('/', upload.single('image'), flowerController.createFlower);


router.delete('/:id', flowerController.deleteFlower);

router.patch('/:id', upload.single('image'), flowerController.updateFlower);
console.log('✅ flowerRoutes.js loaded');
module.exports = router;