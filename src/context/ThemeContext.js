'use client'

import { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    setIsDark(savedTheme ? savedTheme === 'dark' : prefersDark);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const htmlElement = document.documentElement;

      if (isDark) {
        htmlElement.setAttribute('data-theme', 'dark');
      } else {
        htmlElement.setAttribute('data-theme', 'light');
      }

      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  }, [isDark, isMounted]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
