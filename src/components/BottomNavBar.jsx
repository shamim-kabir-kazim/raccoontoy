import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BottomNavBar.css";
import {
  AiOutlineShop,
  AiOutlineBell,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      name: "Store",
      icon: <AiOutlineShop />,
      path: "/",
    },
    {
      name: "Notification",
      icon: <AiOutlineBell />,
      path: "/notifications",
    },
    {
      name: "Account",
      icon: <AiOutlineUser />,
      path: "/account", // Example path, adjust as needed
    },
    {
      name: "Cart",
      icon: <AiOutlineShoppingCart />,
      path: "/cart", // Example path, adjust as needed
    },
  ];

  return (
    <nav className="bottom-nav-bar">
      {navItems.map((item) => (
        <div
          key={item.name}
          className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
          onClick={() => navigate(item.path)}
        >
          <div className="nav-icon">{item.icon}</div>
          <span className="nav-label">{item.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNavBar;