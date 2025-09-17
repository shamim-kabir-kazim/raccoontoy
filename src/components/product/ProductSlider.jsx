import React, { useState } from "react";
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

export default function ProductSlider() {
  const [current, setCurrent] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const leftIdx = (current - 1 + products.length) % products.length;
  const rightIdx = (current + 1) % products.length;

  function handleLeft() {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
    setIsFavorite(false);
  }
  function handleRight() {
    setCurrent((prev) => (prev + 1) % products.length);
    setIsFavorite(false);
  }

  function handleFavorite() {
    setIsFavorite((prev) => !prev);
  }

  return (
    <div className="Slidermain">
      <div className="Productslider">
        <div className="Emptysection" />
        <div className="Imagesection">
          <img
            className="LeftsideSmallImg"
            src={products[leftIdx].image}
            alt="left"
          />
          <img
            className="BigMainImg"
            src={products[current].image}
            alt={products[current].name}
          />
          <img
            className="RightsideSmallImg"
            src={products[rightIdx].image}
            alt="right"
          />
        </div>
        <div className="InformationSection">
          <div className="Nameandbuttonsection">
            <div className="NameAndPriceBox">
              <div className="NameText">{products[current].name}</div>
              <div className="PriceText">{products[current].price}$</div>
            </div>
            <div className="OrderButtonAndFvrtIcon">
              <button className="PrderButton">
                <span className="OrderBtnText">Order</span>
                <span className="OrderBtnArrow">{/* Right arrow SVG */}
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M7 5L12 10L7 15" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <button
                className={`FvrtIcon${isFavorite ? " favorited" : ""}`}
                onClick={handleFavorite}
                aria-label="Favorite"
              >
                <img
                  className="IconImg"
                  src={
                    isFavorite
                      ? "https://i.postimg.cc/TwcJ5G7D/love-svgrepo-com-3.png"
                      : "https://i.postimg.cc/Kzb5Y4Nb/love-svgrepo-com-2.png"
                  }
                  alt="fav"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="LeftOverlayDiv">
        <button className="LiftSlideButton" onClick={handleLeft} aria-label="Previous">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none" style={{transform: "rotate(180deg)"}}>
            <path d="M7 5L12 10L7 15" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="RightOverlayDiv">
        <button className="RightSlideButton" onClick={handleRight} aria-label="Next">
          <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
            <path d="M7 5L12 10L7 15" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}