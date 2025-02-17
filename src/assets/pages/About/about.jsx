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
  transition: background-color 0.3s ease;
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
    padding: 40px 20px;
    text-align: center;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.isDarkTheme ? "#fff" : "#333"}; 
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
  color: ${({ theme }) => theme.isDarkTheme ? "#ddd" : "#333"};
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
`;

export const SocialLink = styled.a`
  display: inline-block;
  font-size: 1rem;
  color: ${({ theme }) => theme.isDarkTheme ? "#fff" : "#000"};
  background: ${({ theme }) => 
    theme.isDarkTheme ? "#444" : "linear-gradient(90deg, #ff416c, #ff4b2b)"};
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
    background: ${({ theme }) =>
      theme.isDarkTheme ? "#555" : "linear-gradient(90deg, #ff416c, #ff4b2b)"};
    color: ${({ theme }) => (theme.isDarkTheme ? "#000" : "#fff")};
    transform: translateY(-3px);
    box-shadow: ${({ theme }) =>
      theme.isDarkTheme
        ? "0 5px 15px rgba(255, 255, 255, 0.4)"
        : "0 5px 15px rgba(255, 75, 43, 0.4)"};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 75, 43, 0.6);
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
