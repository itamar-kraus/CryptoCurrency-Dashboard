import React, { useState, useEffect } from "react";
import { useMode } from "../modeContext";

export const ToggleTheme = () => {
  const { isDarkMode, changeMode } = useMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleChangeMode = () => {
    changeMode();
  };

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
