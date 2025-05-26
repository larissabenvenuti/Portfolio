import { createContext, useState, useEffect, useContext } from "react";
import Head from "next/head";

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
        primary: "#ffffff",
        secondary: "#000000",
        background: "#121212",
        text: "#ffffff",
        buttonFrom: "#4a4a4a",
        buttonTo: "#2d2d2d",
        buttonLightFrom: "#ffffff",
        buttonLightTo: "#ffffff",
        buttonDarkText: "#ffffff",
        buttonDarkHover: "#333333",
        buttonLightText: "#000000",
        buttonLightHover: "#ffffff",
      }
    : {
        primary: "#BD5555",
        secondary: "#55BDBD",
        background: "#ffffff",
        text: "#000000",
        buttonFrom: "#f0ecfc",
        buttonTo: "#E87373",
        buttonLightFrom: "#ffffff",
        buttonLightTo: "#E87373",
        buttonDarkText: "#ffffff",
        buttonDarkHover: "#333333",
        buttonLightText: "#000000",
        buttonLightHover: "#ffffff",
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

      localStorage.setItem("theme", isDark ? "dark" : "light");
    }
  }, [isDark, isMounted]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  if (!isMounted) return null;

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeContext.Provider value={{ isDark, toggleTheme, colors }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
