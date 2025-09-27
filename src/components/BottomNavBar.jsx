import React, { useState } from "react";
import "./BottomNavBar.css";
import {
  AiOutlineShop,
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const BottomNavBar = () => {
  const [activeNav, setActiveNav] = useState("Store");

  const navItems = [
    {
      name: "Store",
      icon: <AiOutlineShop />,
    },
    {
      name: "Notification",
      icon: <AiOutlineBell />,
    },
    {
      name: "Account",
      icon: <AiOutlineUser />,
    },
    {
      name: "Cart",
      icon: <AiOutlineShoppingCart />,
    },
  ];

  return (
    <nav className="bottom-nav-bar">
      {navItems.map((item) => (
        <div
          key={item.name}
          className={`nav-item ${activeNav === item.name ? "active" : ""}`}
          onClick={() => setActiveNav(item.name)}
        >
          <div className="nav-icon">{item.icon}</div>
          <span className="nav-label">{item.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNavBar;