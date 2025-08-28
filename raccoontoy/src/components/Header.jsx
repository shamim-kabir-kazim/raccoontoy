import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="raccoon-header">
      <div className="header-content">
        <div className="logo-area">
          {/* Raccoon SVG */}
          <svg
            className="raccoon-svg"
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Raccoon Logo"
          >
            {/* Simplified raccoon illustration */}
            <ellipse cx="36" cy="36" rx="30" ry="28" fill="#fff" stroke="#222" strokeWidth="3"/>
            <ellipse cx="26" cy="35" rx="7" ry="12" fill="#aaa" stroke="#222" strokeWidth="2"/>
            <ellipse cx="46" cy="35" rx="7" ry="12" fill="#aaa" stroke="#222" strokeWidth="2"/>
            <ellipse cx="26" cy="36" rx="4" ry="6" fill="#fff"/>
            <ellipse cx="46" cy="36" rx="4" ry="6" fill="#fff"/>
            <circle cx="28" cy="38" r="2" fill="#222"/>
            <circle cx="44" cy="38" r="2" fill="#222"/>
            <ellipse cx="36" cy="46" rx="7" ry="4" fill="#222"/>
            <ellipse cx="19" cy="21" rx="5" ry="7" fill="#ccc" stroke="#222" strokeWidth="2"/>
            <ellipse cx="53" cy="21" rx="5" ry="7" fill="#ccc" stroke="#222" strokeWidth="2"/>
          </svg>
          <span className="raccoon-title">
            <span className="raccoon">RACCOON</span>
            <span className="toy-blocks">
              <span className="block block-red">T</span>
              <span className="block block-green">
                <svg width="22" height="22" viewBox="0 0 22 22">
                  <rect width="22" height="22" rx="2" fill="#2ecc40"/>
                  <rect x="6" y="6" width="10" height="10" rx="2" fill="#fff"/>
                  <rect x="9" y="9" width="4" height="4" rx="1" fill="#2ecc40"/>
                </svg>
              </span>
              <span className="block block-yellow">Y</span>
            </span>
          </span>
        </div>
        <button className="search-btn" aria-label="Search">
          <svg width="40" height="40" viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="12" stroke="#fff" strokeWidth="3" fill="none"/>
            <line x1="31" y1="31" x2="25" y2="25" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;