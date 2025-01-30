import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 220px 220px;
  background-color: ${({ theme }) => theme.background};
  background: radial-gradient(
      circle at 20% 20%,
      ${({ theme }) => theme.gradient1},
      transparent 40%
    ),
    radial-gradient(
      circle at 80% 80%,
      ${({ theme }) => theme.gradient2},
      transparent 40%
    ),
    linear-gradient(
        30deg,
        ${({ theme }) => theme.gradient3} 25%,
        transparent 25%
      )
      0 50%,
    linear-gradient(
        -60deg,
        ${({ theme }) => theme.gradient4} 25%,
        transparent 25%
      )
      50% 0;
  margin-top: 60px;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 100px 20px;
    text-align: justify;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.7rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.primaryColor},
    ${({ theme }) => theme.secondaryColor}
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;
  max-width: 750px;
  text-align: justify;
  line-height: 1.6;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.2rem;
  }
`;
