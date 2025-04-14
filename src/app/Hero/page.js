import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext";

export const Hero = () => {
  const { isDark } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="home"
      aria-labelledby="heroTitle"
      className={`relative flex h-screen flex-col items-center justify-center overflow-hidden transition-all duration-500`}
      style={{
        backgroundColor: isDark ? "var(--background-dark)" : "var(--background-light)",
        color: isDark ? "var(--foreground-dark)" : "var(--foreground-light)"
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-10 left-10 w-12 h-12 rounded-full ${
            isDark ? "bg-gradient-to-r from-gray-700 to-gray-600" : "bg-gradient-to-r from-pink-300 to-purple-400"
          } opacity-30 animate-pulse transform transition-all duration-500`}
        />
        <div
          className={`absolute top-1/4 left-1/3 w-10 h-10 rounded-full ${
            isDark ? "bg-gradient-to-r from-gray-700 to-gray-600" : "bg-gradient-to-r from-pink-300 to-purple-400"
          } opacity-40 animate-pulse delay-150 transform transition-all duration-500`}
        />
        <div
          className={`absolute top-1/2 left-2/3 w-14 h-14 rounded-full ${
            isDark ? "bg-gradient-to-r from-gray-700 to-gray-600" : "bg-gradient-to-r from-pink-300 to-purple-400"
          } opacity-50 animate-pulse delay-300 transform transition-all duration-500`}
        />
        <div
          className={`absolute top-3/4 left-1/4 w-16 h-16 rounded-full ${
            isDark ? "bg-gradient-to-r from-gray-700 to-gray-600" : "bg-gradient-to-r from-pink-300 to-purple-400"
          } opacity-40 animate-pulse delay-450 transform transition-all duration-500`}
        />
        <div
          className={`absolute top-3/4 left-3/4 w-8 h-8 rounded-full ${
            isDark ? "bg-gradient-to-r from-gray-700 to-gray-600" : "bg-gradient-to-r from-pink-300 to-purple-400"
          } opacity-30 animate-pulse delay-600 transform transition-all duration-500`}
        />
        <div
          className={`absolute top-1/3 left-1/2 w-12 h-12 rounded-full ${
            isDark ? "bg-gradient-to-r from-gray-700 to-gray-600" : "bg-gradient-to-r from-pink-300 to-purple-400"
          } opacity-35 animate-pulse delay-750 transform transition-all duration-500`}
        />
      </div>

      <div className="z-10 px-6 text-center">
        <h1
          id="heroTitle"
          aria-label="Título principal"
          className={`mb-8 font-extrabold text-4xl md:text-5xl lg:text-6xl transition-all duration-500 transform hover:scale-105 tracking-wide`}
          style={{
            color: isDark ? "white" : "black", 
          }}
        >
          Larissa Benvenuti
        </h1>

        <p
          className={`mx-auto max-w-3xl text-center text-lg md:text-xl lg:text-2xl leading-relaxed
            ${isDark ? "text-gray-300" : "text-gray-800"}
            ${isLoaded ? "animate-fadeInUp" : "opacity-0 translate-y-5"}`}
        >
          Desenvolvedora apaixonada por criar experiências digitais únicas. 
          Transformando ideias em soluções inovadoras com foco em resultados. 
        </p>
      </div>
    </section>
  );
};

export default Hero;
