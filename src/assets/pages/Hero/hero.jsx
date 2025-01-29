import styled from 'styled-components';

export const HeroContainer = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 120px 120px;
  background-color: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 60px 20px;
    text-align: center;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const HeroDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  max-width: 650px;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.1rem;
  }
`;
