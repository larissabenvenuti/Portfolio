import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.isDark ? "#333333" : "#ffffff"}; 
  color: ${({ theme }) => theme.isDark ? "#fff" : "#333"}; 
  padding: 40px 20px;
  text-align: center;
  margin-top: 40px;
  box-shadow: ${({ theme }) => theme.isDark ? "0 4px 8px rgba(0, 0, 0, 0.5)" : "0 4px 8px rgba(0, 0, 0, 0.1)"};
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

export const FooterText = styled.p`
  font-size: 0.7rem;
  color: ${({ theme }) => theme.isDark ? "#ddd" : "#333"};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
