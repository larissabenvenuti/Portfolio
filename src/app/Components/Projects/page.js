"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "../../../context/ThemeContext";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Brewtopia",
    description:
      "Landing Page de cervejaria fictícia.",
    image: "/images/projects/Brewtopia.png",
    link: "https://brewtopia-cervejaria.vercel.app/",
    github: "https://github.com/larissabenvenuti/Brewtopia",
    tags: ["Next.js", "JavaScript", "CSS"],
  },
  {
    title: "Portfólio de Artista 3D",
    description: "Portfolio pessoal com projetos e informações profissionais.",
    image: "/images/projects/GabrielSanchesPortfolio.png",
    link: "https://ezoyeahhh.vercel.app/",
    github: "https://github.com/larissabenvenuti/Portfolio-GabrielSanches",
    tags: ["Next.js", "Styled-components", "JavaScript"],
  },
    {
    title: "Restaurantes do Brasil",
    description:
      "Plataforma para descobrir os melhores restaurantes do Brasil.",
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
  const prefersReducedMotion = useReducedMotion();
  const [current, setCurrent] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);

  const resetAutoSlide = useCallback(() => {
    if (autoSlideIntervalRef.current) {
      clearInterval(autoSlideIntervalRef.current);
    }
    autoSlideIntervalRef.current = setInterval(() => {
      setActiveProject(null);
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 10000);
  }, [projects.length]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const animationVariants = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30,
      scale: prefersReducedMotion ? 1 : 0.95,
    },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const nextSlide = () => {
    setActiveProject(null);
    setCurrent((prev) => (prev + 1) % projects.length);
    resetAutoSlide();
  };

  const prevSlide = () => {
    setActiveProject(null);
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
    resetAutoSlide();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const index = Math.floor(Math.random() * projects.length);
          setCurrent(index);
          resetAutoSlide();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, [projects.length, resetAutoSlide]);

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [current, resetAutoSlide]);

  const toggleDescription = (index) => {
    if (activeProject === index) {
      setActiveProject(null);
      resetAutoSlide();
    } else {
      setActiveProject(index);
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      id="projetos"
      className="flex flex-col items-center justify-center text-center gap-2 px-4 min-h-screen py-16 sm:py-20"
      style={{
        color: colors.text,
        scrollMarginTop: "100px",
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-6 text-center"
        style={{ color: colors.primary }}
        variants={animationVariants}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Projetos
      </motion.h2>
      <motion.p
        className="text-lg sm:text-xl font-medium text-center max-w-2xl mb-8"
        style={{ color: colors.text }}
        variants={animationVariants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Clique na tela do notebook para conhecer mais sobre cada projeto.
      </motion.p>

      <div
        className="relative w-full max-w-[580px] flex justify-center items-center mx-auto"
        style={{ aspectRatio: "5 / 4" }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 800"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
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
            fill={isDark ? colors.background : "#000"}
          />
          <rect
            x="0"
            y="700"
            width="1000"
            height="40"
            rx="15"
            fill={isDark ? "#fff" : "#333"}
          />
        </svg>

        <div
          className="absolute overflow-hidden rounded-md flex justify-center items-center"
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
              className="absolute inset-0 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              style={{ pointerEvents: index === current ? "auto" : "none" }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-full object-contain cursor-pointer"
                onClick={() => toggleDescription(index)}
                draggable={false}
              />
              {activeProject === index && (
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(18, 18, 18, 0.85)"
                      : "rgba(255, 255, 255, 0.85)",
                    color: colors.text,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {isMobile ? (
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub Repository`}
                        className="hover:text-primary transition-colors"
                      >
                        <Github size={28} />
                      </a>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="hover:text-primary transition-colors"
                      >
                        <ExternalLink size={28} />
                      </a>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm mb-4 max-w-xs">
                        {project.description}
                      </p>

                      <div className="flex gap-4 mb-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub Repository`}
                          className="hover:text-primary transition-colors"
                        >
                          <Github size={28} />
                        </a>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} Live Demo`}
                          className="hover:text-primary transition-colors"
                        >
                          <ExternalLink size={28} />
                        </a>
                      </div>

                      <div className="flex flex-wrap gap-2 justify-center text-xs">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 rounded-full border"
                            style={{
                              backgroundColor: colors.background,
                              color: colors.text,
                              borderColor: colors.primary,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 -translate-y-1/2 z-10 rounded-full p-2 ml-5"
          style={{
            left: "10%",
            backgroundColor: isDark
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(0, 0, 0, 0.6)",
            color: "#fff",
          }}
          aria-label="Slide anterior"
        >
          <ChevronLeft size={28} color="#fff" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 -translate-y-1/2 z-10 rounded-full p-2 mr-5"
          style={{
            right: "10%",
            backgroundColor: isDark
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(0, 0, 0, 0.6)",
            color: "#fff",
          }}
          aria-label="Próximo slide"
        >
          <ChevronRight size={28} color="#fff" />
        </button>
      </div>
    </motion.section>
  );
};

export default Projects;