import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef();

  // Focus the input if search bar is shown
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  // Handle outside click to close search bar
  useEffect(() => {
    if (!showSearch) return;
    const handler = (e) => {
      if (
        inputRef.current &&
        !inputRef.current.parentNode.contains(e.target)
      ) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [showSearch]);

  return (
    <header className="raccoon-header">
      <div className="header-row header-row-top">
        <div className="header-col header-col-left">
          {/* Left icon (menu or user) */}
          <button className="header-icon-btn" aria-label="Menu">
            <svg width="34" height="34" viewBox="0 0 34 34">
              <circle cx="17" cy="17" r="15" fill="#fff" stroke="#222" strokeWidth="2" />
              <rect x="10" y="16" width="14" height="2.5" rx="1.2" fill="#222"/>
              <rect x="10" y="10.5" width="14" height="2.5" rx="1.2" fill="#222"/>
              <rect x="10" y="21.5" width="14" height="2.5" rx="1.2" fill="#222"/>
            </svg>
          </button>
        </div>
        <div className="header-col header-col-center">
          {/* Logo image */}
          <img src={"https://i.postimg.cc/2SBv2Rgv/Frame-305-1-2-1-2.png"} alt="Raccoon Toy Logo" className="header-logo-img" />
        </div>
        <div className="header-col header-col-right">
          {/* Search icon */}
          <button
            className="header-icon-btn"
            aria-label="Search"
            onClick={() => setShowSearch(s => !s)}
          >
            <svg width="34" height="34" viewBox="0 0 40 40">
              <circle cx="20" cy="20" r="12" stroke="#222" strokeWidth="3" fill="none"/>
              <line x1="31" y1="31" x2="25" y2="25" stroke="#222" strokeWidth="3" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
      <div className={`header-row header-row-search${showSearch ? " show" : ""}`}>
        <input
          ref={inputRef}
          type="text"
          className="header-search-input"
          placeholder="Search for toys, sets, or brands..."
          aria-label="Search"
        />
      </div>
    </header>
  );
};

export default Header;