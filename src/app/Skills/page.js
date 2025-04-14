import React from "react";
import { useTheme } from "../../context/ThemeContext";

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
  "Styled-Components",
  "Next.js",
  "Redux",
  "APIs REST",
];

export const Skills = () => {
  const { isDark } = useTheme();

  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-12 lg:px-24 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto p-4 md:p-8 transition-all duration-300">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Minhas Skills
          </h2>
        </div>

        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          }}
        >
          {skills.map((skill) => (
            <div
              key={skill}
              className={`flex items-center justify-center rounded-xl p-6 shadow-md border-2 border-transparent transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-gray-800 text-white hover:border-white"
                  : "bg-white text-gray-900 hover:border-pink-300"
              }`}
            >
              <span className="text-lg font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
