import React, { useState, useEffect } from "react";
import { useMode } from "../modeContext";

// ToggleTheme component for toggling between light and dark themes
export const ToggleTheme = () => {
  // Destructure isDarkMode and changeMode from useMode to check the current theme and to toggle it
  const { isDarkMode, changeMode } = useMode();

  // useEffect hook to apply class changes to the document element
  // to reflect the current theme (dark or light) across the application
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    // This effect depends on isDarkMode's current state
  }, [isDarkMode]);

  // This effect depends on isDarkMode's current state
  const handleChangeMode = () => {
    changeMode();
  };

  // Render the toggle button, which will display different icons based on the current theme
  return (
    <div className="w-9 cursor-pointer">
      {!isDarkMode ? (
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
