import React from "react";
import "./TrendProductCard.css";

const TrendProductCard = ({
  discount = "50%",
  soldOut = true,
  image = "https://placehold.co/153x202",
  name = "Name Of the Product",
  subtitle = "Name Of the Product",
  oldPrice = "450৳",
  newPrice = "400৳",
  favoriteIcon = "https://placehold.co/21x21",
}) => {
  return (
    <div className="tren-trend-card">
      {/* Top badges and heart (overlay, absolute) */}
      <div className="tren-top-section">
        <div className="tren-badge-wrapper">
          <div className="tren-discount-badge">{discount}</div>
          {soldOut && <div className="tren-sold-out">sold out</div>}
        </div>
        <img src={favoriteIcon} alt="favorite" className="tren-favorite-icon" />
      </div>
      {/* Main vertical layout */}
      <div className="tren-card-body">
        {/* Image Section (starts at top) */}
        <div className="tren-img-circle">
          <img src={image} alt={name} className="tren-product-img" />
        </div>
        {/* Info Section */}
        <div className="tren-info">
          <div className="tren-name">{name}</div>
          <div className="tren-subtitle">{subtitle}</div>
          <div className="tren-price">
            <span className="tren-old">{oldPrice}</span>
            <span className="tren-new">{newPrice}</span>
          </div>
        </div>
        {/* Button Section */}
        <button className="tren-buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default TrendProductCard;