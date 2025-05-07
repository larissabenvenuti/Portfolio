"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
  const { isDark, colors } = useTheme();
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSecondText(true);
    }, 2800);
    return () => clearTimeout(timeout);
  }, []);

  const buttonBaseClasses =
    "flex items-center justify-center min-w-[200px] h-12 rounded-full font-semibold text-md transition-all duration-300 px-6 shadow-md";

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
      className="relative flex flex-col items-center justify-center min-h-screen px-8 md:px-20 py-16 transition-colors duration-500"
      style={{ backgroundColor: colors.background }}
    >
      <div className="flex-1 flex flex-col items-center justify-center text-center lg:text-left space-y-6 z-10">
        <h1
          className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
          style={{
            color: colors.text,
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          <Typewriter
            words={["Olá, sou Larissa Benvenuti."]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </h1>

        {showSecondText && (
          <h2
            className="text-2xl md:text-3xl font-semibold"
            style={{
              color: colors.accent,
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            <Typewriter
              words={["Desenvolvedora Web."]}
              loop={1}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={500}
            />
          </h2>
        )}

        <p
          className="mt-4 text-lg max-w-xl leading-relaxed"
          style={{
            color: colors.textMuted,
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          Transformando sites em experiências digitais únicas para cada usuário.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#projetos"
              className={buttonBaseClasses}
              style={buttonStyle}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, buttonHoverStyle)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, { backgroundPosition: "left center" })
              }
            >
              Ver Projetos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href="#sobre"
              className={buttonBaseClasses}
              style={buttonStyle}
              onMouseEnter={(e) =>
                Object.assign(e.currentTarget.style, buttonHoverStyle)
              }
              onMouseLeave={(e) =>
                Object.assign(e.currentTarget.style, { backgroundPosition: "left center" })
              }
            >
              Fale Comigo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
