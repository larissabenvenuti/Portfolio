import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  padding: 10px 10px;
  background-color: ${({ theme }) => theme.headerBackground};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px 20px;
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
  margin-right: 20px;

  @media (max-width: 1300px) {
    display: flex;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  padding: 10px 15px;
  transition: transform 0.3s ease;
  border-radius: 5px;

  &:hover {
    transform: translateY(-3px);
  }
`;

export const MenuLink = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
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
  padding: 10px;
  cursor: pointer;
  transition: transform 0.3s ease;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    margin-left: auto;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;

export const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;
