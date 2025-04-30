"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-scroll";
import { Sun, Moon, X } from "lucide-react";

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const menuLinks = [
    { to: "home", label: "Home" },
    { to: "sobre", label: "Sobre" },
    { to: "skills", label: "Skills" },
    { to: "projetos", label: "Projetos" },
    { to: "servicos", label: "Serviços" },
  ];

  return (
    <header className="w-full flex items-center justify-between px-8 py-0 shadow-md fixed top-0 left-0 z-50 transition-all duration-300"
      style={{ backgroundColor: isDark ? "#000" : "#fff" }}>

      <div className="flex items-center">
        <img
          src={isDark ? "/images/logo/LB_Logo_Dark_png.png" : "/images/logo/LB_Logo_png.png"}
          alt="Logo"
          className="h-20 w-20 md:h-20 transition-all duration-300"
        />
      </div>

      <nav className="hidden md:flex items-center space-x-6">
        {menuLinks.map(({ to, label }) => (
          <React.Fragment key={to}>
            <Link
              to={to}
              smooth
              duration={500}
              className="hover:text-primaryLight cursor-pointer transition-colors"
            >
              {label}
            </Link>
            {to !== "servicos" && <div className="h-6 w-px bg-primaryLight" />}
          </React.Fragment>
        ))}
      </nav>

      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          aria-label="Alternar tema"
          title={`Alternar para o tema ${isDark ? "claro" : "escuro"}`}
          className="text-xl p-2 transition-all hover:scale-110"
        >
          {isDark ? <Moon size={24} /> : <Sun size={24} />}
        </button>

        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primaryLight"
        >
          {isMobileMenuOpen ? (
            <X size={28} />
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full shadow-lg flex flex-col items-center py-6 space-y-4 animate-slide-down z-40"
          style={{ backgroundColor: isDark ? "#000" : "#fff" }}>
          {menuLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg hover:text-primaryLight cursor-pointer transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
