import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.headerBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;

  @media (max-width: 768px) {
    padding: 15px 20px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  padding: 10px 15px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  border-radius: 5px;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

export const MenuLink = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;
