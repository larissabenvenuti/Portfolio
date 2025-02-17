import React, { useState, useEffect } from "react";
import {
  HeaderContainer,
  Nav,
  Menu,
  MenuItem,
  MenuLink,
  ThemeToggle,
  MobileMenu,
  MobileMenuButton,
} from "./header";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeProvider";
import { Link } from "react-scroll";

export const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
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
    <HeaderContainer>
      <Nav>
        {windowWidth > 768 ? (
          <Menu>
            <MenuItem>
              <Link to="home" smooth={true} duration={500}>
                <MenuLink>Home</MenuLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="projetos" smooth={true} duration={500}>
                <MenuLink>Projetos</MenuLink>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="sobre" smooth={true} duration={500}>
                <MenuLink>Sobre</MenuLink>
              </Link>
            </MenuItem>
          </Menu>
        ) : (
          <MobileMenu>
            <MobileMenuButton
              onClick={toggleMobileMenu}
              aria-label={`Menu ${isMobileMenuOpen ? "fechado" : "aberto"}`}
            >
              {isMobileMenuOpen ? "×" : "☰"}
            </MobileMenuButton>
            <Menu className={`mobile ${isMobileMenuOpen ? "open" : ""}`}>
              <MenuItem>
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MenuLink>Home</MenuLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="projetos"
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MenuLink>Projetos</MenuLink>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  to="sobre"
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MenuLink>Sobre</MenuLink>
                </Link>
              </MenuItem>
            </Menu>
          </MobileMenu>
        )}
      </Nav>

      <ThemeToggle
        onClick={toggleTheme}
        aria-label="Alternar tema"
        title={`Alternar para o tema ${isDarkTheme ? "claro" : "escuro"}`}
      >
        {isDarkTheme ? <Moon size={24} /> : <Sun size={24} />}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;