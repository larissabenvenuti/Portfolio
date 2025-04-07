import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  height: 100vh;
  position: relative;
  text-align: center;
  background: ${({ theme }) =>
    theme.isDark
      ? `
        linear-gradient(45deg, ${theme.gradient4} 15%, transparent 15%) 0 100%,
        linear-gradient(-45deg, ${theme.gradient4} 15%, transparent 15%) 100% 0
      `
      : `
        linear-gradient(45deg, ${theme.gradient3} 15%, transparent 15%) 0 100%,
        linear-gradient(-45deg, ${theme.gradient3} 15%, transparent 15%) 100% 0
      `};
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  background: ${({ theme }) =>
    theme.isDark
      ? "linear-gradient(90deg, #fff, #aaa)"
      : `linear-gradient(90deg, ${theme.primaryColor}, ${theme.secondaryColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
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
  color: ${({ theme }) => (theme.isDark ? "#ddd" : theme.text)};
  margin-top: 15px;
  max-width: 800px;
  text-align: center;
  line-height: 1.7;
  transition: color 0.3s ease, transform 0.3s ease;
  transform: translateY(20px);
  opacity: 0;
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
