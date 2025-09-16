import React from "react";
import "./FranchiseCard.css";

const FranchiseCard = ({
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
    <div className="trend-card">
      {/* Top badges and heart (overlay, absolute) */}
      <div className="top-section">
        <div className="badge-wrapper">
          <div className="discount-badge">{discount}</div>
          {soldOut && <div className="sold-out">sold out</div>}
        </div>
        <img src={favoriteIcon} alt="favorite" className="favorite-icon" />
      </div>
      {/* Main vertical layout */}
      <div className="card-body">
        {/* Image Section (starts at top) */}
        <div className="img-circle">
          <img src={image} alt={name} className="product-img" />
        </div>
        {/* Info Section */}
        <div className="info">
          <div className="name">{name}</div>
          <div className="subtitle">{subtitle}</div>
          <div className="price">
            <span className="old">{oldPrice}</span>
            <span className="new">{newPrice}</span>
          </div>
        </div>
        {/* Button Section */}
        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default FranchiseCard;