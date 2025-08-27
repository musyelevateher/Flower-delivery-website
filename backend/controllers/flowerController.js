const Flower = require('../models/flowerModel');
const cloudinary = require('../Utilities/cloudinary'); 

// Get all flowers
exports.getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.json(flowers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create flower
exports.createFlower = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    let image = null;
    let imagePublicId = null;

    // Multer-storage-cloudinary already uploaded the file
    if (req.file) {
      image = req.file.path;             // secure_url
      imagePublicId = req.file.filename || req.file.public_id;
    }

    const flower = new Flower({
      name,
      description,
      price: Number(price),
      category,
      image,
      imagePublicId,
    });

    const savedFlower = await flower.save();
    res.status(201).json(savedFlower);
    console.log("Flower created:", savedFlower);
  } catch (err) {
    console.error("Error creating flower:", err);
    res.status(500).json({ message: err.message });
  }
};


// Delete flower
exports.deleteFlower = async (req, res) => {
  try {
    const { id } = req.params;

    const flower = await Flower.findByIdAndDelete(id);
    if (!flower) return res.status(404).json({ message: 'Flower not found' });

    if (flower.imagePublicId) {
      await cloudinary.uploader.destroy(flower.imagePublicId);
    }

    res.json({ message: 'Flower deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update flower
exports.updateFlower = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const { id } = req.params;

    let flower = await Flower.findById(id);
    if (!flower) return res.status(404).json({ message: "Flower not found" });

    if (req.file) {
      if (flower.imagePublicId) {
        await cloudinary.uploader.destroy(flower.imagePublicId); // remove old image
      }
      flower.image = req.file.path;
      flower.imagePublicId = req.file.filename || req.file.public_id;
    }

    flower.name = name || flower.name;
    flower.description = description || flower.description;
    flower.price = price ? Number(price) : flower.price;
    flower.category = category || flower.category;

    const updatedFlower = await flower.save();
    res.json(updatedFlower);
  } catch (err) {
    console.error("Error updating flower:", err);
    res.status(500).json({ message: err.message });
  }
};


