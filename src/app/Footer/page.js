"use client" 

import React from "react";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`w-full py-6 text-center text-sm transition-colors duration-300 ${
        isDark
          ? "bg-background-dark text-text-light"
          : "bg-background-light text-text-dark shadow-none"
      }`}
    >
      <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
        © {new Date().getFullYear()} Todos os direitos reservados. Feito por{" "}
        <span className="font-semibold">Larissa Benvenuti</span>.
      </p>
    </footer>
  );
};

export default Footer;
