import { createContext, useContext, useState } from "react";

// ModeContext Creation
// Initializes a Context object with a default value for `isDarkMode` and a no-op (`() => {}`) for `changeMode`.
export const ModeContext = createContext({
  isDarkMode: true,
  changeMode: () => {},
});

// useMode Custom Hook
// A custom hook that simplifies accessing the ModeContext within functional components.
export const useMode = () => useContext(ModeContext);

// ModeProvider Component
// A provider component that wraps the application or part of it to provide access to the `isDarkMode` state and `changeMode` function.
export const ModeProvider = ({ children }) => {
  const [isDarkMode, setMode] = useState(true);

  // changeMode Function
  // A function to toggle the `isDarkMode` state, effectively switching between dark and light themes.
  const changeMode = () => {
    setMode(!isDarkMode);
  };

  // Providing the context to child components
  // The `value` prop is an object containing the current state of `isDarkMode` and the `changeMode` function,
  // allowing any child component that accesses this context to read the theme mode and toggle it.
  return (
    <ModeContext.Provider value={{ isDarkMode, changeMode }}>
      {children}
    </ModeContext.Provider>
  );
};
