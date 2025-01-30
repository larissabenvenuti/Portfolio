import React, { useState } from "react";
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

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <HeaderContainer style={{ backgroundColor: isDarkTheme ? "#333" : "#fff" }}>
      <Nav>
        <Menu
          style={{
            display:
              isMobileMenuOpen || window.innerWidth > 768 ? "flex" : "none",
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
        <MobileMenuButton onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? "X" : "☰"}
        </MobileMenuButton>
      </MobileMenu>

      <ThemeToggle onClick={toggleTheme} aria-label="Alternar tema">
        {isDarkTheme ? <Moon size={24} /> : <Sun size={24} />}
      </ThemeToggle>
    </HeaderContainer>
  );
};
