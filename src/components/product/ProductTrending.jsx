import React from "react";
import "./ProductTrending.css";
import TrendProductCard from "./TrendProductCard";

// Demo products with all required fields!
const products = [
  {
    id: 1,
    name: "Pikachu Bricks cabb",
    subtitle: "Limited Edition",
    oldPrice: "2.5$",
    newPrice: "2$",
    discount: "20%",
    soldOut: false,
    image: "https://i.postimg.cc/N0C1pFt8/Chat-GPT-Image-Aug-2-2025-03-49-34-PM-1-2-1.png",
    favoriteIcon: "https://placehold.co/21x21"
  },
  {
    id: 2,
    name: "Charmander Bricks",
    subtitle: "Classic Toy",
    oldPrice: "2.5$",
    newPrice: "2$",
    discount: "10%",
    soldOut: false,
    image: "https://i.postimg.cc/nLh447yc/Chat-GPT-Image-Aug-2-2025-03-56-54-PM-1-1.png",
    favoriteIcon: "https://placehold.co/21x21"
  },

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
            subtitle={product.subtitle}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            discount={product.discount}
            soldOut={product.soldOut}
            favoriteIcon={product.favoriteIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductTrending;