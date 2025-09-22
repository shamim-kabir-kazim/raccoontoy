import React, { useRef } from "react";
import "./CategoryShowing.css";
import CatCard from "./CatCard";



// Demo category items with real images
const categories = [
  {
    id: 1,
    image: "https://i.postimg.cc/Hs7kH4Sf/Frame-607.png",
    title: "Marvel Action Figure"
  },
  {
    id: 2,
    image: "https://i.postimg.cc/4N1J6y6Y/dc-action-figure.png",
    title: "DC Action Figure"
  },
    {
    id: 14,
    image: "https://i.postimg.cc/8PP8wJQm/naruto-action-figure.png",
    title: "Anime Action Figure"
  },
  {
    id: 3,
    image: "https://i.postimg.cc/8PP8wJQm/naruto-action-figure.png",
    title: "Naruto Action Figure"
  },
  {
    id: 4,
    image: "https://i.postimg.cc/C5n5r5vD/pokemon-action-figure.png",
    title: "Pokemon Action Figure"
  },
  {
    id: 5,
    image: "https://i.postimg.cc/90n0kJ6v/one-piece-action-figure.png",
    title: "One Piece Action Figure"
  },
  {
    id: 6,
    image: "https://i.postimg.cc/3w7wFz0m/dragon-ballz-action-figure.png",
    title: "Dragon Ballz Action Figure"
  },
  {
    id: 8,
    image: "https://i.postimg.cc/XY8KBxDz/Chat-GPT-Image-Aug-2-2025-04-00-57-PM-1-1.png",
    title: "Doll's"
  },
  {
    id: 9,
    image: "https://i.postimg.cc/XY8KBxDz/super-hero-bricks.png",
    title: "Super Hero Bricks"
  },
  {
    id: 10,
    image: "https://i.postimg.cc/XY8KBxDz/character-bricks.png",
    title: "Character Bricks"
  },
  {
    id: 11,
    image: "https://i.postimg.cc/N0C1pFt8/Chat-GPT-Image-Aug-2-2025-03-49-34-PM-1-2-1.png",
    title: "Key Chain"
  },
  {
    id: 12,
    image: "https://i.postimg.cc/N0C1pFt8/Chat-GPT-Image-Aug-2-2025-03-49-34-PM-1-2-1.png",
    title: "Decorative Items"
  }
];

const CategoryShowing = ({ 
  title = "Popular Categories",
  showAllText = "Show all",
  onShowAllClick 
}) => {
  const scrollContainerRef = useRef(null);

  const handleShowAllClick = () => {
    if (onShowAllClick) {
      onShowAllClick();
    }
  };

  const handleCardClick = (category) => {
    console.log("Category clicked:", category);
    // Handle individual category click
  };

  return (
    <div className="category-section">
      <div className="category-header">
        <span className="category-title">{title}</span>
        <span 
          className="category-show-all" 
          onClick={handleShowAllClick}
        >
          {showAllText}
        </span>
      </div>
      <div 
        className="category-scroll"
        ref={scrollContainerRef}
      >
        {categories.map(cat => (
          <CatCard 
            key={cat.id} 
            image={cat.image} 
            title={cat.title}
            onClick={() => handleCardClick(cat)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryShowing;