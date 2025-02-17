import React from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import {
  ProjectsSection,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectsTitle,
  ProjectTitle,
} from "./projects";
import { projects } from "./data";

export const Projects = () => {
  const { isDarkTheme } = useTheme();

  return (
    <ProjectsSection id="projetos">
      <ProjectsTitle>Projetos</ProjectsTitle>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                outline: "none",
              }}
            >
              <ProjectImage src={project.image} alt={project.title} />
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectInfo>
            </a>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};
