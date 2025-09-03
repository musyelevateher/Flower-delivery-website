const Flower = require('../models/flowerModel');
const cloudinary = require('../Utilities/cloudinary');

// ✅ Get all flowers
exports.getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.json(flowers);
  } catch (err) {
    console.error("Error fetching flowers:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Get flowers by category
exports.getFlowersByCategory = async (req, res) => {
  try {
    const { categoryType } = req.params;
    const flowers = await Flower.find({ category: categoryType });

    if (!flowers || flowers.length === 0) {
      return res.status(404).json({ message: "No flowers found in this category" });
    }

    res.json(flowers);
  } catch (err) {
    console.error("Error fetching flowers by category:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Create flower
exports.createFlower = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;

    let image = null;
    let imagePublicId = null;

    // Multer-storage-cloudinary uploads automatically
    if (req.file) {
      image = req.file.path; // Cloudinary secure_url
      imagePublicId = req.file.filename || req.file.public_id || null;
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
    console.log("🌸 Flower created:", savedFlower);
  } catch (err) {
    console.error("Error creating flower:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Delete flower
exports.deleteFlower = async (req, res) => {
  try {
    const { id } = req.params;

    const flower = await Flower.findByIdAndDelete(id);
    if (!flower) return res.status(404).json({ message: "Flower not found" });

    // Delete from Cloudinary too
    if (flower.imagePublicId) {
      await cloudinary.uploader.destroy(flower.imagePublicId);
    }

    res.json({ message: "Flower deleted successfully" });
  } catch (err) {
    console.error("Error deleting flower:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// ✅ Update flower
exports.updateFlower = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const { id } = req.params;

    let flower = await Flower.findById(id);
    if (!flower) return res.status(404).json({ message: "Flower not found" });

    if (req.file) {
      // delete old Cloudinary image if exists
      if (flower.imagePublicId) {
        await cloudinary.uploader.destroy(flower.imagePublicId);
      }

      flower.image = req.file.path;
      flower.imagePublicId = req.file.filename || req.file.public_id || null;
    }

    // update fields only if provided
    flower.name = name || flower.name;
    flower.description = description || flower.description;
    flower.price = price ? Number(price) : flower.price;
    flower.category = category || flower.category;

    const updatedFlower = await flower.save();
    res.json(updatedFlower);
    console.log("🌼 Flower updated:", updatedFlower);
  } catch (err) {
    console.error("Error updating flower:", err);
    res.status(500).json({ message: "Server error" });
  }
};
