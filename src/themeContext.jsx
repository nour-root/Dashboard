import { createContext, useState } from "react";
export const ThemeContext = createContext("light");

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const save = localStorage.getItem("theme");
    if (save) return save === "dark";
    if (save === "light") return false;
  });
  const ToggleTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
