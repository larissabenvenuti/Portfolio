import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  padding: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ theme }) =>
    theme.isDark
      ? "0 1px 4px rgba(255, 255, 255, 0.05)"
      : "0 1px 4px rgba(0, 0, 0, 0.1)"};
  z-index: 999;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  &.mobile {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
    display: none;
    background-color: ${({ theme }) => theme.background};
    box-shadow: ${({ theme }) =>
      theme.isDark
        ? `0 2px 4px ${theme.shadowLight}`
        : `0 2px 4px ${theme.shadowDark}`};
  }

  &.mobile.open {
    display: flex;
  }
`;

export const MenuItem = styled.li`
  padding: 0.5rem;
  transition: transform 0.3s ease;

  .mobile & {
    width: 100%;
    text-align: center;

    &:hover {
      background-color: ${({ theme }) =>
        theme.isDark ? theme.hoverDark : theme.hoverLight};
    }
  }
`;

export const MenuLink = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateY(-50%) scale(1.1);
  }
`;

export const MobileMenu = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.background};
`;

export const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;
