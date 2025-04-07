import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 40px;
  text-align: left;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 20px;
    text-align: center;
    margin-top: 30px;
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
  gap: 25px;
  justify-content: center;
  margin-top: 50px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => (theme.isDark ? "#111" : "#fff")};
  border-radius: 12px;
  padding: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-12px);
    box-shadow: ${({ theme }) =>
      theme.isDark
        ? "0 8px 24px rgba(255, 255, 255, 0.1)"
        : "0 8px 24px rgba(0, 0, 0, 0.1)"};
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: cover;
  transition: opacity 0.3s ease;
`;

export const ProjectInfo = styled.div`
  margin-top: 15px;
  text-align: left;
  color: ${({ theme }) => (theme.isDark ? "#ddd" : "#333")};
`;

export const ProjectTitle = styled.h3`
  color: ${({ theme }) => (theme.isDark ? "#fff" : "#000")};
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  text-align: center;
`;
