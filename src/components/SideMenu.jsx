import React, { useRef } from "react";
import "./SideMenu.css";

const categories = [
  "Car Bricks",
  "Action Figure Bricks",
  "Bike Bricks"
];

const fandoms = [
  "Marvel",
  "One Piece",
  "Demon Slayer"
];

// You should replace this with your real authentication system!
export default function SideMenu({ open, onClose, isLoggedIn = false }) {
  // Swipe to close
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (
      touchStartX.current !== null &&
      touchEndX.current - touchStartX.current > 60 // Swiped right
    ) {
      onClose();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Handlers for sign in/sign up
  const handleSignIn = () => {
    // Implement your sign in logic/modal
    alert("Sign In clicked!");
  };
  const handleSignUp = () => {
    // Implement your sign up logic/modal
    alert("Sign Up clicked!");
  };

  return (
    <>
      <div
        className={`SideMenu-backdrop${open ? " show" : ""}`}
        onClick={onClose}
        tabIndex={-1}
        aria-hidden={!open}
      />
      <aside
        className={`SideMenu slide${open ? " open" : ""}`}
        data-layer="side-menu"
        tabIndex={-1}
        aria-hidden={!open}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="SideMenu-content">
          {/* Logo Section */}
          <div className="LogoDiv" data-layer="logo-div">
            <img
              className="Logo"
              data-layer="logo"
              src="https://i.postimg.cc/2SBv2Rgv/Frame-305-1-2-1-2.png"
              alt="Logo"
            />
          </div>

          {/* Row 1: Home & Offer */}
          <div className="MenuRow row-1">
            <div className="HomeDiv" data-layer="home-div">
              <img
                className="HomeIcon"
                data-layer="home-icon"
                src="https://i.postimg.cc/xCGqMLj7/home-svgrepo-com-1.png"
                alt="Home"
              />
              <div className="HomeText" data-layer="home-text">Home</div>
            </div>
            <img
              className="OfferDiv"
              data-layer="offer-div"
              src="https://i.postimg.cc/FKLYF2Mh/image-15.png"
              alt="Offer"
            />
          </div>

          {/* Row 2: Categories */}
          <div className="MenuRow row-2">
            <div className="CategoryDiv" data-layer="category-div">
              <div className="CategoryDivHeader" data-layer="category-div-header">
                <div className="CategoriesHeaderTitle" data-layer="Categories-header-title">
                  Categories
                </div>
                <img
                  className="CategoryDropDownIcon"
                  data-layer="category-drop-down-icon"
                  src="https://i.postimg.cc/vZj1sQSP/arrow-drop-down-big-svgrepo-com.png"
                  alt="Dropdown"
                />
              </div>
              <div className="CategoryMenuList" data-layer="category-menu-list">
                {categories.map((cat) => (
                  <div className="CategoryMenuItems" data-layer="Category-menu-items" key={cat}>
                    <div className="CategoryMenuItemsRadioButton" data-layer="category-menu-items-radio-button"></div>
                    <div className="CategoryMenuItemsName" data-layer="category-menu-items-name">{cat}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3: Fandoms */}
          <div className="MenuRow row-3">
            <div className="FandomsDiv" data-layer="fandoms-div">
              <div className="FandomsHeaderSection" data-layer="fandoms-header-section">
                <div className="FandomsHeaderTitle" data-layer="Fandoms-header-title">
                  Fandoms
                </div>
                <img
                  className="FandomsDropdownIcon"
                  data-layer="fandoms-dropdown-icon"
                  src="https://i.postimg.cc/vZj1sQSP/arrow-drop-down-big-svgrepo-com.png"
                  alt="Dropdown"
                />
              </div>
              <div className="FandomsMenuList" data-layer="fandoms-menu-list">
                {fandoms.map((fan) => (
                  <div className="FandomsMenuItems" data-layer="fandoms-menu-items" key={fan}>
                    <div className="FandomsMenuItemsRadioButton" data-layer="fandoms-menu-items-radio-button"></div>
                    <div className="FandomsMenuItemsName" data-layer="fandoms-menu-items-name">{fan}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 4: Favorite & About */}
          <div className="MenuRow row-4">
            <div className="FaviteDiv" data-layer="favite-div">
              <img
                className="FavIcon"
                data-layer="fav-icon"
                src="https://i.postimg.cc/fTzS7q9v/love-tag-svgrepo-com-2.png"
                alt="Favorite"
              />
              <div className="FavoriteText" data-layer="Favorite-text">Favorite</div>
            </div>
            <div className="AboutDiv" data-layer="about-div">
              <img
                className="AboutIcon"
                data-layer="about-icon"
                src="https://i.postimg.cc/m2mzm33W/about-filled-svgrepo-com.png"
                alt="About"
              />
              <div className="AboutUsText" data-layer="About Us-text">About Us</div>
            </div>
          </div>

          {/* Row 5: Account/Logout (only when logged in) */}
          {isLoggedIn && (
            <div className="MenuRow row-5">
              <div className="AccountLogutDiv" data-layer="account-logut-div">
                <div className="UserProfileImg" data-layer="user-profile-img"></div>
                <img
                  className="LogoutIcon"
                  data-layer="logout-icon"
                  src="https://i.postimg.cc/kGc63Kk8/logout-svgrepo-com-1.png"
                  alt="Logout"
                />
                <div className="UserName" data-layer="user-name">Shamim Kabir</div>
              </div>
            </div>
          )}

          {/* Row 6: Sign In / Sign Up (only when not logged in) */}
          {!isLoggedIn && (
            <div className="MenuRow row-6">
              <div className="AuthButtonsDiv">
                <button className="AuthButton SignInButton" onClick={handleSignIn}>
                  Sign In
                </button>
                <button className="AuthButton SignUpButton" onClick={handleSignUp}>
                  Sign Up
                </button>
              </div>
            </div>
          )}

        </div>
      </aside>
    </>
  );
}