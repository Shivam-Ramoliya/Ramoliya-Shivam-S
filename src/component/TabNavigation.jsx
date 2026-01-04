import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const TabNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu state

  const tabs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  const isActiveTab = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    // Close menu after navigating on a mobile device
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-slate-950/50 border-b border-white/10 shadow-lg">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation("/");
            }}
            className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-sky-500 to-emerald-500 whitespace-nowrap shrink-0"
          >
            Shivam S. Ramoliya
          </a>

          {/* Desktop Navigation - Hidden on small/medium, visible on large */}
          <div className="hidden lg:flex items-center ml-auto gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.path}
                onClick={() => handleNavigation(tab.path)}
                className={`px-4 lg:px-6 py-2 whitespace-nowrap text-sm md:text-base font-medium transition-all duration-300 border-b-2 relative group overflow-hidden ${isActiveTab(tab.path)
                  ? "border-emerald-500 text-emerald-400"
                  : "border-transparent text-gray-300 hover:text-emerald-400 hover:border-emerald-400/50"
                  }`}
              >
                {/* Animated background on hover */}
                <span className="absolute inset-0 bg-emerald-500/0 group-hover:bg-emerald-500/5 transition-all duration-300 -z-10"></span>
                {tab.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button (Hamburger) - Visible on small/medium, hidden on large */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-300 p-2 ml-4 md:ml-6"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path // Close icon (X)
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path // Hamburger icon
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown - Conditionally rendered, hidden on large */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-slate-950/70 backdrop-blur-2xl border-t border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {tabs.map((tab) => (
              <button
                key={tab.path}
                onClick={() => handleNavigation(tab.path)}
                className={`block w-full text-left px-3 py-2 rounded-md font-medium text-base transition-colors duration-300 ${isActiveTab(tab.path)
                  ? "bg-emerald-500 text-white shadow-md"
                  : "text-gray-300 hover:bg-white/10 hover:text-emerald-400"
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default TabNavigation;
