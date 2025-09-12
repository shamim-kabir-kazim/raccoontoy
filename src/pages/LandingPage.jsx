import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNavBar from "../components/BottomNavBar";
import ProductSlider from "../components/product/ProductSlider";
import ProductTrending from "../components/product/ProductTrending";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-root">
      <Header />
      <main className="landing-main">
        <ProductSlider />
        
      </main>
      <ProductTrending />
      <Footer />
      <BottomNavBar />
    </div>
  );
};

export default LandingPage;