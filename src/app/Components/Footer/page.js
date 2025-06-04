"use client";

import React from "react";
import { useTheme } from "../../../context/ThemeContext";

const Footer = () => {
  const { colors } = useTheme();

  return (
    <footer
      className="w-full py-6 text-center text-sm transition-colors duration-300"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
        boxShadow: colors.shadow ? `0 0 10px ${colors.shadow}` : undefined,
      }}
    >
      <p style={{ color: colors.text }}>
        © {new Date().getFullYear()} Todos os direitos reservados. Feito por{" "}
        <span style={{ fontWeight: "600" }}>Larissa Benvenuti</span>.
      </p>
    </footer>
  );
};

export default Footer;
