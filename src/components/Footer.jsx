import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-section about">
        <h2>About Us</h2>
        <p>
          Welcome to Raccoon Toy, your one-stop shop for fun, imagination, and endless play! We offer a widehood truly magical. Whether you're shopping for a special gift or adding to a toy collection, Raccoon Toy brings smiles to little faces and happy moments to every home.
        </p>
        <div className="footer-socials">
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
            <span className="footer-social-icon">
              {/* Instagram SVG */}
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="20" stroke="#fff" strokeWidth="2"/>
                <rect x="13" y="13" width="18" height="18" rx="6" stroke="#fff" strokeWidth="2"/>
                <circle cx="22" cy="22" r="5" stroke="#fff" strokeWidth="2"/>
                <circle cx="29" cy="15" r="1" fill="#fff"/>
              </svg>
            </span>
          </a>
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
            <span className="footer-social-icon">
              {/* Facebook SVG */}
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <circle cx="22" cy="22" r="20" stroke="#fff" strokeWidth="2"/>
                <path d="M23 32v-7h2.5l.5-3H23v-2c0-.9.3-1.5 1.6-1.5H26V15.2C25.7 15.1 24.7 15 23.6 15c-2.5 0-4.1 1.5-4.1 4.2V22H17v3h2.5v7h3.5z" fill="#fff"/>
              </svg>
            </span>
          </a>
        </div>
      </div>
      <div className="footer-section information">
        <h3>Information</h3>
        <p>
          Shipping, Refund &amp; Return,<br />
          Terms &amp; Conditions,<br />
          Privacy Policy
        </p>
      </div>
      <div className="footer-section contact">
        <h3>Contact Us</h3>
        <p>
          Phone:+8801533082789<br />
          Email:raccontoy@support.com
        </p>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom-row">
        <span className="footer-copyright">© 2025 Raccoon Toy. All rights reserved.</span>
        <button className="footer-backtotop" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <svg width="36" height="36" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="18" fill="#383838"/>
            <polyline points="11,22 18,15 25,22" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;