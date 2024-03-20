import { ToggleTheme } from "./ToggleTheme";
import React from 'react';
import { Link } from 'react-router-dom';

const tabs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "News", path: "/news" },
  { name: "FAQ", path: "/faq" },
];

export const Header = () => {
  return (
    <div id="header" className="bg-gray-700 text-white p-4 flex justify-between">
      <div id="desktopMenu" className="justify-start gap-4 hidden sm:flex">
        {tabs.map((tab) => (
          <Link key={tab.name} to={tab.path} className="btn btn-secondary third">
            {tab.name}
          </Link>
        ))}
      </div>
      <ToggleTheme />
    </div>
  );
};