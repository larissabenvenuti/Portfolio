import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 100vh;
  background-color: ${({ theme }) => theme.background};
  background: radial-gradient(
      circle at 10% 10%,
      ${({ theme }) => theme.gradient1},
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 90%,
      ${({ theme }) => theme.gradient2},
      transparent 30%
    ),
    linear-gradient(
        45deg,
        ${({ theme }) => theme.gradient3} 15%,
        transparent 15%
      )
      0 100%,
    linear-gradient(
        -45deg,
        ${({ theme }) => theme.gradient4} 15%,
        transparent 15%
      )
      100% 0;
  position: relative;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  color: ${({ theme }) =>
    theme.isDarkTheme
      ? "none"
      : `linear-gradient(90deg, ${theme.primaryColor}, ${theme.secondaryColor})`};

  margin-bottom: 20px;
  text-align: center;
  transition: transform 0.3s ease, opacity 0.3s ease, letter-spacing 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    opacity: 0.9;
    letter-spacing: 3px;
  }

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text};
  margin-top: 15px;
  max-width: 800px;
  text-align: center;
  line-height: 1.7;
  transition: color 0.3s ease, transform 0.3s ease;
  transform: translateY(20px);
  opacity: 0;
  
  ${({ theme }) => theme.isDarkTheme && `
    color: #ddd;
  `}
  
  animation: fadeInUp 1s forwards;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;
