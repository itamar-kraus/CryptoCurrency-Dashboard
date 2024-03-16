import React, { useState } from "react";

export const ToggleTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleChangeMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="w-9">
      {isDarkMode ? (
        <img
          src="./icons/darkmode.png"
          alt="Dark Mode"
          onClick={handleChangeMode}
        />
      ) : (
        <img
          src="./icons/lightmode.png"
          alt="Light Mode"
          onClick={handleChangeMode}
        />
      )}
    </div>
  );
};
