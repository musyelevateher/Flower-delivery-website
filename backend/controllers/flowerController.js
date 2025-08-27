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

    // Upload to Cloudinary if file exists
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "flowers", // optional: keep images organized in a folder
      });
      image = result.secure_url;
      imagePublicId = result.public_id;
    }

    const flower = new Flower({
      name,
      description,
      price,
      category,
      image,
      imagePublicId,
    });

    const savedFlower = await flower.save();
    res.status(201).json(savedFlower);
    console.log("Flower created:", savedFlower);
  } catch (err) {
    console.error("Error creating flower:", err); // log for debugging
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
    if (!flower) return res.status(404).json({ message: 'Flower not found' });

    // Replace image if new one uploaded
    if (req.file) {
      if (flower.imagePublicId) {
        await cloudinary.uploader.destroy(flower.imagePublicId); // remove old image
      }
      flower.image = req.file.path;         // secure_url
      flower.imagePublicId = req.file.filename; // public_id
    }

    flower.name = name || flower.name;
    flower.description = description || flower.description;
    flower.price = price || flower.price;
    flower.category = category || flower.category;

    const updatedFlower = await flower.save();
    res.json(updatedFlower);
  } catch (err) {
    console.error("Error updating flower:", err);
    res.status(500).json({ message: err.message });
  }
};

