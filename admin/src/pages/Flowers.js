import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Flowers() {
  const [flowers, setFlowers] = useState([]);
  const [deletedIds, setDeletedIds] = useState([]); // Track deleted flower IDs

  useEffect(() => {
    fetchFlowers();
  }, []);

  const fetchFlowers = () => {
    axios.get('https://flower-delivery-website-backend-v9d6.onrender.com/api/flowers')
      .then(res => setFlowers(res.data))
      .catch(err => console.error(err));
  };

  // Delete handler
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this flower?')) {
      try {
        await axios.delete(`https://flower-delivery-website-backend-v9d6.onrender.com/api/flowers/${id}`);
        setDeletedIds([...deletedIds, id]);
        setTimeout(() => {
          setFlowers(flowers.filter(flower => flower._id !== id));
        }, 1200); // Show deleted image for 1.2 seconds
      } catch (err) {
        alert('Error deleting flower.');
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: 'red' }}>Admin Panel</h1>

      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button style={{ padding: '8px 16px', borderRadius: '5px', backgroundColor: 'black', color: 'white', border: 'none' }}>
          Flowers
        </button>
        <button
          onClick={() => window.location.href = '/add'}
          style={{ padding: '8px 16px', borderRadius: '5px', backgroundColor: 'lightgray', border: 'none' }}>
          Add Flowers
        </button>
      </div>

      <div>
        {flowers.map((flower, index) => (
          <div key={flower._id || index} style={{ display: 'flex', marginBottom: '30px', borderBottom: '1px solid #ccc', paddingBottom: '10px', position: 'relative' }}>
            {/* Image with X icon */}
            <div style={{ width: '200px', height: '150px', backgroundColor: '#eee', marginRight: '20px', position: 'relative' }}>
              {deletedIds.includes(flower._id) ? (
                <img
                  src="https://raw.githubusercontent.com/elevateHER/module-5/main/assets/Del_Flower.png"
                  alt="Deleted"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.8 }}
                />
              ) : (
                <>
                  <img
                    src={`https://flower-delivery-website-backend-v9d6.onrender.com/uploads/${flower.image}`}

                    alt={flower.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4px' }}
                  />
                  {/* X icon in top-right corner */}
                  <span
                    onClick={() => handleDelete(flower._id)}
                    style={{
                      position: 'absolute',
                      top: 5,
                      right: 10,
                      color: 'white',
                      background: 'red',
                      borderRadius: '50%',
                      width: 24,
                      height: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      fontSize: 18,
                      boxShadow: '0 1px 4px rgba(0,0,0,0.2)'
                    }}
                    title="Delete"
                  >
                    ×
                  </span>
                </>
              )}
            </div>

            {/* Details */}
            <div>
              {deletedIds.includes(flower._id) ? (
                <p style={{ color: 'red', fontWeight: 'bold', marginTop: '60px' }}>Flower Deleted</p>
              ) : (
                <>
                  <p>
                    <strong>
                      <span style={{ color: 'red' }}>Name:</span></strong> {flower.name}
                  </p>
                  <p><strong style={{ color: 'red' }}>Category:</strong> {flower.category}</p>
                  <p><strong style={{ color: 'red' }}>Price:</strong> ₦{flower.price}</p>
                  <p><strong style={{ color: 'red' }}>Description:</strong> {flower.description}</p>
                  {/* Delete button under description */}
                  <button
                    onClick={() => handleDelete(flower._id)}
                    style={{
                      backgroundColor: 'red',
                      color: 'white',
                      border: 'none',
                      borderRadius: '4px',
                      padding: '5px 12px',
                      cursor: 'pointer',
                      marginTop: '8px'
                    }}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '40px', textAlign: 'center', fontSize: '12px' }}>
        <p><strong>Flower Delivery App</strong><br />
          Created for ElevateHER by Innovation Space Ltd<br />
          By [Musayyiba Shua'ibu EHS012]</p>
      </footer>
    </div>
  );
}

export default Flowers;