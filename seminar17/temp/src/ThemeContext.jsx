import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    if (!window) return;

    const persistTheme = localStorage.getItem("theme")
    if (persistTheme) {
        setTheme(persistTheme)
    }
  }, [])

  useEffect(() => {
    if (!window || !theme) return;
    
    localStorage.setItem("theme", theme)
  }, [theme])

  function changeTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  console.log(children);
  

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
