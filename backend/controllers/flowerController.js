const Flower = require('../models/flowerModel');

exports.getAllFlowers = async (req, res) => {
  try {
    const flowers = await Flower.find();
    res.json(flowers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createFlower = async (req, res) => {
  console.log("BODY:", req.body);
  console.log("FILE:", req.file);

  try {
    const { name, description, price, category } = req.body;
    const image = req.file ? req.file.filename : null; // Only the filename

    const flower = new Flower({
      name,
      description,
      price,
      category,
      image: image,
    });

    const savedFlower = await flower.save();
    res.status(201).json(savedFlower);
    console.log("Flower created:", savedFlower);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteFlower = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'Flower ID is required' });
    }
    const flower = await Flower.findByIdAndDelete(req.params.id);
    if (!flower) {
      return res.status(404).json({ message: 'Flower not found' });
    }
    res.json({ message: 'Flower deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateFlower = async (req, res) => {
  try {
    
    const { name, description, price, category } = req.body;
    const updateData = { name, description, price, category };
    const { id } = req.params;
    if (!id) {  
      return res.status(400).json({ message: 'Flower ID is required' });
    }

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const flower = await Flower.findByIdAndUpdate( req.params.id,
      updateData,
      { new: true }
    );

    if (!flower) {
      return res.status(404).json({ message: 'Flower not found' });
    }
    res.json(flower);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
