import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import SorryPopup from "./components/SorryPopup";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  // Prevent scroll when menu is open
  React.useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <Router>
      <SorryPopup />
      {/* Only ONE Header here */}
      <Header onMenuClick={() => setShowMenu(true)} />
      <SideMenu open={showMenu} onClose={() => setShowMenu(false)} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Add more routes here as your app grows */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;