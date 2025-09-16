import React from "react";
import FranchiseCard from "./FranchiseCard";
import "./FranchiseSection.css";

const demoItems = [
  {
    discount: "20%",
    soldOut: false,
    image: "https://placehold.co/153x202/91A7FF/000?text=Toy+1",
    name: "Toy Franchise 1",
    subtitle: "Category A",
    oldPrice: "500৳",
    newPrice: "400৳",
    favoriteIcon: "https://placehold.co/21x21/FFD700/000?text=★",
  },
  {
    discount: "15%",
    soldOut: true,
    image: "https://placehold.co/153x202/FFB347/000?text=Toy+2",
    name: "Toy Franchise 2",
    subtitle: "Category B",
    oldPrice: "600৳",
    newPrice: "510৳",
    favoriteIcon: "https://placehold.co/21x21/FFD700/000?text=★",
  },
  {
    discount: "50%",
    soldOut: false,
    image: "https://placehold.co/153x202/90EE90/000?text=Toy+3",
    name: "Toy Franchise 3",
    subtitle: "Category C",
    oldPrice: "1000৳",
    newPrice: "500৳",
    favoriteIcon: "https://placehold.co/21x21/FFD700/000?text=★",
  },
  {
    discount: "10%",
    soldOut: false,
    image: "https://placehold.co/153x202/E57373/000?text=Toy+4",
    name: "Toy Franchise 4",
    subtitle: "Category D",
    oldPrice: "450৳",
    newPrice: "405৳",
    favoriteIcon: "https://placehold.co/21x21/FFD700/000?text=★",
  },
];

const FranchiseSection = () => {
  return (
    <div className="franchise-section-main">
    <div className="franchise-section">
      <img
        className="franchise-logo"
        src="https://i.postimg.cc/VLFMJkBK/pngwing-com-1.png"
        alt="Franchise Logo"
      />
      <div className="franchise-items-grid">
        {demoItems.slice(0, 4).map((item, idx) => (
          <FranchiseCard key={idx} {...item} />
        ))}
      </div>
      <button className="franchise-show-more-btn">
        <span>Show more</span>
      </button>
    </div>
    </div>
  );
};

export default FranchiseSection;