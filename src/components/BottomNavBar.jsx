import React, { useState } from "react";
import "./BottomNavBar.css";

const BottomNavBar = () => {
  const [activeNav, setActiveNav] = useState("Store");

  const navItems = [
    {
      name: "Store",
      inactiveIcon: "https://i.postimg.cc/rm5zMpBr/store-svgrepo-com-1.png",
      activeIcon: "https://i.postimg.cc/76SbwLFJ/store-svgrepo-com-2.png",
    },
    {
      name: "Notification",
      inactiveIcon: "https://i.postimg.cc/zBsXgLMP/notification-svgrepo-com-3.png",
      activeIcon: "https://i.postimg.cc/0QT2w63t/notification-svgrepo-com-1.png",
    },
    {
      name: "Account",
      inactiveIcon: "https://i.postimg.cc/VNx5xtV9/account-avatar-person-svgrepo-com.png",
      activeIcon: "https://i.postimg.cc/JhftfX2b/account-avatar-person-svgrepo-com-1.png",
    },
    {
      name: "Cart",
      inactiveIcon: "https://i.postimg.cc/JhftfX2Z/cart-shopping-svgrepo-com-1.png",
      activeIcon: "https://i.postimg.cc/HLqjqMhw/cart-shopping-svgrepo-com-2.png",
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
          <img
            src={activeNav === item.name ? item.activeIcon : item.inactiveIcon}
            alt={`${item.name} icon`}
            className="nav-icon"
          />
          <span className="nav-label">{item.name}</span>
        </div>
      ))}
    </nav>
  );
};

export default BottomNavBar;