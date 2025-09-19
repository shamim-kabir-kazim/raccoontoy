import React, { useState, useEffect, useRef } from "react";
import "./SorryPopup.css";

const SorryPopup = () => {
  const [visible, setVisible] = useState(true);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setVisible(false);
      }
    };
    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="sorry-popup-overlay">
      <div className="Frame601" ref={popupRef}>
        <div className="StSection">
          <div className="IconBox" onClick={() => setVisible(false)}>
            <img
              className="CrossIcon"
              src="https://i.postimg.cc/zfgvQN4R/cross-svgrepo-com.png"
              alt="Close"
            />
          </div>
        </div>
        <div className="NdSection">
          <div className="RowSec1">
            <img
              className="Img"
              src="https://i.postimg.cc/L6Qs6hp1/img.png"
              alt="Sorry"
            />
            <div className="Text1">SORRY</div>
          </div>
          <div className="RowSec2">
            <div className="DescriptionText">
              Our website is still under development!
              <br />
              Please don’t hate us. We are still active on social media, so you can find us there. 💜
            </div>
          </div>
          <div className="RowSec3">
            <div className="VisitDiv">
              <div className="Text">Visit</div>
            </div>
            <div className="IconDiv">
              <img className="Icon1" src="https://i.postimg.cc/3NPbngGG/icon-1.png" alt="icon1" />
              <img className="Icon2" src="https://i.postimg.cc/ZYggbhQq/icon-2.png" alt="icon2" />
              <img className="Icon3" src="https://i.postimg.cc/GmN9ztgC/tiktok-logo-bold-svgrepo-com.png" alt="icon3" />
              <img className="Icon4" src="https://i.postimg.cc/QtZCGPrY/whatsapp-svgrepo-com.png" alt="icon4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SorryPopup;