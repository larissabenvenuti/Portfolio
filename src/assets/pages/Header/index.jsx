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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <HeaderContainer
      style={{
        backgroundColor: isDarkTheme ? "#333" : "#fff",
        padding: windowWidth > 768 ? "10px 10px" : "15px 20px",
      }}
    >
      <Nav>
        <Menu
          style={{
            display: isMobileMenuOpen || windowWidth > 768 ? "flex" : "none",
          }}
        >
          {["Home", "Projetos", "Sobre"].map((item) => (
            <MenuItem key={item}>
              <Link to={item.toLowerCase()} smooth={true} duration={500}>
                <MenuLink>{item}</MenuLink>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Nav>

      <MobileMenu>
        <MobileMenuButton
          onClick={toggleMobileMenu}
          aria-label={`Abrir menu ${isMobileMenuOpen ? "fechado" : "aberto"}`}
        >
          {isMobileMenuOpen ? "X" : "☰"}
        </MobileMenuButton>
      </MobileMenu>

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
