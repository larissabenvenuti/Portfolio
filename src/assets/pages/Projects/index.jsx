import React from "react";
import { ProjectsSection, ProjectGrid, ProjectCard, ProjectImage, ProjectInfo, ProjectTitle, ProjectDescription } from "./projects";
import { projects } from "./data";

export const Projects = () => (
  <ProjectsSection id="projetos">
    <ProjectTitle>Projetos</ProjectTitle>
    <ProjectGrid>
      {projects.map((project) => (
        <ProjectCard key={project.title}>
          <ProjectImage src={project.image} alt={project.title} />
          <ProjectInfo>
            <ProjectTitle>{project.title}</ProjectTitle>
          </ProjectInfo>
        </ProjectCard>
      ))}
    </ProjectGrid>
  </ProjectsSection>
);
