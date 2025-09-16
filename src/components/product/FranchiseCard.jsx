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
    <div className="fvb-trend-card">
      {/* Top badges and heart (overlay, absolute) */}
      <div className="fvb-top-section">
        <div className="fvb-badge-wrapper">
          <div className="fvb-discount-badge">{discount}</div>
          {soldOut && <div className="fvb-sold-out">sold out</div>}
        </div>
        <img src={favoriteIcon} alt="favorite" className="fvb-favorite-icon" />
      </div>
      {/* Main vertical layout */}
      <div className="fvb-card-body">
        {/* Image Section (starts at top) */}
        <div className="fvb-img-circle">
          <img src={image} alt={name} className="fvb-product-img" />
        </div>
        {/* Info Section */}
        <div className="fvb-info">
          <div className="fvb-name">{name}</div>
          <div className="fvb-price">
            <span className="fvb-old">{oldPrice}</span>
            <span className="fvb-new">{newPrice}</span>
          </div>
        </div>
        {/* Button Section */}
        <button className="fvb-buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default FranchiseCard;