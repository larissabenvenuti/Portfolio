import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => (theme.isDark ? theme.background : theme.background)};
  color: ${({ theme }) => theme.text};
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
