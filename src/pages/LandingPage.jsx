import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNavBar from "../components/BottomNavBar";
import ProductSlider from "../components/product/ProductSlider";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-root">
      <Header />
      <main className="landing-main">
        <ProductSlider />
      </main>
      <Footer />
      <BottomNavBar />
    </div>
  );
};

export default LandingPage;