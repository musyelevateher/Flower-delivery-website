const express = require('express');
const router = express.Router();
const flowerController = require('../controllers/flowerController');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../Utilities/cloudinary.js');

// Configure Multer to use Cloudinary
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'flowers', // Cloudinary folder name
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'],
    public_id: (req, file) => `${Date.now()}-${file.originalname}`,
  },
});

const upload = multer({ storage });

// Routes
router.get('/', flowerController.getAllFlowers);

// ✅ Add new category route
router.get('/category/:categoryType', flowerController.getFlowersByCategory);

// Upload image -> goes to Cloudinary
router.post('/', upload.single('image'), flowerController.createFlower);

router.delete('/:id', flowerController.deleteFlower);

router.patch('/:id', upload.single('image'), flowerController.updateFlower);

console.log('✅ flowerRoutes.js loaded with Cloudinary + Multer');
module.exports = router;
