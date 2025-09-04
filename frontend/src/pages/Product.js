import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Product.css";
import { HashLink } from "react-router-hash-link";

const Product = () => {
  const { id } = useParams(); // flower._id from URL
  const [flower, setFlower] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [count, setCount] = useState(1);
  const [randomFlowers, setRandomFlowers] = useState(null);
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });

  // ✅ Popup function
  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });
    setTimeout(() => {
      setPopup({ show: false, message: "", type: "" });
    }, 3000);
  };

  // ✅ Quantity functions
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => count > 1 && setCount(count - 1);

  // ✅ Add to cart
  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      showPopup("Please sign in to add items to your basket.", "error");
      localStorage.setItem("redirectAfterLogin", window.location.pathname);
      return;
    }

    const cartItem = {
      flowerId: flower._id,
      name: flower.name,
      image: flower.image,
      price: flower.price,
      quantity: count,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = existingCart.findIndex(
      (item) => item.flowerId === cartItem.flowerId
    );

    if (existingItemIndex !== -1) {
      existingCart[existingItemIndex].quantity += count;
    } else {
      existingCart.push(cartItem);
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
    showPopup("Flower added to basket!", "success");
  };

  // ✅ Fetch single flower by ID
  useEffect(() => {
    const fetchFlower = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/api/flowers/${id}`
        );
        if (!res.ok) throw new Error("Flower not found");
        const data = await res.json();
        setFlower(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFlower();
  }, [id]);

  // ✅ Fetch random flowers
 // ✅ Fetch random flowers
useEffect(() => {
  const fetchRandomFlowers = async () => {
    try {
      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/api/flowers/random`
      );
      if (!res.ok) throw new Error("Failed to fetch random flowers");
      const data = await res.json();
      setRandomFlowers(data.flowers); // unwrap correctly
    } catch (err) {
      setError(err.message);
    }
  };
  fetchRandomFlowers();
}, []);


  if (loading) return <div className="flowerloading">Flower Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!flower) return <div className="noflowersmsg">Flower not Found</div>;

  return (
    <>
      {popup.show && (
        <div className={`popup-message ${popup.type}`}>{popup.message}</div>
      )}

      <div className="flower-detail-page">
        {/* ✅ Mobile / small screens */}
        <div className="product-card" id="product-card">
          <div className="product-image">
            <img src={flower.image} alt={flower.name} className="flower-image1" />
            <h5 className="producttext hh5">
              BOUQUETS FRESH FLOWERS / QUICK ORDER
            </h5>
            <h3 className="producttext hh3">
              {flower.name} - ${flower.price}
            </h3>
          </div>

          <div className="product-details">
            <p className="producttext pp">{flower.description}</p>
          </div>

          <div className="flower-quantity">
            <h3 className="qh">Quantity</h3>
            <div className="quantity-flex">
              <button className="incdec" onClick={decrementCount}>
                -
              </button>
              <div className="count-display">{count}</div>
              <button className="incdec" onClick={incrementCount}>
                +
              </button>
            </div>
          </div>

          <div className="add-basket">
            <button className="add-basket-btn" onClick={handleAddToCart}>
              ADD TO BASKET
            </button>
          </div>
        </div>

        {/* ✅ Desktop / large screens */}
        <div className="container-1440" id="container-1440">
          <div className="image-1140">
            <img src={flower.image} alt={flower.name} className="flower-image" />
          </div>
          <div className="details-1440">
            <h5 className="producttext hh5">
              BOUQUETS FRESH FLOWERS / QUICK ORDER
            </h5>
            <h3 className="producttext hh3">
              {flower.name} - ${flower.price}
            </h3>
            <p className="producttext pp">{flower.description}</p>
            <div className="qfl">
              <h3 className="qh">Quantity</h3>
              <div className="qbtn">
                <button className="incdec" onClick={decrementCount}>
                  -
                </button>
                <div className="count-display">
                  <span className="count">{count}</span>
                </div>
                <button className="incdec" onClick={incrementCount}>
                  +
                </button>
              </div>
            </div>
            <div className="add-basket-con">
              <button className="add-basket-btn" onClick={handleAddToCart}>
                ADD TO BASKET
              </button>
            </div>
          </div>
        </div>

        {/* ✅ Suggestions */}
        <div className="ymal">
          <h3>You may also like…</h3>
        </div>

        <div className="suggestions">
          {randomFlowers &&
            randomFlowers.map((fl) => (
              <HashLink to={`/product/${fl._id}#product-card`} key={fl._id}>
                <div className="random-flower">
                  <img src={fl.image} alt={fl.name} />
                  <h5 className="rh5">{fl.name}</h5>
                  <p className="rp">${fl.price}</p>
                </div>
              </HashLink>
            ))}
        </div>

        <div className="suggestions-1440">
          {randomFlowers &&
            randomFlowers.map((fl) => (
              <HashLink to={`/product/${fl._id}#container-1440`} key={fl._id}>
                <div className="random-flower">
                  <img src={fl.image} alt={fl.name} />
                  <h5 className="rh5">{fl.name}</h5>
                  <p className="rp">${fl.price}</p>
                </div>
              </HashLink>
            ))}
        </div>
      </div>
    </>
  );
};

export default Product;
