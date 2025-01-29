import React from "react";
import { HeaderContainer, Nav, Menu, MenuItem, MenuLink, ThemeToggle } from "./header";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../contexts/ThemeProvider";
import { Link } from "react-scroll";

export const Header = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Nav>
        <Menu>
          {["Home", "Projetos", "Sobre"].map((item) => (
            <MenuItem key={item}>
              <Link to={item.toLowerCase()} smooth={true} duration={500}>
                <MenuLink>{item}</MenuLink>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Nav>

      <ThemeToggle onClick={toggleTheme} aria-label="Alternar tema">
        {isDarkTheme ? <Moon size={24} /> : <Sun size={24} />}
      </ThemeToggle>
    </HeaderContainer>
  );
};
