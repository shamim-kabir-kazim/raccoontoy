import React, { useState } from "react";
import NotiCard from "../components/notification/NotiCard";
import BottomNavBar from "../components/BottomNavBar";
import "./NotificationPage.css";

// Sample data for notifications
const notifications = [
  {
    title: "Special Offer!",
    message: "Get 25% off on all new arrivals this weekend.",
    time: "10:30 AM",
    iconSrc: "https://i.postimg.cc/mD4xVjC9/sale-tag-svgrepo-com.png",
    type: "offer",
  },
  {
    title: "Order Shipped",
    message: "Your order #RT58291 has been shipped.",
    time: "Yesterday",
    iconSrc: "https://i.postimg.cc/P5gB1g3J/package-svgrepo-com.png",
    type: "all",
  },
  {
    title: "Welcome to Raccoon Toy",
    message: "We're so glad to have you with us!",
    time: "3 days ago",
    iconSrc: "https://i.postimg.cc/d1mjs1sK/raccoon-svgrepo-com.png",
    type: "all",
  },
  {
    title: "Flash Sale",
    message: "Limited time: 50% off on selected items.",
    time: "1 week ago",
    iconSrc: "https://i.postimg.cc/mD4xVjC9/sale-tag-svgrepo-com.png",
    type: "offer",
  },
];

export default function NotificationPage() {
  const [activeTab, setActiveTab] = useState("all"); // 'all' or 'offers'

  const filteredNotifications = notifications.filter((noti) => {
    if (activeTab === "offers") {
      return noti.type === "offer";
    }
    return true; // 'all' tab shows all notifications
  });

  return (
    <div className="main-container">
      <div className="notification-page-container">
        <div className="toggle-section">
          <div
            className={`toggle-button ${activeTab === "all" ? "active" : ""}`}
            onClick={() => setActiveTab("all")}
          >
            All
          </div>
          <div
            className={`toggle-button ${activeTab === "offers" ? "active" : ""}`}
            onClick={() => setActiveTab("offers")}
          >
            Offers
          </div>
        </div>

        <div className="noti-list">
          {filteredNotifications.map((noti, index) => (
            <NotiCard
              key={index}
              title={noti.title}
              message={noti.message}
              time={noti.time}
              iconSrc={noti.iconSrc}
              onClick={() => console.log(`Notification clicked: ${noti.title}`)}
            />
          ))}
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
}