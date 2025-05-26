"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion, useReducedMotion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "Styled-Components",
  "Next.js",
  "APIs REST",
  "Python",
  "Java",
];

const Skills = () => {
  const { isDark, colors } = useTheme();
  const [inView, setInView] = useState(false);
  const skillsRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="min-h-screen flex flex-col justify-center items-center py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500"
      style={{
        backgroundColor: colors.background,
        color: colors.text,
      }}
      aria-label="Seção de Skills"
    >
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <motion.div
          className="text-center mb-14"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
            style={{ color: colors.primary }}
          >
            Skills
          </h2>
          <p
            className="text-lg leading-relaxed font-medium"
            style={{ color: colors.textMuted }}
          >
            Algumas das tecnologias que utilizo para criar projetos incríveis.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              custom={index}
              variants={skillVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="flex items-center justify-center p-6 rounded-2xl shadow-md border-2 transition-transform duration-300 hover:scale-105"
              style={{
                backgroundColor: colors.background,
                color: colors.text,
                borderColor: colors.primary,
                boxShadow: isDark
                  ? "0 8px 16px rgba(0,0,0,0.4)"
                  : "0 8px 16px rgba(0,0,0,0.1)",
              }}
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
              tabIndex={0}
              aria-label={`Skill: ${skill}`}
            >
              <span className="text-lg sm:text-xl font-semibold">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
