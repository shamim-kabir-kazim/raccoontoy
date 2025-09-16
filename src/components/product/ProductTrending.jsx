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
    favoriteIcon: "https://i.postimg.cc/90x5xGY0/favorite-100dp-999999-FILL1-wght400-GRAD0-opsz48.png"
  },
  {
    id: 2,
    name: "Charmander Bricks",
    subtitle: "Classic Toy",
    oldPrice: "2.5$",
    newPrice: "2$",
    discount: "10%",
    soldOut: true,
    image: "https://i.postimg.cc/nLh447yc/Chat-GPT-Image-Aug-2-2025-03-56-54-PM-1-1.png",
    favoriteIcon: "https://i.postimg.cc/44wgNgRG/favorite-100dp-EA3323-FILL1-wght400-GRAD0-opsz48.png"
  },
    {
    id: 5,
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
    id: 6,
    name: "Pikachu Bricks cabb",
    subtitle: "Limited Edition",
    oldPrice: "2.5$",
    newPrice: "2$",
    discount: "20%",
    soldOut: false,
    image: "https://i.postimg.cc/sDJT7jD6/image-14.png",
    favoriteIcon: "https://placehold.co/21x21"
  },

];

const ProductTrending = () => {
  return (
    <div className="vix-trending-section">
      <div className="vix-trending-header">
        <span className="vix-trending-fire" role="img" aria-label="Trending">Trending Toys🔥</span>
        <span className="vix-trending-show-all">Show all</span>
      </div>
      <div className="vix-trending-scroll">
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