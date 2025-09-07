import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import FreshFlower from "../assets/Fresh-flowers.png";

// Map of normalized category keys to display names
const categoryNames = {
  fresh: "Fresh Flowers",
  liveplants: "Live Plants",
  aroma: "Aroma",
  dried: "Dried Flowers",
  freshners: "Freshners",
};

const Category = () => {
  const { categoryType } = useParams();
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Normalize categoryType: lowercase & remove dashes/spaces
  const categoryTypeNormalized = categoryType
    ? categoryType.toLowerCase().replace(/[-\s]/g, "")
    : "";

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

  if (loading) return <p>Loading flowers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="category-container">
      <div className="category-sidebar">
        <h2 className="category-heading">
          <img
            src={FreshFlower}
            alt={categoryNames[categoryTypeNormalized] || "Category"}
            className="category-icon"
          />
          <span className="category-name">
            {categoryNames[categoryTypeNormalized] || "Category"}
          </span>
        </h2>
      </div>

      <div className="flower-grid">
        {flowers.map((flower) => (
          <Link
            to={`/product/${flower._id}`}
            key={flower._id}
            className="flower-link"
          >
            <div className="flower-card">
              <img
                src={flower.image}
                alt={flower.name}
                className="flower-image"
              />
              <h3 className="flower-name">{flower.name}</h3>
              <p className="flower-price">${flower.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
