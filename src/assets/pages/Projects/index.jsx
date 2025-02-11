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
  ProjectDescription,
} from "./projects";
import { projects } from "./data";

export const Projects = () => {
  const { isDarkTheme } = useTheme();

  return (
    <ProjectsSection
      id="projetos"
      style={{ backgroundColor: isDarkTheme ? "#000" : "#fff" }}
    >
      <ProjectsTitle style={{ color: isDarkTheme ? "#fff" : "#000" }}>
        Projetos
      </ProjectsTitle>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.title} isDarkTheme={isDarkTheme}>
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
                <ProjectTitle style={{ color: isDarkTheme ? "#fff" : "#000" }}>
                  {project.title}
                </ProjectTitle>
                <ProjectDescription
                  style={{ color: isDarkTheme ? "#ddd" : "#333" }}
                >
                  {project.description}
                </ProjectDescription>
              </ProjectInfo>
            </a>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </ProjectsSection>
  );
};
