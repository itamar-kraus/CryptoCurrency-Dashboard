import { createContext, useContext, useState } from "react";

export const ModeContext = createContext({
  isDarkMode: true,
  changeMode: () => {},
});

export const useMode = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
  const [isDarkMode, setMode] = useState(true);

  const changeMode = () => {
    setMode(!isDarkMode);
  };

  return (
    <ModeContext.Provider value={{ isDarkMode, changeMode }}>
      {children}
    </ModeContext.Provider>
  );
};
