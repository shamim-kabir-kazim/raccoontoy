import React, { useState } from "react";
import NotiCard from "../components/notification/NotiCard";
import BottomNavBar from "../components/BottomNavBar";
import "./NotificationPage.css";

// Expanded list of 13 notifications
const notifications = [
  { title: "Welcome to RaccoonToy!", message: "We're so excited to have you here. Explore our collection and find your new favorite toy!", time: "2:30 PM", iconSrc: "https://i.postimg.cc/d1mjs1sK/raccoon-svgrepo-com.png", type: "all" },
  { title: "Flash Sale Alert!", message: "For the next 3 hours, get 40% off on all action figures. Don't miss out!", time: "1:15 PM", iconSrc: "https://i.postimg.cc/mD4xVjC9/sale-tag-svgrepo-com.png", type: "offer" },
  { title: "Your Order Has Shipped!", message: "Your order #RT98765 has been shipped and is on its way. Track it here: https://example.com/track", time: "11:50 AM", iconSrc: "https://i.postimg.cc/P5gB1g3J/package-svgrepo-com.png", type: "all" },
  { title: "New Blog Post", message: "Check out our latest article on 'The Top 10 Educational Toys for Toddlers'. Read more at https://raccoontoy.com/blog", time: "Yesterday", iconSrc: "https://i.postimg.cc/d1mjs1sK/raccoon-svgrepo-com.png", type: "all" },
  { title: "Weekend Deal", message: "Buy one, get one free on all board games this weekend only!", time: "2 days ago", iconSrc: "https://i.postimg.cc/mD4xVjC9/sale-tag-svgrepo-com.png", type: "offer" },
  { title: "Account Update", message: "Your profile information has been successfully updated.", time: "2 days ago", iconSrc: "https://i.postimg.cc/JhftfX2b/account-avatar-person-svgrepo-com-1.png", type: "all" },
  { title: "Item Back in Stock", message: "The Raccoon Racer Pro you wanted is now back in stock. Grab it before it's gone again!", time: "3 days ago", iconSrc: "https://i.postimg.cc/P5gB1g3J/package-svgrepo-com.png", type: "all" },
  { title: "Holiday Special", message: "Our holiday gift guide is here! Find the perfect presents for everyone on your list.", time: "4 days ago", iconSrc: "https://i.postimg.cc/mD4xVjC9/sale-tag-svgrepo-com.png", type: "offer" },
  { title: "Security Alert", message: "A new device has logged into your account. If this wasn't you, please secure your account immediately.", time: "5 days ago", iconSrc: "https://i.postimg.cc/zBsXgLMP/notification-svgrepo-com-3.png", type: "all" },
  { title: "Your Review Was Published", message: "Thanks for your review on the 'Galaxy Explorer' set! We appreciate your feedback.", time: "6 days ago", iconSrc: "https://i.postimg.cc/JhftfX2b/account-avatar-person-svgrepo-com-1.png", type: "all" },
  { title: "A Special Gift For You", message: "As a thank you, we've added 100 loyalty points to your account. Enjoy!", time: "1 week ago", iconSrc: "https://i.postimg.cc/mD4xVjC9/sale-tag-svgrepo-com.png", type: "offer" },
  { title: "We Miss You!", message: "It's been a while. Come back and check out what's new. Here's a 10% off coupon on us: WELCOMEBACK10", time: "2 weeks ago", iconSrc: "https://i.postimg.cc/d1mjs1sK/raccoon-svgrepo-com.png", type: "all" },
  { title: "Cart Reminder", message: "You left some items in your cart. Don't wait too long, they might sell out!", time: "3 weeks ago", iconSrc: "https://i.postimg.cc/HLqjqMhw/cart-shopping-svgrepo-com-2.png", type: "all" }
];

export default function NotificationPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [readIndices, setReadIndices] = useState(new Set()); // Tracks read notifications

  const handleCardClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    // Mark the notification as read when it's clicked
    if (!readIndices.has(index)) {
      const newReadIndices = new Set(readIndices);
      newReadIndices.add(index);
      setReadIndices(newReadIndices);
    }
  };

  const filteredNotifications = notifications.filter((noti) => {
    if (activeTab === "offers") {
      return noti.type === "offer";
    }
    return true;
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
              isExpanded={expandedIndex === index}
              isRead={readIndices.has(index)} // Pass read status
              onCardClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
}