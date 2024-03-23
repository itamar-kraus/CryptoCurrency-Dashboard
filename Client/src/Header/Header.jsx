import { ToggleTheme } from "./ToggleTheme";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const tabs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "News", path: "/news" },
  { name: "FAQ", path: "/faq" },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      id="header"
      className="bg-gradient-to-r from-gray-800 to-sky-950 text-white p-4 flex justify-between items-center font-bold"
    >
      <div id="desktopMenu" className="justify-start gap-4 hidden sm:flex">
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
      <button className="sm:hidden" onClick={toggleMenu}>
        {isMenuOpen ? "Close" : "Menu"}
      </button>
      {isMenuOpen && (
        <div
          id="mobileMenu"
          className="absolute top-[56px] left-0 bg-blue-300 p-3 hidden w-full z-10"
        >
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
