import React, { useState, useRef, useEffect } from "react";
import "./ProductSlider.css";

const products = [
  {
    name: "Cute Raccoon Plush",
    price: 19,
    image: "https://i.postimg.cc/N0C1pFt8/Chat-GPT-Image-Aug-2-2025-03-49-34-PM-1-2-1.png",
  },
  {
    name: "Raccoon Bubble Toy",
    price: 22,
    image: "https://i.postimg.cc/nLh447yc/Chat-GPT-Image-Aug-2-2025-03-56-54-PM-1-1.png",
  },
  {
    name: "Raccoon Robot Figure",
    price: 28,
    image: "https://i.postimg.cc/XY8KBxDz/Chat-GPT-Image-Aug-2-2025-04-00-57-PM-1-1.png",
  },
];

const AUTO_SLIDE_INTERVAL = 4000;

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const autoSlideRef = useRef();

  // Auto slide
  useEffect(() => {
    autoSlideRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % products.length);
      setIsFavorite(false);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(autoSlideRef.current);
  }, [products.length]);

  // Swipe logic
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          // Swipe left
          setCurrent((prev) => (prev + 1) % products.length);
          setIsFavorite(false);
        } else {
          // Swipe right
          setCurrent((prev) => (prev - 1 + products.length) % products.length);
          setIsFavorite(false);
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const leftIdx = (current - 1 + products.length) % products.length;
  const rightIdx = (current + 1) % products.length;

  function handleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  return (
    <div
      className="Slidermain"
      data-layer="slidermain"
    >
      <div
        className="Imagesection"
        data-layer="imagesection"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          className="LeftsideSmallImg"
          data-layer="leftside-small-img"
          src={products[leftIdx].image}
          alt="left"
          draggable={false}
        />
        <div className="Frame588" data-layer="Frame 588">
          <img
            className="BigMainImg"
            data-layer="big-main-img"
            src={products[current].image}
            alt={products[current].name}
            draggable={false}
          />
          <div className="Nameandbuttonsection" data-layer="nameandbuttonsection">
            <div className="NameAndPriceBox" data-layer="name-and-price-box">
              <div className="NameText" data-layer="name-text">
                {products[current].name}
              </div>
              <div className="PriceText" data-layer="price-text">
                {products[current].price}$
              </div>
            </div>
            <div className="OrderButtonAndFvrtIcon" data-layer="order-button-and-fvrt-icon">
              <button className="PrderButton" data-layer="prder-button">
                <span className="OrderBtnText">Order</span>
                <span className="OrderBtnArrow">
                  {/* Right arrow SVG */}
                  <svg width="15" height="15" viewBox="0 0 20 20" fill="none">
                    <path d="M7 5L12 10L7 15" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <button
                className={`FvrtIcon${isFavorite ? " favorited" : ""}`}
                data-layer="fvrt-icon"
                onClick={handleFavorite}
                aria-label="Favorite"
                type="button"
              >
                <img
                  className="IconImg"
                  data-layer="icon-img"
                  src={
                    isFavorite
                      ? "https://i.postimg.cc/TwcJ5G7D/love-svgrepo-com-3.png"
                      : "https://i.postimg.cc/Kzb5Y4Nb/love-svgrepo-com-2.png"
                  }
                  alt="fav"
                  draggable={false}
                />
              </button>
            </div>
          </div>
        </div>
        <img
          className="RightsideSmallImg"
          data-layer="rightside-small-img"
          src={products[rightIdx].image}
          alt="right"
          draggable={false}
        />
      </div>
    </div>
  );
}