import styled from 'styled-components';

export const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 40px;
  background-color: ${({ theme }) => theme.background};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    text-align: center;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const AboutText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  max-width: 650px;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.1rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
`;

export const SocialLink = styled.a`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Image = styled.img`
  width: 200px;
  border-radius: 50%;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 150px;
    margin-top: 0;
  }
`;
