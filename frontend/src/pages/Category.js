import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Category.css";
import FreshFlower from "../assets/Fresh-flowers.png"; // default icon

const Category = () => {
  const { categoryType } = useParams();
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Fix names for special cases first
  const categoryNameOverrides = {
    live: "Live Plants",
    "live-plants": "Live Plants",
    freshner: "Freshners",
    freshners: "Freshners",
    fresh: "Fresh Flowers",
    aroma: "Aroma",
    dried: "Dried Flowers",
  };

  // 🔹 Prettify function (fallback for normal cases)
  const prettifyCategoryName = (str) => {
    if (!str) return "Category";
    return str
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  };

  // 🔹 Choose name from overrides or prettify
  const displayName =
    categoryNameOverrides[categoryType] || prettifyCategoryName(categoryType);

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
            src={FreshFlower} // currently same image for all categories
            alt={displayName}
            className="category-icon"
          />
          <span className="category-name">{displayName}</span>
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
