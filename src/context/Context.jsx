import { useState, useContext, useEffect, createContext } from "react";

export const DarkMode = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isLightMode, setIsLightMode] = useState(() => {
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  const toggleDarkMode = () => setIsLightMode((prev) => !prev);

  useEffect(() => {
    document.body.className = isLightMode ? "light" : "";
    localStorage.setItem("darkMode", JSON.stringify(isLightMode));
  }, [isLightMode]);
  return (
    <DarkMode.Provider value={{ isLightMode, toggleDarkMode }}>
      {children}
    </DarkMode.Provider>
  );
};

export const useDarkMode = () => useContext(DarkMode);
