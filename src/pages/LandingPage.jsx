import React from "react";
import Footer from "../components/Footer";
import BottomNavBar from "../components/BottomNavBar";
import ProductSlider from "../components/product/ProductSlider";
import ProductTrending from "../components/product/ProductTrending";
import "./LandingPage.css";
import CategoryShowing from "../components/product/CategoryShowing";
import FranchiseSection from "../components/product/FranchiseSection";

const LandingPage = () => {
  return (
    <div className="landing-root">
      {/* Header is now only in App.jsx */}
      <main className="landing-main">
        <ProductSlider />
      </main>
      <ProductTrending />
      <CategoryShowing />
      <FranchiseSection/>
      <Footer />
      <BottomNavBar />
    </div>
  );
};

export default LandingPage;