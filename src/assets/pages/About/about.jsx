import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px;
  text-align: left;
  position: relative;

  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
    padding: 40px 20px;
    text-align: center;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => (theme.isDark ? "#fff" : "#000")};
  margin-bottom: 20px;
  font-weight: 600;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;

export const AboutText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => (theme.isDark ? "#ddd" : "#000")};
  margin-bottom: 20px;
  margin-top: 50px;
  max-width: 650px;
  text-align: justify;
  line-height: 1.6;
  transition: color 0.3s ease;

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
  flex-wrap: wrap;
`;

export const SocialLink = styled.a`
  display: inline-block;
  font-size: 1rem;
  color: #fff;
  background: ${({ theme }) =>
    theme.isDark
      ? "#000"
      : `linear-gradient(90deg, ${theme.primaryColor}, ${theme.secondaryColor})`};
  padding: 12px 24px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  border-radius: 5px;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.1);
    box-shadow: ${({ theme }) =>
      theme.isDark
        ? "0 5px 15px rgba(255, 255, 255, 0.2)"
        : "0 5px 15px rgba(255, 75, 43, 0.4)"};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) =>
      theme.isDark
        ? "0 0 0 3px rgba(255, 255, 255, 0.4)"
        : "0 0 0 3px rgba(255, 75, 43, 0.6)"};
  }
`;


export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-top: 20px;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    margin-top: 40px;
  }
`;
