import styled from "styled-components";

export const ProjectsSection = styled.section`
  padding: 100px 20px;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
  margin: 0;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 40px;
  padding: 50px;
  justify-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: ${({ theme }) => theme.text};
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProjectInfo = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ProjectsTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 25px;
  font-weight: 700;
  padding: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 10px;
  font-weight: 700;
`;

export const ProjectDescription = styled.p`
  font-size: 1.1rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 20px;
  max-height: 150px;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
