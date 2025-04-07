import styled from "styled-components";

export const TechContainer = styled.section`
  padding: 40px;
  text-align: left;
  background-color: ${({ theme }) => theme.background};
  transition: background-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 20px;
    margin-top: 30px;
    text-align: center;
  }
`;

export const TechTitle = styled.h1`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;

  @media (max-width: 768px) {
    gap: 15px;
    justify-content: center;
  }
`;

export const TechItem = styled.div`
  text-align: center;
  max-width: 180px;
  padding: 10px;
  color: ${({ theme }) => theme.text};
`;

export const TechImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const TechLink = styled.a`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => (theme.isDark ? "#fff" : "#000")};
  }
`;
