"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";
import aboutImage from "../../../public/images/avatar.jpg";
import { motion } from "framer-motion";

const About = () => {
  const { isDark, colors } = useTheme();
  const [inView, setInView] = useState(false);
  const aboutRef = useRef(null);

  const socialLinks = [
    { href: "https://www.linkedin.com/in/larissabenvenuti/", label: "LinkedIn" },
    { href: "https://github.com/larissabenvenuti", label: "GitHub" },
  ];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 md:px-16 py-24 transition-colors duration-500"
      style={{ backgroundColor: colors.background, color: colors.text }}
      id="sobre"
      ref={aboutRef}
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
        
        <div
          className="relative w-36 h-48 md:w-44 md:h-60 flex-shrink-0 border-4 rounded-xl overflow-hidden shadow-lg"
          style={{
            borderColor: isDark ? colors.primary : colors.background,
          }}
        >
          <Image
            src={aboutImage}
            alt="Larissa Benvenuti, Desenvolvedora Front-end"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-justify md:text-left">
          <h1
            className="text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ color: colors.primary, fontFamily: "'Simonetta', serif" }}
          >
            Sobre:
          </h1>

          <p
            className="text-lg leading-relaxed font-medium"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Olá! Sou a Larissa - Desenvolvedora apaixonada por tecnologia e inovação digital! Atualmente faço faculdade de <strong>Sistemas de
            Computação</strong> na <strong>Universidade Federal Fluminense</strong>.
          </p>

          <p
            className="text-lg leading-relaxed font-medium"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Crio aplicações modernas e eficientes utilizando <strong>React</strong>,{" "}
            <strong>Next.js</strong> e <strong>TailwindCSS</strong>, sempre focada
            em entregar a melhor experiência para os usuários.
          </p>

          <p
            className="text-lg leading-relaxed font-medium"
            style={{ fontFamily: "'Nunito', sans-serif" }}
          >
            Busco constantemente evolução pessoal e profissional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            {socialLinks.map(({ href, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonBaseClasses}
                  style={buttonStyle}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, buttonHoverStyle)
                  }
                  onMouseLeave={(e) =>
                    Object.assign(e.currentTarget.style, { backgroundPosition: "left center" })
                  }
                >
                  {label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: socialLinks.length * 0.1 }}
            >
              <a
                href="/docs/CV_Larissa_Benvenuti.pdf"
                download="Currículo_Larissa_Benvenuti"
                className={buttonBaseClasses}
                style={buttonStyle}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, buttonHoverStyle)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, { backgroundPosition: "left center" })
                }
              >
                Currículo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: (socialLinks.length + 1) * 0.1 }}
            >
              <a
                href="mailto:larissabenvenutia@gmail.com"
                className={buttonBaseClasses}
                style={buttonStyle}
                onMouseEnter={(e) =>
                  Object.assign(e.currentTarget.style, buttonHoverStyle)
                }
                onMouseLeave={(e) =>
                  Object.assign(e.currentTarget.style, { backgroundPosition: "left center" })
                }
              >
                E-mail
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
