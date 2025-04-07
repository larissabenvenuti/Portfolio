import React from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import {
  AboutTitle,
  AboutSection,
  AboutText,
  SocialLinks,
  SocialLink,
  Image,
} from "./about";
import avatar from "../../images/avatar.jpg";

export const About = () => {
  const { isDarkTheme } = useTheme();

  return (
    <AboutSection id="sobre" aria-labelledby="aboutTitle">
      <div>
        <AboutTitle>Sobre</AboutTitle>
        <AboutText>
          Olá, sou Larissa Benvenuti! Nascida e criada no interior do Rio de Janeiro,
          sempre fui apaixonada por tecnologia e suas infinitas possibilidades.
          Com formação em desenvolvimento full-stack e atualmente cursando Sistemas
          de Computação na Universidade Federal Fluminense, venho construindo minha
          trajetória com foco em soluções web e mobile.

          Utilizo tecnologias como React, React Native, Next.js, JavaScript,
          TypeScript, Redux, Context API e APIs REST para desenvolver aplicações
          modernas, responsivas e centradas na experiência do usuário. Tenho
          experiência na construção de sistemas completos, do front-end ao back-end,
          sempre com atenção à performance e à usabilidade.

          Além disso, estou me especializando em desenvolvimento de jogos com Unreal
          Engine e C++, expandindo minha atuação para áreas mais interativas e
          imersivas da tecnologia.

          Sou movida por desafios e aprendizado contínuo, sempre buscando criar
          experiências digitais que realmente façam a diferença. Vamos juntos?
        </AboutText>

        <SocialLinks aria-label="Links sociais">
          <SocialLink
            href="https://www.linkedin.com/in/larissabenvenuti/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no LinkedIn"
          >
            LinkedIn
          </SocialLink>
          <SocialLink
            href="https://github.com/larissabenvenuti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no GitHub"
          >
            GitHub
          </SocialLink>
        </SocialLinks>
      </div>

      <Image
        src={avatar}
        alt="Foto de Larissa Benvenuti, desenvolvedora"
        role="img"
      />
    </AboutSection>
  );
};
