import React, { useState, useEffect } from "react";
import Linkify from 'react-linkify';
import "./NotiCard.css";

export default function NotiCard({
  title = "Raccoon Toy",
  message = "Welcome to Raccoon Toy",
  time = "2:20PM",
  iconSrc = "https://placehold.co/39x39",
  isExpanded = false,
  isRead = false, // Receive the isRead prop
  onCardClick,
  className = "",
}) {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const iOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    setIsIOS(iOS);
  }, []);

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    }
  };

  const linkDecorator = (href, text, key) => (
    <a 
      href={href} 
      key={key} 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={(event) => event.stopPropagation()}
    >
      {text}
    </a>
  );

  const cardClasses = `
    noti-card 
    ${isIOS ? 'ios-device' : ''} 
    ${isExpanded ? 'expanded' : ''} 
    ${isRead ? 'read' : 'unread'} // Add read/unread classes
    ${className}
  `.trim();

  return (
    <div 
      className={cardClasses}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleCardClick();
        }
      }}
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
          <div className="noti-card-message">
            <Linkify componentDecorator={linkDecorator}>
              {message}
            </Linkify>
          </div>
        </div>
        
        <div className="noti-card-time-section">
          <div className="noti-card-time">{time}</div>
        </div>
      </div>
    </div>
  );
}