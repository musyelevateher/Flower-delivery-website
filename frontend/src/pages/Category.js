import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Category.css";
import FreshFlower from "../assets/Fresh-flowers.png";

const Category = () => {
  const { categoryType } = useParams();
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/flowers/category/${categoryType}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch flowers");
        }

        const data = await response.json();
        setFlowers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFlowers();
  }, [categoryType]);

  return (
   <div className="category-container">
     <h2 className="category-heading">
     <img src={FreshFlower} alt="Category" className="category-icon" />
     </h2>

  <div className="flower-grid">
    {flowers.map(f => (
      <div key={f._id} className="flower-card">
        <img src={f.image} alt={f.name} className="flower-image" />
        <h3 className="flower-name">{f.name}</h3>
        <p className="flower-price">${f.price}</p>
      </div>
    ))}
  </div>
</div>
  );
};

export default Category;
