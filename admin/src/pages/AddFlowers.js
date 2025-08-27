import React, { useState } from 'react';
import axios from 'axios';

function AddFlowers() {
  const [flowerData, setFlowerData] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
    } else {
      setPreview(null);
    }
  };

  const handleChange = (e) => {
    setFlowerData({ ...flowerData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.set('name', flowerData.name);
  formData.set('category', flowerData.category);
  formData.set('price', flowerData.price);
  formData.set('description', flowerData.description);
  if (imageFile) formData.set('image', imageFile); // ✅ matches upload.single('image')

  try {
    await axios.post(
      'http://localhost:4000/api/flowers/',
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    alert('Flower added successfully!');
    setFlowerData({
      name: '',
      category: '',
      price: '',
      description: '',
    });
    setImageFile(null);
    setPreview(null);
  } catch (err) {
    console.error(err);
    alert('Error adding flower.');
  }
};


  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Add Flower</h2>

      {/* Image Preview at the Top */}
      <div style={{ textAlign: 'center', marginBottom: '15px' }}>
        <img
          src={preview || 'https://via.placeholder.com/200x150?text=No+Image'}
          alt="Preview"
          style={{ width: '200px', height: '150px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #ccc' }}
        />
      </div>

      {/* Upload Picture Button */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label
          htmlFor="image-upload"
          style={{
            backgroundColor: '#eee',
            padding: '8px 16px',
            borderRadius: '5px',
            cursor: 'pointer',
            border: '1px solid #ccc',
            display: 'inline-block'
          }}
        >
          Upload
        </label>
        <input
          id="image-upload"
          type="file"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={flowerData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Category:</label>
        <input
          type="text"
          name="category"
          value={flowerData.category}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={flowerData.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={flowerData.description}
          onChange={handleChange}
          required
          rows="3"
          style={{ ...inputStyle, resize: 'vertical' }}
        ></textarea>

        {/* Submit Button at the Bottom */}
        <div style={{ textAlign: 'center' }}>
          <button
            type="submit"
            style={{
              backgroundColor: 'black',
              color: 'white',
              padding: '10px 10px',
              border: 'none',
              cursor: 'pointer',
              marginTop: '10px',
              borderRadius: '5px',
              width: '50%'
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '8px',
  marginBottom: '15px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};

export default AddFlowers;