import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import SorryPopup from "./components/SorryPopup";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotificationPage from "./pages/NotificationPage"; // ADD THIS IMPORT
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
      {/* Conditionally render Header */}
      <Routes>
        <Route path="/notifications" element={null} /> {/* No header on noti page */}
        <Route path="*" element={<Header onMenuClick={() => setShowMenu(true)} />} />
      </Routes>
      
      <SideMenu open={showMenu} onClose={() => setShowMenu(false)} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/notifications" element={<NotificationPage />} /> {/* ADD THIS ROUTE */}
        {/* Add more routes here as your app grows */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;