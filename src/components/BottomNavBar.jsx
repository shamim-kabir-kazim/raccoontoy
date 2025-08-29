import React from "react";
import "./BottomNavBar.css";

const BottomNavBar = () => {
  return (
    <nav className="bottom-nav-bar">
      <div className="nav-item active">
        {/* Store Icon */}
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <g stroke="#ffc300" strokeWidth="2.5" strokeLinejoin="round">
            <rect x="7" y="16" width="28" height="17" rx="2" />
            <path d="M7 16V12.5A3.5 3.5 0 0 1 10.5 9h21A3.5 3.5 0 0 1 35 12.5V16" />
            <path d="M14 25h6v8h-6z" />
          </g>
        </svg>
        <span className="nav-label active">Store</span>
      </div>
      <div className="nav-item">
        {/* Favorite Icon */}
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <path
            d="M21 35s-11-8.2-11-15.1C10 14.3 13.7 11 18 11c2.1 0 4.2 1.1 5 3 0.8-1.9 2.9-3 5-3 4.3 0 8 3.3 8 8.9C32 26.8 21 35 21 35z"
            stroke="#111"
            strokeWidth="2.5"
            fill="none"
          />
        </svg>
        <span className="nav-label">Favorite</span>
      </div>
      <div className="nav-item">
        {/* Account Icon */}
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <circle cx="21" cy="16" r="6" stroke="#111" strokeWidth="2.5" fill="none"/>
          <path d="M10 32a11 11 0 0 1 22 0" stroke="#111" strokeWidth="2.5" fill="none"/>
        </svg>
        <span className="nav-label">Account</span>
      </div>
      <div className="nav-item">
        {/* Cart Icon */}
        <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
          <g stroke="#111" strokeWidth="2.5">
            <circle cx="15.5" cy="33.5" r="2.5" fill="none"/>
            <circle cx="31.5" cy="33.5" r="2.5" fill="none"/>
            <path d="M11 12h23l-3 13H15" fill="none"/>
          </g>
        </svg>
        <span className="nav-label">Cart</span>
      </div>
    </nav>
  );
};

export default BottomNavBar;