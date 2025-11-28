import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import { useAuth } from "../../context/useAuth";

const NavbarWrapper: React.FC = () => {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  // Hide Navbar on admin dashboard pages (paths starting with /dashboard)
  const isAdminDashboard = location.pathname.startsWith("/dashboard");

  // Don't show Navbar on admin dashboard pages
  if (isAdminDashboard) {
    return null;
  }

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  return <Navbar isLoggedIn={isAuthenticated} forceScrolled={!isHomePage} />;
};

export default NavbarWrapper;
