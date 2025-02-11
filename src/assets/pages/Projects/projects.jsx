import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 60px 40px;
  text-align: left;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 40px 20px;
    text-align: center;
  }
`;

export const ProjectsTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 15px;
  justify-content: center;
  padding: 20px;
  margin-top: 50px;
  position: relative;
  border-radius: 15px;
`;

export const ProjectCard = styled.div`
  background: transparent;
  border-radius: 8px;
  padding: 15px;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: opacity 0.3s ease;
`;

export const ProjectInfo = styled.div`
  margin-top: 10px;
  text-align: left;
  color: ${({ isDarkTheme }) => (isDarkTheme ? "#ddd" : "#333")};
`;

export const ProjectTitle = styled.h3`
  color: ${({ isDarkTheme }) => (isDarkTheme ? "#fff" : "#333")};
  font-size: 1.6rem;
  font-weight: bold;
`;

export const ProjectDescription = styled.p`
  color: ${({ isDarkTheme }) => (isDarkTheme ? "#ccc" : "#555")};
  font-size: 1rem;
  line-height: 1.5;
`;
