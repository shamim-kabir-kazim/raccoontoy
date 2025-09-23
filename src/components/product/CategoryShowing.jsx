import React, { useRef } from "react";
import "./CategoryShowing.css";
import CatCard from "./CatCard";

const categories = [
  {
    id: 1,
    image: "https://i.postimg.cc/Hs7kH4Sf/Frame-607.png",
    title: "Marvel Action Figure"
  },
  {
    id: 2,
    image: "https://i.postimg.cc/658FgZ6p/Gemini-Generated-Image-pshaeapshaeapsha-1.png",
    title: "DC Action Figure"
  },
  {
    id: 14,
    image: "https://i.postimg.cc/4xJ2Zhsc/O1-CN01-FX1d-JG1-OBz-Q0sm7dd-2214634361668-0-cib.png",
    title: "Anime Action Figure"
  },
  {
    id: 3,
    image: "https://i.postimg.cc/L6fhRnNm/Naruto-set.png",
    title: "Naruto Action Figure"
  },
  {
    id: 4,
    image: "https://i.postimg.cc/wMDVh9cL/Gemini-Generated-Image-zbfbeozbfbeozbfb-removebg-preview-1.png",
    title: "Pokemon Action Figure"
  },
  {
    id: 5,
    image: "https://i.postimg.cc/nzp76qvj/Gemini-Generated-Image-s39mcs39mcs39mcs-1-removebg-preview.png",
    title: "One Piece Action Figure"
  },
  {
    id: 6,
    image: "https://i.postimg.cc/bvCDF4NM/Adobe-Express-file.png",
    title: "Dragon Ballz Action Figure"
  },
  {
    id: 8,
    image: "https://i.postimg.cc/BnPV6fR5/Adobe-Express-file-1.png",
    title: "Doll's"
  },
  {
    id: 9,
    image: "https://i.postimg.cc/SNR8FWv3/Adobe-Express-file-4.png",
    title: "Super Hero Bricks"
  },
  {
    id: 10,
    image: "https://i.postimg.cc/1RjXFbv7/Gemini-Generated-Image-2gyw412gyw412gyw.png",
    title: "Character Bricks"
  },
  {
    id: 11,
    image: "https://i.postimg.cc/NfGhg06W/Adobe-Express-file-5.png",
    title: "Key Chain"
  },
  {
    id: 12,
    image: "https://i.postimg.cc/dtv6kqBv/Adobe-Express-file-6.png",
    title: "Decorative Items"
  }
];

const CategoryShowing = ({ 
  title = "Popular Categories ⭐",
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