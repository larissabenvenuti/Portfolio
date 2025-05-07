"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Gabriel Sanches - Portfólio",
    description: "Portfolio pessoal com projetos e informações profissionais.",
    image: "/images/projects/GabrielSanchesPortfolio.png",
    link: "https://ezoyeahhh.vercel.app/",
    github: "https://github.com/larissabenvenuti/Portfolio-GabrielSanches",
    tags: ["Next.js", "Styled-components", "JavaScript"],
  },
  {
    title: "Restaurantes do Brasil",
    description:
      "Simulação front-end de plataforma para descobrir os melhores restaurantes do Brasil.",
    image: "/images/projects/RestaurantesBrasil.png",
    link: "https://restaurantes-brasil.vercel.app/",
    github: "https://github.com/larissabenvenuti/Site-Restaurantes",
    tags: ["Next.js", "TailwindCSS", "JavaScript"],
  },
  {
    title: "MindAlign",
    description: "Aplicativo para organização pessoal e produtividade.",
    image: "/images/projects/MindAlign.png",
    link: "https://mind-align.vercel.app/",
    github: "https://github.com/larissabenvenuti/MindAlign",
    tags: ["React", "Styled-components", "JavaScript"],
  },
  {
    title: "GitHub Profile Searcher",
    description: "Ferramenta para buscar e visualizar perfis do GitHub.",
    image: "/images/projects/GithubProfileSearcher.png",
    link: "https://githubprofilesearcher.vercel.app/",
    github: "https://github.com/larissabenvenuti/Github-Profile-Searcher",
    tags: ["React", "Styled-Components", "Javascript"],
  },
];

const Projects = () => {
  const { isDark, colors } = useTheme();
  const [current, setCurrent] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const sectionRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % projects.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const index = Math.floor(Math.random() * projects.length); 
          setCurrent(index);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 7000); 

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const toggleDescription = (index) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="projetos"
      className="min-h-screen relative py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500"
      style={{ backgroundColor: colors.background, color: colors.text }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left flex-1 mb-12 md:mb-0">
          <h2
            className="text-5xl font-extrabold tracking-tight mb-6"
            style={{ color: colors.primary, fontFamily: "'Nunito', serif" }}
          >
            Projetos: 
          </h2>

          <p
            className="text-lg font-light text-gray-500 mb-6"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Aqui estão alguns dos meus projetos mais significativos. Clique na tela para <strong>ver mais</strong> sobre o projeto.
          </p>
        </div>

        <div className="relative w-full max-w-3xl md:w-[700px]">
          <svg
            className="w-full"
            viewBox="0 0 1000 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="50"
              y="100"
              width="900"
              height="600"
              rx="30"
              fill={isDark ? colors.buttonLightFrom : "#1a1a1a"}
            />
            <rect
              x="90"
              y="130"
              width="820"
              height="540"
              rx="10"
              fill="black"
            />
            <rect x="0" y="700" width="1000" height="40" rx="15" fill={isDark ? "#fff" : "#333"} />
          </svg>

          <div
            className="absolute overflow-hidden rounded-md"
            style={{
              top: "18.5%",
              left: "11.5%",
              width: "78%",
              height: "60%",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${index === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === current ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover object-center"
                  onClick={() => toggleDescription(index)} 
                />
                {activeProject === index && (
                  <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-500"
                    style={{
                      backgroundColor: isDark ? "rgba(18, 18, 18, 0.85)" : "rgba(255, 255, 255, 0.85)",
                      color: colors.text,
                    }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm mb-4 max-w-xs">{project.description}</p>

                    <div className="flex gap-3 mb-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit hover:text-gray-400"
                      >
                        <Github size={24} />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-inherit hover:text-gray-400"
                      >
                        <ExternalLink size={24} />
                      </a>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center text-xs">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: isDark ? colors.background : colors.background,
                            color: isDark ? colors.text : colors.text,
                            border: `1px solid ${isDark ? colors.primary : colors.primary}`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition"
            style={{ left: "13%" }}
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition"
            style={{ right: "13%" }}
            aria-label="Próximo projeto"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
