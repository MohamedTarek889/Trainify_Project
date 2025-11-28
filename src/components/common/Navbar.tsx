import React, { useState, useEffect } from "react";
import {
  HiMenu,
  HiX,
  HiUser,
  HiLightningBolt,
  HiCake,
  HiStar,
  HiCalculator,
} from "react-icons/hi";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import Logo from "../shared/Logo";

interface NavbarProps {
  isLoggedIn?: boolean;
  forceScrolled?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  isLoggedIn = false,
  forceScrolled = false,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get active tab from URL - only if we're on the user-dashboard page
  const isUserDashboard = location.pathname === "/user-dashboard";
  const searchParams = new URLSearchParams(location.search);
  const activeTab = isUserDashboard ? searchParams.get("tab") || "info" : null;

  useEffect(() => {
    if (forceScrolled) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="animate-fade-in-left">
            <Logo
              className={`text-3xl font-bold ${
                isScrolled ? "text-gray-900" : "text-white"
              } transition-all duration-300`}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {/* Calculator Link - Always Visible */}
            <Link
              to="/"
              className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group ${
                location.pathname === "/"
                  ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                  : isScrolled
                  ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                  : "text-white hover:text-[#FF6B35] hover:bg-white/10"
              }`}
            >
              Home
              {location.pathname !== "/" && (
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
              )}
            </Link>
            <Link
              to="/calculator"
              className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group flex items-center gap-2 ${
                location.pathname === "/calculator"
                  ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                  : isScrolled
                  ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                  : "text-white hover:text-[#FF6B35] hover:bg-white/10"
              }`}
            >
              <HiCalculator className="w-4 h-4" />
              Calculator
              {location.pathname !== "/calculator" && (
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
              )}
            </Link>

            {isLoggedIn && (
              <>
                {user?.role !== "admin" && (
                  <>
                    <Link
                      to="/user-dashboard?tab=info"
                      className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group flex items-center gap-2 ${
                        activeTab === "info"
                          ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                          : isScrolled
                          ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                          : "text-white hover:text-[#FF6B35] hover:bg-white/10"
                      }`}
                    >
                      <HiUser className="w-4 h-4" />
                      Info
                      {activeTab !== "info" && (
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                      )}
                    </Link>
                    <Link
                      to="/user-dashboard?tab=workouts"
                      className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group flex items-center gap-2 ${
                        activeTab === "workouts"
                          ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                          : isScrolled
                          ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                          : "text-white hover:text-[#FF6B35] hover:bg-white/10"
                      }`}
                    >
                      <HiLightningBolt className="w-4 h-4" />
                      Workouts
                      {activeTab !== "workouts" && (
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                      )}
                    </Link>
                    <Link
                      to="/user-dashboard?tab=meals"
                      className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group flex items-center gap-2 ${
                        activeTab === "meals"
                          ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                          : isScrolled
                          ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                          : "text-white hover:text-[#FF6B35] hover:bg-white/10"
                      }`}
                    >
                      <HiCake className="w-4 h-4" />
                      Meals
                      {activeTab !== "meals" && (
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                      )}
                    </Link>
                    <Link
                      to="/user-dashboard?tab=plan"
                      className={`relative px-4 py-2 font-medium rounded-lg transition-all duration-300 group flex items-center gap-2 ${
                        activeTab === "plan"
                          ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                          : isScrolled
                          ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                          : "text-white hover:text-[#FF6B35] hover:bg-white/10"
                      }`}
                    >
                      <HiStar className="w-4 h-4" />
                      Plan
                      {activeTab !== "plan" && (
                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF6B35] group-hover:w-1/2 group-hover:left-1/4 transition-all duration-300"></span>
                      )}
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3 animate-fade-in-right">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50 border border-transparent hover:border-[#FF6B35]/20"
                      : "text-white hover:text-[#FF6B35] hover:bg-white/10 border border-white/20 hover:border-[#FF6B35]/50"
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#e55a2b] hover:to-[#d14c1f] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={user?.role === "admin" ? "/dashboard" : "/user-dashboard"}
                  className={`px-6 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50 border border-transparent hover:border-[#FF6B35]/20"
                      : "text-white hover:text-[#FF6B35] hover:bg-white/10 border border-white/20 hover:border-[#FF6B35]/50"
                  }`}
                >
                  {user?.role === "admin" ? "Admin Dashboard" : "My Dashboard"}
                </Link>

                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-red-600 hover:to-red-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Logout
                </button>

                {/* User Info */}
                <div
                  className={`flex items-center gap-2 ml-2 px-3 py-2 rounded-xl transition-all duration-300 ${
                    isScrolled
                      ? "bg-gradient-to-r from-orange-50 to-purple-50 border border-orange-200"
                      : "bg-white/10 backdrop-blur-sm border border-white/20"
                  }`}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">
                      {user?.name.charAt(0).toUpperCase() || "U"}
                    </span>
                  </div>
                  <div className="hidden lg:block">
                    <p
                      className={`text-sm font-medium ${
                        isScrolled ? "text-gray-900" : "text-white"
                      }`}
                    >
                      {user?.name || "User"}
                    </p>
                    <p
                      className={`text-xs capitalize ${
                        isScrolled ? "text-gray-600" : "text-white/90"
                      }`}
                    >
                      {user?.role || "Member"}
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl">
            <div className="px-6 py-4 space-y-3">
              {/* Calculator Link - Always Visible */}
              <Link
                to="/calculator"
                className={`flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                  location.pathname === "/calculator"
                    ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                    : "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <HiCalculator className="w-4 h-4" />
                Calculator
              </Link>

              {isLoggedIn && (
                <>
                  <Link
                    to="/"
                    className={`font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                      location.pathname === "/"
                        ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg flex items-center"
                        : "block text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>

                  {user?.role !== "admin" && (
                    <>
                      <Link
                        to="/user-dashboard?tab=info"
                        className={`flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                          activeTab === "info"
                            ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                            : "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <HiUser className="w-4 h-4" />
                        Info
                      </Link>
                      <Link
                        to="/user-dashboard?tab=workouts"
                        className={`flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                          activeTab === "workouts"
                            ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                            : "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <HiLightningBolt className="w-4 h-4" />
                        Workouts
                      </Link>
                      <Link
                        to="/user-dashboard?tab=meals"
                        className={`flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                          activeTab === "meals"
                            ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                            : "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <HiCake className="w-4 h-4" />
                        Meals
                      </Link>
                      <Link
                        to="/user-dashboard?tab=plan"
                        className={`flex items-center gap-2 font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                          activeTab === "plan"
                            ? "bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] text-white shadow-lg"
                            : "text-gray-700 hover:text-[#FF6B35] hover:bg-orange-50"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <HiStar className="w-4 h-4" />
                        Plan
                      </Link>
                    </>
                  )}
                </>
              )}

              <div className="pt-4 border-t border-gray-200 space-y-3">
                {!isLoggedIn ? (
                  <>
                    <Link
                      to="/login"
                      className="block w-full text-left text-gray-700 font-medium hover:text-[#FF6B35] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="block w-full bg-gradient-to-r from-[#FF6B35] to-[#e55a2b] text-white px-4 py-3 rounded-lg font-medium hover:from-[#e55a2b] hover:to-[#d14c1f] transition-all duration-300 shadow-lg text-center"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    {/* User Info in Mobile */}
                    <div className="flex items-center gap-3 px-3 py-3 bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg mb-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2BC48A] flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-semibold">
                          {user?.name.charAt(0).toUpperCase() || "U"}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {user?.name || "User"}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {user?.email || "user@trainify.com"}
                        </p>
                      </div>
                    </div>

                    <Link
                      to={
                        user?.role === "admin"
                          ? "/dashboard"
                          : "/user-dashboard"
                      }
                      className="block w-full text-left text-gray-700 font-medium hover:text-[#FF6B35] hover:bg-orange-50 px-3 py-2 rounded-lg transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {user?.role === "admin"
                        ? "Admin Dashboard"
                        : "My Dashboard"}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="block w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg font-medium hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
