import { useState, useEffect, useCallback } from "react";

export function useTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem("theme");
    return stored === null ? true : stored === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => setDarkMode((prev) => !prev), []);

  return { darkMode, toggleDarkMode };
}
