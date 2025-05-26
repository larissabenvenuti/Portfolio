"use client";

import React from "react";
import { useTheme } from "../../context/ThemeContext";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const { isDark, colors } = useTheme();

  const buttonBaseClasses =
    "flex items-center justify-center min-w-[180px] h-12 rounded-full font-semibold text-md transition-all duration-300 px-6 shadow-lg hover:scale-[1.03]";

  const buttonStyle = {
    backgroundColor: colors.buttonFrom,
    color: isDark ? "#ffffff" : "#000000",
    backgroundImage: `linear-gradient(to right, ${colors.buttonFrom}, ${colors.buttonTo})`,
    backgroundSize: "200% auto",
    backgroundPosition: "left center",
    transition: "background-position 0.4s ease, color 0.4s ease",
  };

  const buttonHoverStyle = {
    backgroundPosition: "right center",
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-8 md:px-20 py-20 transition-colors duration-500 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
        <div className="w-full h-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 flex flex-col items-center text-center max-w-3xl"
      >
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4"
          style={{
            color: colors.text,
          }}
        >
          <Typewriter
            words={["Olá, sou Larissa Benvenuti."]}
            loop={true}
            cursor={false}
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h1>

        <motion.p
          className="text-xl md:text-2xl font-semibold mb-2"
          style={{ color: colors.accent }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Desenvolvedora Web
        </motion.p>

        <motion.p
          className="text-base md:text-lg leading-relaxed text-center px-2 mb-6"
          style={{ color: colors.textMuted }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          Transformando sites em experiências digitais únicas para cada usuário.
        </motion.p>

        <div className="mt-4 flex flex-wrap gap-4 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.6 }}
          >
            <a
              href="#projetos"
              className={buttonBaseClasses}
              style={buttonStyle}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, buttonHoverStyle)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  backgroundPosition: "left center",
                })
              }
            >
              Ver Projetos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.8 }}
          >
            <a
              href="#contato"
              className={buttonBaseClasses}
              style={buttonStyle}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, buttonHoverStyle)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, {
                  backgroundPosition: "left center",
                })
              }
            >
              Fale Comigo
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
