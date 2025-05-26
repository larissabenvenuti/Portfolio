"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";
import aboutImage from "../../../public/images/avatar.jpg";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Download, ExternalLink } from "lucide-react";

const About = () => {
  const { isDark, colors } = useTheme();
  const [inView, setInView] = useState(false);
  const aboutRef = useRef(null);

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/larissabenvenuti/",
      label: "LinkedIn",
      icon: Linkedin,
      external: true,
      useLink: true,
    },
    {
      href: "https://github.com/larissabenvenuti",
      label: "GitHub",
      icon: Github,
      external: true,
      useLink: true,
    },
    {
      href: "/docs/CV_Larissa_Benvenuti.pdf",
      label: "Currículo",
      icon: Download,
      download: true,
      useLink: false, 
    },
    {
      href: "mailto:larissabenvenutia@gmail.com",
      label: "E-mail",
      icon: Mail,
      useLink: false, 
    },
  ];

  const buttonBaseClasses = `
    group relative overflow-hidden
    flex items-center justify-center gap-2
    min-w-[120px] sm:min-w-[130px] h-11
    rounded-full font-semibold text-sm
    transition-all duration-300 px-3 sm:px-4
    shadow-md hover:shadow-lg
    transform hover:-translate-y-0.5
    focus:outline-none focus:ring-2 focus:ring-offset-2
    active:transform active:scale-95
  `
    .replace(/\s+/g, " ")
    .trim();

  const getButtonStyle = useCallback(
    () => ({
      backgroundColor: colors.buttonFrom,
      color: isDark ? colors.buttonDarkText : colors.buttonLightText,
      backgroundImage: `linear-gradient(135deg, ${colors.buttonFrom}, ${colors.buttonTo})`,
    }),
    [colors, isDark]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2, rootMargin: "50px 0px" }
    );

    const currentRef = aboutRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  const buttonStyle = getButtonStyle();

  return (
    <section
      id="sobre"
      ref={aboutRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      style={{ backgroundColor: colors.background, color: colors.text }}
      aria-label="Seção sobre Larissa Benvenuti"
    >
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 flex-shrink-0 rounded-full overflow-hidden shadow-xl"
        >
          <Image
            src={aboutImage}
            alt="Larissa Benvenuti, Desenvolvedora Front-end"
            width={224}
            height={224}
            className="w-full h-full object-cover"
            priority
            placeholder="blur"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left max-w-2xl"
        >
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
            style={{ color: colors.primary }}
          >
            Sobre mim
          </h1>

          <div className="space-y-4" style={{ textAlign: "justify" }}>
            <p className="text-base sm:text-lg font-medium leading-relaxed">
              Olá! Sou a <strong>Larissa</strong> — Desenvolvedora apaixonada
              por tecnologia e inovação! Atualmente faço faculdade de{" "}
              <strong>Sistemas de Computação</strong> na Universidade Federal
              Fluminense.
            </p>

            <p className="text-base sm:text-lg leading-relaxed">
              Crio aplicações web modernas e responsivas utilizando{" "}
              <strong>React</strong>, <strong>Next.js</strong>,{" "}
              <strong>Styled-components</strong> e <strong>TailwindCSS</strong>,
              sempre focada em entregar a melhor experiência para os usuários.
              Também atuo no back-end com <strong>Python</strong> e{" "}
              <strong>Java</strong>.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-6 justify-center lg:justify-start">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              if (link.useLink) {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={buttonBaseClasses}
                    style={buttonStyle}
                    aria-label={`${link.label} ${
                      link.external ? "(abre em nova aba)" : ""
                    }`}
                  >
                    <Icon size={16} className="flex-shrink-0" />
                    <span className="truncate">{link.label}</span>
                    {link.external && (
                      <ExternalLink
                        size={12}
                        className="opacity-70 flex-shrink-0"
                      />
                    )}
                  </Link>
                );
              } else {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    download={link.download}
                    className={buttonBaseClasses}
                    style={buttonStyle}
                    aria-label={link.label}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    <Icon size={16} className="flex-shrink-0" />
                    <span className="truncate">{link.label}</span>
                  </a>
                );
              }
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
