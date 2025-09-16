import React from "react";
import "./CategoryShowing.css";
import CatCard from "./CatCard";

// Demo category items
const categories = [
  {
    id: 1,
    image: "https://placehold.co/73x98?text=Pikachu",
    title: "Pikachu Bricks"
  },
  {
    id: 2,
    image: "https://placehold.co/73x98?text=Charmander",
    title: "Charmander Bricks"
  },
  {
    id: 3,
    image: "https://placehold.co/73x98?text=Eevee",
    title: "Eevee Plush"
  },
  {
    id: 4,
    image: "https://placehold.co/73x98?text=Bulbasaur",
    title: "Bulbasaur Blocks"
  },
  {
    id: 5,
    image: "https://placehold.co/73x98?text=Squirtle",
    title: "Squirtle Toy"
  }
];

const CategoryShowing = () => {
  return (
    <div className="category-section">
      <div className="category-header">
        <span className="category-title">Categories</span>
        <span className="category-show-all">Show all</span>
      </div>
      <div className="category-scroll">
        {categories.map(cat => (
          <CatCard key={cat.id} image={cat.image} title={cat.title} />
        ))}
      </div>
    </div>
  );
};

export default CategoryShowing;