import React, { useRef } from "react";
import "./CategoryShowing.css";
import CatCard from "./CatCard";

// Demo category items with real images
const categories = [
  {
    id: 1,
    image: "https://i.postimg.cc/N0C1pFt8/Chat-GPT-Image-Aug-2-2025-03-49-34-PM-1-2-1.png",
    title: "Pikachu Bricks"
  },
  {
    id: 2,
    image: "https://i.postimg.cc/nLh447yc/Chat-GPT-Image-Aug-2-2025-03-56-54-PM-1-1.png",
    title: "Charmander Bricks"
  },
  {
    id: 3,
    image: "https://i.postimg.cc/XY8KBxDz/Chat-GPT-Image-Aug-2-2025-04-00-57-PM-1-1.png",
    title: "Black Panther"
  },
  {
    id: 4,
    image: "https://i.postimg.cc/N0C1pFt8/Chat-GPT-Image-Aug-2-2025-03-49-34-PM-1-2-1.png",
    title: "Eevee Plush"
  },
  {
    id: 5,
    image: "https://i.postimg.cc/nLh447yc/Chat-GPT-Image-Aug-2-2025-03-56-54-PM-1-1.png",
    title: "Squirtle Toy"
  },
  {
    id: 6,
    image: "https://i.postimg.cc/XY8KBxDz/Chat-GPT-Image-Aug-2-2025-04-00-57-PM-1-1.png",
    title: "Psyduck Figure"
  },
  {
    id: 7,
    image: "https://i.postimg.cc/N0C1pFt8/Chat-GPT-Image-Aug-2-2025-03-49-34-PM-1-2-1.png",
    title: "Jigglypuff Doll"
  },
  {
    id: 8,
    image: "https://i.postimg.cc/nLh447yc/Chat-GPT-Image-Aug-2-2025-03-56-54-PM-1-1.png",
    title: "Meowth Model"
  }
];

const CategoryShowing = ({ 
  title = "Categories",
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