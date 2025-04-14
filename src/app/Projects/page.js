"use client"

import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Gabriel Sanches - Portfólio",
    description: "Portfolio pessoal com projetos e informações profissionais",
    image: "/images/projects/GabrielSanchesPortfolio.png",
    link: "https://ezoyeahhh.vercel.app/",
    github: "https://github.com/yourusername/portfolio",
    tags: ["React", "Styled-components", "Next.js", "JavaScript"],
  },
  {
    title: "Restaurantes do Brasil",
    description:
      "Plataforma para descobrir os melhores restaurantes brasileiros",
    image: "/images/projects/RestaurantesBrasil.png",
    link: "https://restaurantes-brasil.vercel.app/",
    github: "https://github.com/yourusername/restaurantes-brasil",
    tags: ["React", "Next.js", "Styled-components", "JavaScript"],
  },
  {
    title: "MindAlign",
    description: "Aplicativo para organização pessoal e produtividade",
    image: "/images/projects/MindAlign.png",
    link: "https://mind-align.vercel.app/",
    github: "https://github.com/yourusername/mind-align",
    tags: ["React", "Styled-components", "JavaScript"],
  },
  {
    title: "GitHub Profile Searcher",
    description: "Ferramenta para buscar e visualizar perfis do GitHub",
    image: "/images/projects/GithubProfileSearcher.png",
    link: "https://githubprofilesearcher.vercel.app/",
    github: "https://github.com/yourusername/github-profile-searcher",
    tags: ["React", "Styled-Components", "Javascript"],
  },
];

export const Projects = () => {
  const { isDark } = useTheme();
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section
      id="projetos"
      className={`relative py-20 px-6 md:px-12 lg:px-24 ${
        isDark
          ? "bg-background-dark text-text-dark"
          : "bg-background-light text-text-light"
      } transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Projetos
          </h2>
        </div>

        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`rounded-xl overflow-hidden shadow-md transform transition-all duration-500 hover:scale-105 hover:shadow-xl ${
                isDark ? "bg-gray-800" : "bg-white"
              } flex flex-col`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform:
                      hoveredProject === index ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div
                  className={`absolute inset-0 flex items-end justify-end p-3 transition-opacity duration-300 bg-gradient-to-t ${
                    isDark
                      ? "from-gray-900/90 to-transparent"
                      : "from-primary-light/80 to-transparent"
                  }`}
                  style={{ opacity: hoveredProject === index ? "1" : "0" }}
                >
                  <div className="flex space-x-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-colors duration-300 ${
                        isDark
                          ? "bg-gray-700 text-white hover:bg-primary-dark"
                          : "bg-white text-primary-light hover:bg-primary-light hover:text-white"
                      }`}
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full transition-colors duration-300 ${
                        isDark
                          ? "bg-gray-700 text-white hover:bg-primary-dark"
                          : "bg-white text-primary-light hover:bg-primary-light hover:text-white"
                      }`}
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-sm mb-3 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium py-1 px-2 rounded-full ${
                        isDark
                          ? "bg-gray-700 text-gray-300"
                          : "bg-primary-light/10 text-primary-light"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center font-medium text-sm transition-colors ${
                    isDark
                      ? "text-primary-dark hover:text-white"
                      : "text-primary-light hover:text-secondary-light"
                  }`}
                >
                  Ver projeto
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
