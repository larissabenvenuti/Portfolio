import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 40px;
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
  text-align: justify;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.1rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 40px;
`;

export const SocialLink = styled.a`
  display: inline-block;
  font-size: 1rem;
  color: ${({ theme }) => (theme.text ? "#000" : "#0000")};
  background: ${({ theme }) =>
    theme.background === "#121212"
      ? "#fff"
      : "linear-gradient(90deg, #ff416c, #ff4b2b)"};
  padding: 12px 24px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: ${({ theme }) =>
      theme.background === "#121212"
        ? "#fff"
        : "linear-gradient(90deg, #ff416c, #ff4b2b)"};
    color: ${({ theme }) => theme.background === "#121212" && "#000"};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) =>
      theme.background === "#121212"
        ? "0 5px 15px rgba(255, 255, 255, 0.4)"
        : "0 5px 15px rgba(255, 75, 43, 0.4)"};
  }
`;

export const Image = styled.img`
  width: 250px;
  border-radius: 50%;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 150px;
    margin-top: 0;
  }
`;
