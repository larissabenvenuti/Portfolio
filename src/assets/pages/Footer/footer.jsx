import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  padding: 40px 20px;
  text-align: center;
  margin-top: 40px;
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    padding: 20px 20px;
  }
`;

export const FooterText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
