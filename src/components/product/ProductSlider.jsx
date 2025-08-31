import React, { useState, useEffect, useRef } from "react";
import "./ProductSlider.css";

// Demo products with your images
const products = [
  {
    id: 1,
    name: "Cute Raccoon Plush",
    price: 19,
    image: "https://i.postimg.cc/N0C1pFt8/Chat-GPT-Image-Aug-2-2025-03-49-34-PM-1-2-1.png",
  },
  {
    id: 2,
    name: "Raccoon Bubble Toy",
    price: 22,
    image: "https://i.postimg.cc/nLh447yc/Chat-GPT-Image-Aug-2-2025-03-56-54-PM-1-1.png",
  },
  {
    id: 3,
    name: "Raccoon Robot Figure",
    price: 28,
    image: "https://i.postimg.cc/XY8KBxDz/Chat-GPT-Image-Aug-2-2025-04-00-57-PM-1-1.png",
  },
];

const AUTO_SLIDE_INTERVAL = 4000;

const ProductSlider = () => {
  const [current, setCurrent] = useState(1);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Manual navigation resets auto-slide
  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, AUTO_SLIDE_INTERVAL);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
    resetInterval();
  };
  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % products.length);
    resetInterval();
  };

  // Get indices for left, center, right
  const leftIdx = (current - 1 + products.length) % products.length;
  const centerIdx = current;
  const rightIdx = (current + 1) % products.length;

  return (
    <div className="slider-main">
      {/* ROW 1: Images + Slide Buttons in side columns */}
      <div className="slider-row slider-row-images">
        {/* Left column: image with overlaid button */}
        <div className="slider-side-col">
          <div className="side-img-wrapper">
            <img
              src={products[leftIdx].image}
              alt={products[leftIdx].name}
              className="slider-img img-left"
              draggable={false}
              style={{ objectFit: "cover" }}
            />
            <button
              className="slider-btn side-btn left-overlay"
              onClick={handlePrev}
              aria-label="Previous product"
            >
              <svg width="32" height="32" viewBox="0 0 42 42">
                <circle cx="21" cy="21" r="21" fill="#fff" fillOpacity="0.32" />
                <polyline points="25,13 17,21 25,29" fill="none" stroke="#222" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        {/* Center image column (3:4 ratio) */}
        <div className="slider-col slider-col-center">
          <div className="main-image-ratio">
            <img
              src={products[centerIdx].image}
              alt={products[centerIdx].name}
              className="slider-img img-center"
              draggable={false}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        {/* Right column: image with overlaid button */}
        <div className="slider-side-col">
          <div className="side-img-wrapper">
            <img
              src={products[rightIdx].image}
              alt={products[rightIdx].name}
              className="slider-img img-right"
              draggable={false}
              style={{ objectFit: "cover" }}
            />
            <button
              className="slider-btn side-btn right-overlay"
              onClick={handleNext}
              aria-label="Next product"
            >
              <svg width="32" height="32" viewBox="0 0 42 42">
                <circle cx="21" cy="21" r="21" fill="#fff" fillOpacity="0.32" />
                <polyline points="17,13 25,21 17,29" fill="none" stroke="#222" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ROW 2: Name + Price */}
      <div className="slider-row slider-row-info">
        <div className="slider-title">{products[centerIdx].name}</div>
        <div className="slider-price">
          {products[centerIdx].price}
          <span className="slider-currency">$</span>
        </div>
      </div>

      {/* ROW 3: Actions */}
      <div className="slider-row slider-row-actions">
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