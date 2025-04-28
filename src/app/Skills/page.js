"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "Styled-Components",
  "Next.js",
  "APIs REST",
];

export const Skills = () => {
  const { isDark, colors } = useTheme();
  const [inView, setInView] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="py-20 px-6 md:px-12 lg:px-24 transition-colors duration-500"
      ref={skillsRef}
      style={{
        backgroundColor: colors.backgroundAlt,
        color: colors.text,
      }}
    >
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="text-center mb-14">
          <h2
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-6"
            style={{
              color: colors.primary,
              fontFamily: "'Simonetta', serif",
            }}
          >
            Skills:
          </h2>
          <p
            className="text-lg leading-relaxed font-medium"
            style={{ fontFamily: "'Nunito', sans-serif", color: colors.textMuted }}
          >
            Algumas das tecnologias que utilizo para criar projetos incríveis.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-center p-6 rounded-2xl shadow-md border-2 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: isDark ? colors.background : "#ffffff",
                borderColor: colors.primary,
                boxShadow: isDark
                  ? "0 8px 16px rgba(0,0,0,0.4)"
                  : "0 8px 16px rgba(0,0,0,0.1)",
                color: colors.text,
              }}
            >
              <span
                className="text-lg sm:text-xl font-semibold"
                style={{ fontFamily: "'Nunito', sans-serif" }}
              >
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
