import { useState, useContext, useEffect, createContext } from "react";

export const DarkMode = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "";
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  return (
    <DarkMode.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
};

export const useDarkMode = () => useContext(DarkMode);
