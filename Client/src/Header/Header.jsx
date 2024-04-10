import { ToggleTheme } from "./ToggleTheme";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

// Define navigation tabs with their names and path for routing
const tabs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "News", path: "/news" },
  { name: "FAQ", path: "/faq" },
];

// Header component definition
export const Header = () => {
  // State to keep track of the menu's open/close status
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Function to toggle the menu's open/close status
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      id="header"
      className="bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-neutral-900 via-zinc-900 to-zinc-950 text-white p-4 flex justify-between items-center"
    >
      {/* Desktop navigation menu, hidden on small screens */}
      <div id="desktopMenu" className="justify-start gap-4 hidden sm:flex">
        {/* Mapping through tabs to display navigation links */}
        {tabs.map((tab) => (
          <Link
            key={tab.name}
            to={tab.path}
            className="btn btn-secondary third"
          >
            {tab.name}
          </Link>
        ))}
      </div>
      {/* Toggle button for mobile menu, visible only on small screens */}
      <button className="sm:hidden" onClick={toggleMenu}>
        {/* Conditional rendering based on menu's open/close status */}
        {!isMenuOpen ? (
          <img src="./icons/menuopen.png" className="w-9" />
        ) : (
          <img src="./icons/menuclosed.png" className="w-9" />
        )}
      </button>
      {/* Mobile navigation menu, shown when isMenuOpen is true */}
      {isMenuOpen && (
        <div
          id="mobileMenu"
          className="absolute top-[68px] left-0 bg-gradient-to-r from-purple-300 p-3 hidden z-10 w-screen"
        >
          {/* Mapping through tabs to display navigation links */}
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.path}
              className="block p-4 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      )}
      <ToggleTheme />
    </div>
  );
};
