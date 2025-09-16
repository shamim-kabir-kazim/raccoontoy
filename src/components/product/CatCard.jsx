import React from "react";
import "./CatCard.css";

const CatCard = ({
  image = "https://placehold.co/73x98",
  title = "Pikachu Bricks"
}) => {
  return (
    <div className="cat-card">
      {/* Image Section */}
      <div className="cat-card-img-box">
        <img className="cat-card-img" src={image} alt={title} />
      </div>
      {/* Info Section */}
      <div className="cat-card-info">
        <div className="cat-card-title">{title}</div>
      </div>
    </div>
  );
};

export default CatCard;