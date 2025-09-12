import React from "react";
import "./ProductTrending.css";

// Sample trending products data
const products = [
  {
    id: 1,
    name: "Pikachu Bricks",
    price: 2,
    image: "https://i.postimg.cc/8zP4C1q4/pikachu.png",
  },
  {
    id: 2,
    name: "Charmander Bricks",
    price: 2,
    image: "https://i.postimg.cc/yYyYyYyY/charmander.png",
  },
  // Add more products as needed
];

const ProductTrending = () => {
  return (
    <div className="trending-section">
      <div className="trending-header">
        <span className="trending-fire" role="img" aria-label="Trending">🔥</span>
        <span className="trending-show-all">Show all</span>
      </div>
      <div className="trending-scroll">
        {products.map(product => (
          <div className="trending-card" key={product.id}>
            <div className="trending-image-bg">
              <img src={product.image} alt={product.name} className="trending-img" draggable={false} />
            </div>
            <div className="trending-info">
              <span className="trending-title">{product.name}</span>
              <div className="trending-buy-row">
                <span className="trending-price">
                  {product.price}
                  <span className="trending-currency">$</span>
                </span>
                <span className="trending-cart-icon">
                  {/* Simple bag icon SVG */}
                  <svg width="28" height="28" viewBox="0 0 28 28">
                    <circle cx="14" cy="14" r="13.5" stroke="#000" strokeWidth="1" fill="none" />
                    <path d="M9 12V10a5 5 0 0110 0v2" stroke="#000" strokeWidth="1.5" fill="none"/>
                    <rect x="7" y="12" width="14" height="9" rx="2" stroke="#000" strokeWidth="1.5" fill="none"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTrending;