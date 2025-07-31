const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://musyelevateher:Abda0101@cluster0.fk0cdv6.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const flowerSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String
});

const Flower = mongoose.model('Flower', flowerSchema);

async function fixImagePaths() {
  try {
    const result = await Flower.updateMany(
      { image: { $regex: '^uploads/' } },
      [
        {
          $set: {
            image: { $substr: ["$image", 8, -1] }
          }
        }
      ]
    );
    console.log('Update result:', result);
  } catch (err) {
    console.error('Error updating flowers:', err);
  } finally {
    mongoose.disconnect();
  }
}

fixImagePaths();
