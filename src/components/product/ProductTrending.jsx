import React from "react";
import "./ProductTrending.css";
import TrendProductCard from "./TrendProductCard";

// Sample trending products data
const products = [
  {
    id: 1,
    name: "Pikachu Bricks cabb",
    price: "2$",
    image: "https://i.postimg.cc/N0C1pFt8/Chat-GPT-Image-Aug-2-2025-03-49-34-PM-1-2-1.png",
    cartIcon: "https://i.postimg.cc/N0C1pFt8/Chat-GPT-Image-Aug-2-2025-03-49-34-PM-1-2-1.png"
  },
  {
    id: 2,
    name: "Charmander Bricks",
    price: "2$",
    image: "https://i.postimg.cc/nLh447yc/Chat-GPT-Image-Aug-2-2025-03-56-54-PM-1-1.png",
    cartIcon: "https://i.postimg.cc/nLh447yc/Chat-GPT-Image-Aug-2-2025-03-56-54-PM-1-1.png"
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
          <TrendProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            cartIcon={product.cartIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductTrending;