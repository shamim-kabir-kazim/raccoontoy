import React from "react";
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

export default function SideMenu() {
  return (
    <div className="SideMenu" data-layer="side-menu">
      {/* Logo Section */}
      <div className="LogoDiv" data-layer="logo-div">
        <img
          className="Logo"
          data-layer="logo"
          src="https://placehold.co/123x73"
          alt="Logo"
        />
      </div>

      {/* Home & Offer Row */}
      <div className="MenuRow">
        <div className="HomeDiv" data-layer="home-div">
          <img
            className="HomeIcon"
            data-layer="home-icon"
            src="https://placehold.co/40x40"
            alt="Home"
          />
          <div className="HomeText" data-layer="home-text">Home</div>
        </div>
        <img
          className="OfferDiv"
          data-layer="offer-div"
          src="https://placehold.co/126x84"
          alt="Offer"
        />
      </div>

      {/* Categories */}
      <div className="CategoryDiv" data-layer="category-div">
        <div className="CategoryDivHeader" data-layer="category-div-header">
          <div className="CategoriesHeaderTitle" data-layer="Categories-header-title">
            Categories
          </div>
          <img
            className="CategoryDropDownIcon"
            data-layer="category-drop-down-icon"
            src="https://placehold.co/28x28"
            alt="Dropdown"
          />
        </div>
        <div className="CategoryMenuList" data-layer="category-menu-list">
          {categories.map((cat, i) => (
            <div className="CategoryMenuItems" data-layer="Category-menu-items" key={cat}>
              <div className="CategoryMenuItemsRadioButton" data-layer="category-menu-items-radio-button"></div>
              <div className="CategoryMenuItemsName" data-layer="Category-menu-items-name">{cat}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Fandoms */}
      <div className="FandomsDiv" data-layer="fandoms-div">
        <div className="FandomsHeaderSection" data-layer="fandoms-header-section">
          <div className="FandomsHeaderTitle" data-layer="Fandoms-header-title">
            Fandoms
          </div>
          <img
            className="FandomsDropdownIcon"
            data-layer="fandoms-dropdown-icon"
            src="https://placehold.co/28x28"
            alt="Dropdown"
          />
        </div>
        <div className="FandomsMenuList" data-layer="fandoms-menu-list">
          {fandoms.map((fan, i) => (
            <div className="FandomsMenuItems" data-layer="fandoms-menu-items" key={fan}>
              <div className="FandomsMenuItemsRadioButton" data-layer="fandoms-menu-items-radio-button"></div>
              <div className="FandomsMenuItemsName" data-layer="fandoms-menu-items-name">{fan}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Favorite & About Row */}
      <div className="MenuRow bottom-row">
        <div className="FaviteDiv" data-layer="favite-div">
          <img
            className="FavIcon"
            data-layer="fav-icon"
            src="https://placehold.co/40x40"
            alt="Favorite"
          />
          <div className="FavoriteText" data-layer="Favorite-text">Favorite</div>
        </div>
        <div className="AboutDiv" data-layer="about-div">
          <img
            className="AboutIcon"
            data-layer="about-icon"
            src="https://placehold.co/40x40"
            alt="About"
          />
          <div className="AboutUsText" data-layer="About Us-text">About Us</div>
        </div>
      </div>

      {/* Account/Logout */}
      <div className="AccountLogutDiv" data-layer="account-logut-div">
        <div className="UserProfileImg" data-layer="user-profile-img"></div>
        <img
          className="LogoutIcon"
          data-layer="logout-icon"
          src="https://placehold.co/33x33"
          alt="Logout"
        />
        <div className="UserName" data-layer="user-name">Shamim Kabir</div>
      </div>
    </div>
  );
}