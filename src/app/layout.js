"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

const GlobalBackgroundManager = () => {
  const { isDark, colors } = useTheme();

  useEffect(() => {
    const body = document.body;

    body.classList.remove('dark-theme-sparkles');
    body.classList.remove('light-theme-sparkles');

    body.style.backgroundColor = colors.background;
    body.style.transition = "background-color 0.5s ease";

    if (isDark) {
      body.classList.add('dark-theme-sparkles');
    } else {
      body.classList.add('light-theme-sparkles');
    }

    return () => {
      body.classList.remove('dark-theme-sparkles');
      body.classList.remove('light-theme-sparkles');
      body.style.backgroundColor = '';
      body.style.transition = '';
    };
  }, [isDark, colors]);

  return null;
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="text-text-light dark:text-text-dark transition-colors duration-300">
        <ThemeProvider>
          <GlobalBackgroundManager />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}