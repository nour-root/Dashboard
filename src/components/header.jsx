import { IoMoonOutline } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { ThemeContext } from "../themeContext";
import { useContext, useEffect } from "react";
export default function Header() {
  const { theme, ToggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme) {
      localStorage.setItem("theme", "dark");
      root.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      root.classList.remove("dark");
    }
  });

  return (
    <header className="bg-primary dark:bg-dark-secondary px-8 py-4 flex justify-between">
      <h1 className="capitalize text-3xl font-semibold dark:text-white">
        dashboard
      </h1>
      <button
        onClick={ToggleTheme}
        className="capitalize text-xl font-semibold  flex items-center gap-3 cursor-pointer"
      >
        {theme ? (
          <GoSun className="text-xl text-white" />
        ) : (
          <IoMoonOutline className="text-xl text-black" />
        )}

        <p className="capitalize dark:text-white">
          {theme ? "dark" : "light"} Mode
        </p>
      </button>
    </header>
  );
}
