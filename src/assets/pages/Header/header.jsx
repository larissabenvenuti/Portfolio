import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  padding: 1rem;
  background-color: ${({ theme }) => (theme.isDark ? "#000000" : "#ffffff")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: auto;
  background-color: ${({ theme }) => (theme.isDark ? "#000000" : "#ffffff")};
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => (theme.isDark ? "#000000" : "#ffffff")};

  &.mobile {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    background-color: ${({ theme }) => (theme.isDark ? "#000000" : "#ffffff")};
    padding: 1rem;
    gap: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: none;
  }

  &.mobile.open {
    display: flex;
  }
`;

export const MenuItem = styled.li`
  padding: 0.5rem;
  transition: transform 0.3s ease;
  background-color: ${({ theme }) => (theme.isDark ? "#000000" : "#ffffff")};

  .mobile & {
    width: 100%;
    text-align: center;
    &:hover {
      background-color: ${({ theme }) => (theme.isDark ? "#1a1a1a" : "#f0f0f0")};
    }
  }
`;

export const MenuLink = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => (theme.isDark ? "#ffffff" : "#000000")};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #ff416c, #ff4b2b);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: ${({ theme }) => (theme.isDark ? "#ffffff" : "#000000")};
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

export const MobileMenu = styled.div`
  min-width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => (theme.isDark ? "#000000" : "#ffffff")};
`;

export const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => (theme.isDark ? "#ffffff" : "#000000")};
  padding: 0.5rem;
`;