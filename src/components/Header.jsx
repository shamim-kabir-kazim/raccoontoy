import React, { useState, useRef, useEffect } from "react";
import "./Header.css";

const menuIcon = "https://i.postimg.cc/MKxGkXMw/menu-alt-1-svgrepo-com-1-1.png";
const searchIcon = "https://i.postimg.cc/t4Zw2Nq4/search-svgrepo-com-1-1.png";
const logoImg = "https://i.postimg.cc/2SBv2Rgv/Frame-305-1-2-1-2.png";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const inputRef = useRef();

  // Focus the input when search bar is shown
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
        {/* Left: Burger Menu */}
        <div className="header-col header-col-left">
          <button className="header-icon-btn" aria-label="Menu">
            <img
              src={menuIcon}
              alt="menu"
              className="header-menu-img"
              draggable={false}
            />
          </button>
        </div>
        {/* Center: Logo */}
        <div className="header-col header-col-center">
          <img
            src={logoImg}
            alt="Raccoon Toy Logo"
            className="header-logo-img extra-large"
            draggable={false}
          />
        </div>
        {/* Right: Search Icon in black round */}
        <div className="header-col header-col-right">
          <button
            className="header-icon-btn header-search-btn"
            aria-label="Search"
            onClick={() => setShowSearch((s) => !s)}
          >
            <span className="header-search-circle">
              <img
                src={searchIcon}
                alt="search"
                className="header-search-img"
                draggable={false}
              />
            </span>
          </button>
        </div>
      </div>
      <div
        className={`header-row header-row-search${
          showSearch ? " show" : ""
        }`}
      >
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