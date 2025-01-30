import React from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import {
  ProjectsTitle,
  ProjectsSection,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectInfo,
  ProjectTitle,
  ProjectDescription,
} from "./projects";
import { projects } from "./data";

export const Projects = () => {
  const { isDarkTheme } = useTheme();

  return (
    <ProjectsSection
      id="projetos"
      style={{ backgroundColor: isDarkTheme ? "#333" : "#fff" }}
    >
      <ProjectsTitle style={{ color: isDarkTheme ? "#fff" : "#333" }}>
        Projetos
      </ProjectsTitle>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title} isDarkTheme={isDarkTheme}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle style={{ color: isDarkTheme ? "#fff" : "#000" }}>
                {project.title}
              </ProjectTitle>
              <ProjectDescription
                style={{ color: isDarkTheme ? "#ddd" : "#333" }}
              >
                {project.description}
              </ProjectDescription>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};
