import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding: 100px 20px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  justify-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 25px;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectInfo = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 15px;
  font-weight: 600;
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.text};
  line-height: 1.6;
  text-align: justify;
  margin-bottom: 20px;
  max-height: 150px;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
