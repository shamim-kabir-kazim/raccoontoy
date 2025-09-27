import React, { useState, useEffect } from "react";
import "./NotiCard.css";

export default function NotiCard({
  title = "Raccoon Toy",
  message = "Welcome to Raccoon Toy",
  time = "2:20PM",
  iconSrc = "https://placehold.co/39x39",
  onClick,
  className = "",
}) {
  // Device detection for iOS optimizations
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const iOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    setIsIOS(iOS);
  }, []);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={`noti-card ${isIOS ? 'ios-device' : ''} ${className}`}
      onClick={handleClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyPress={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      } : undefined}
    >
      <div className="noti-card-icon-wrapper">
        <img 
          className="noti-card-icon" 
          src={iconSrc} 
          alt={`${title} notification icon`}
          onError={(e) => {
            e.target.src = "https://placehold.co/39x39";
          }}
        />
      </div>
      
      <div className="noti-card-content">
        <div className="noti-card-text-section">
          <div className="noti-card-title">{title}</div>
          <div className="noti-card-message">{message}</div>
        </div>
        
        <div className="noti-card-time-section">
          <div className="noti-card-time">{time}</div>
        </div>
      </div>
    </div>
  );
}