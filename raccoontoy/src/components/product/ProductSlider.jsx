import React, { useState, useEffect, useRef } from "react";
import "./ProductSlider.css";

// Example products (replace these images with your own assets)
const products = [
  {
    id: 1,
    name: "Cat Bricks Toy",
    price: 18,
    image: "/images/cat.png",
  },
  {
    id: 2,
    name: "Pikachu Bricks Toy",
    price: 26,
    image: "/images/pikachu.png",
  },
  {
    id: 3,
    name: "Charmander Bricks Toy",
    price: 20,
    image: "/images/charmander.png",
  },
];

const AUTO_SLIDE_INTERVAL = 4000;

const ProductSlider = () => {
  const [current, setCurrent] = useState(1);
  const intervalRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Manual navigation resets auto-slide
  const handlePrev = () => {
    clearInterval(intervalRef.current);
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, AUTO_SLIDE_INTERVAL);
  };
  const handleNext = () => {
    clearInterval(intervalRef.current);
    setCurrent((prev) => (prev + 1) % products.length);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  // Get indices for left, center, right
  const leftIdx = (current - 1 + products.length) % products.length;
  const centerIdx = current;
  const rightIdx = (current + 1) % products.length;

  return (
    <div className="slider-main">
      <div className="slider-carousel">
        {/* Left Button */}
        <button className="slider-btn left" onClick={handlePrev} aria-label="Previous product">
          <svg width="42" height="42" viewBox="0 0 42 42">
            <circle cx="21" cy="21" r="21" fill="#fff" />
            <polyline points="25,13 17,21 25,29" fill="none" stroke="#222" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>

        {/* Left Image (small) */}
        <img
          src={products[leftIdx].image}
          alt={products[leftIdx].name}
          className="slider-img img-left"
          draggable={false}
        />

        {/* Center Image (big) */}
        <img
          src={products[centerIdx].image}
          alt={products[centerIdx].name}
          className="slider-img img-center"
          draggable={false}
        />

        {/* Right Image (small) */}
        <img
          src={products[rightIdx].image}
          alt={products[rightIdx].name}
          className="slider-img img-right"
          draggable={false}
        />

        {/* Right Button */}
        <button className="slider-btn right" onClick={handleNext} aria-label="Next product">
          <svg width="42" height="42" viewBox="0 0 42 42">
            <circle cx="21" cy="21" r="21" fill="#fff" />
            <polyline points="17,13 25,21 17,29" fill="none" stroke="#222" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Title and Price */}
      <div className="slider-info">
        <div className="slider-title">{products[centerIdx].name}</div>
        <div className="slider-price">{products[centerIdx].price}<span className="slider-currency">$</span></div>
      </div>

      {/* Action Buttons */}
      <div className="slider-actions">
        <button className="order-btn">
          Order <span className="arrow">{'>'}</span>
        </button>
        <button className="fav-btn" aria-label="Add to favorite">
          <svg width="31" height="31" viewBox="0 0 31 31" fill="none">
            <path
              d="M15.5 27s-8-5.8-8-10.7C7.5 12.3 10.3 10 13.5 10c1.5 0 2.9 0.7 3.5 2 0.6-1.3 2-2 3.5-2 3.2 0 6 2.3 6 6.3C23.5 21.2 15.5 27 15.5 27z"
              stroke="#1c1c1e"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;