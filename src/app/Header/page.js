import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-scroll";
import { Sun, Moon } from "lucide-react";

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full h-16 px-6 flex justify-between items-center shadow-md z-50 transition-colors duration-300 ${
        isDark ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <nav className="flex items-center mr-auto">
        {windowWidth > 768 ? (
          <ul className="flex gap-8 list-none m-0 p-0">
            <li>
              <Link to="home" smooth={true} duration={500}>
                <span className="text-lg font-medium cursor-pointer hover:opacity-80">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="projetos" smooth={true} duration={500}>
                <span className="text-lg font-medium cursor-pointer hover:opacity-80">
                  Projetos
                </span>
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500}>
                <span className="text-lg font-medium cursor-pointer hover:opacity-80">
                  Skills
                </span>
              </Link>
            </li>
            <li>
              <Link to="sobre" smooth={true} duration={500}>
                <span className="text-lg font-medium cursor-pointer hover:opacity-80">
                  Sobre
                </span>
              </Link>
            </li>
          </ul>
        ) : (
          <div className="relative">
            <button
              onClick={toggleMobileMenu}
              aria-label={`Menu ${isMobileMenuOpen ? "fechado" : "aberto"}`}
              className="text-3xl p-2 z-50"
            >
              {isMobileMenuOpen ? "×" : "☰"}
            </button>
            <ul
              className={`absolute top-full left-0 w-full p-4 space-y-4 transition-all duration-300 ${
                isDark ? "bg-gray-900 text-white" : "bg-white text-black"
              } ${isMobileMenuOpen ? "block" : "hidden"}`}
            >
              <li>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg font-medium cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="projetos"
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg font-medium cursor-pointer">Projetos</span>
                </Link>
              </li>
              <li>
                <Link
                  to="skills"
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg font-medium cursor-pointer">Skills</span>
                </Link>
              </li>
              <li>
                <Link
                  to="sobre"
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-lg font-medium cursor-pointer">Sobre</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <button
        onClick={toggleTheme}
        aria-label="Alternar tema"
        title={`Alternar para o tema ${isDark ? "claro" : "escuro"}`}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-xl p-2 transition-all duration-300 hover:scale-110"
      >
        {isDark ? <Moon size={24} /> : <Sun size={24} />}
      </button>
    </header>
  );
};

export default Header;
