"use client";

import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  colors: {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const colors = isDark
    ? {
        primary: "#E0E0E0",
        secondary: "#A0A0A0",
        background: "#1A1A1A",
        text: "#F0F0F0",
        buttonFrom: "#333333",
        buttonTo: "#555555",
        buttonLightFrom: "#BBBBBB",
        buttonLightTo: "#999999",
        buttonDarkText: "#F0F0F0",
        buttonDarkHover: "#444444",
        buttonLightText: "#1A1A1A",
        buttonLightHover: "#DDDDDD",
      }
    : {
        primary: "#E53E3E",
        secondary: "#B83280",
        background: "#F7FAFC",
        text: "#2D3748",
        buttonFrom: "#FBD8D8",
        buttonTo: "#E68383",
        buttonLightFrom: "#FFFFFF",
        buttonLightTo: "#F0F0F0",
        buttonDarkText: "#2D3748",
        buttonDarkHover: "#DEDEDE",
        buttonLightText: "#2D3748",
        buttonLightHover: "#BDBDBD",
      };

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(savedTheme ? savedTheme === "dark" : prefersDark);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const root = document.documentElement;

      root.style.setProperty("--primary-color", colors.primary);
      root.style.setProperty("--secondary-color", colors.secondary);
      root.style.setProperty("--background-color", colors.background);
      root.style.setProperty("--text-color", colors.text);
      document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");

      const currentPrimaryHex = colors.primary;
      const r = parseInt(currentPrimaryHex.substring(1, 3), 16);
      const g = parseInt(currentPrimaryHex.substring(3, 5), 16);
      const b = parseInt(currentPrimaryHex.substring(5, 7), 16);
      root.style.setProperty('--sparkle-color-rgb', `${r}, ${g}, ${b}`);

      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark, isMounted, colors]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  if (!isMounted) return null;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};