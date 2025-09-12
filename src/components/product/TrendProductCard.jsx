import React from "react";
import "./TrendProductCard.css";

const TrendProductCard = ({
  image = "https://placehold.co/73x98",
  name = "Pikachu Bricks",
  price = "2$",
  cartIcon = "https://placehold.co/15x15",
}) => {
  return (
    <div className="trend-card">
      <div className="trend-card-img-bg">
        <img className="trend-card-img" src={image} alt={name} draggable={false} />
      </div>
      <div className="trend-card-info-row">
        <div className="trend-card-info">
          <div className="trend-card-title">{name}</div>
          <div className="trend-card-price">{price}</div>
        </div>
        <div className="trend-card-cart">
          <img className="trend-card-cart-img" src={cartIcon} alt="cart" draggable={false} />
        </div>
      </div>
    </div>
  );
};

export default TrendProductCard;