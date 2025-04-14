"use client"

import React from "react";
import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import Link from "next/link";

const About = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/larissabenvenuti/",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/larissabenvenuti",
      label: "GitHub",
    },
  ];

  const buttonBaseClasses =
    "flex items-center justify-center w-28 h-12 rounded-lg font-medium text-lg transition-all duration-300 border";
  const buttonClasses = isDark
    ? `${buttonBaseClasses} bg-gray-800 border-gray-700 text-white hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-600`
    : `${buttonBaseClasses} border-pink-300 text-black hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-400`;

  return (
    <>
      <div className="text-center mb-6" id="sobre">
        <h1
          className={`text-4xl font-extrabold ${isDark ? "text-white" : "text-black"} tracking-wide`}
        >
          Sobre
        </h1>
      </div>

      <section
        className={`py-12 px-6 md:px-16 flex flex-col md:flex-row-reverse items-center justify-between gap-8 rounded-xl shadow-lg transition-colors duration-500`}
      >
        <div className="flex-1 max-w-2xl space-y-4">
          <p className="text-lg leading-relaxed text-justify">
            Olá, sou{" "}
            <strong className="font-semibold">Larissa Benvenuti</strong>,
            nascida no interior do Rio de Janeiro e apaixonada por tecnologia e
            suas infinitas possibilidades.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            Com formação full-stack e atualmente cursando Sistemas de Computação
            na UFF, desenvolvo aplicações web e mobile com foco em performance e
            experiência do usuário.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            Utilizo tecnologias como React, Next.js, React Native, TypeScript e
            APIs REST para criar soluções modernas e eficientes.
          </p>
          <div className="flex gap-4 mt-8 flex-wrap justify-center">
            {socialLinks.map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
              >
                {label}
              </Link>
            ))}

            <a
              href="/docs/CV_Larissa_Benvenuti.pdf"
              download="Currículo_Larissa_Benvenuti"
              className={buttonClasses}
            >
              Currículo
            </a>

            <a
              href="mailto:larissabenvenutia@gmail.com"
              className={buttonClasses}
            >
              E-mail
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-center relative">
          <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden relative">
            <Image
              src="/images/avatar.jpg"
              alt="Foto de Larissa Benvenuti, desenvolvedora front-end"
              layout="responsive"
              width={256}
              height={256}
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
