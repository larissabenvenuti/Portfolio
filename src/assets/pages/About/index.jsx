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
    <AboutSection
      id="sobre"
      aria-labelledby="aboutTitle"
      theme={{ isDarkTheme }}
    >
      <div>
        <AboutTitle theme={{ isDarkTheme }}>Sobre</AboutTitle>
        <AboutText theme={{ isDarkTheme }}>
          Olá, sou Larissa Benvenuti! Nascida e criada no interior do Rio de
          Janeiro, sempre fui fascinada por tecnologia e suas infinitas
          possibilidades. Com uma formação sólida em desenvolvimento full-stack
          e atualmente cursando Sistemas de Computação na Universidade Federal
          Fluminense, minha jornada no mundo da programação é marcada pela
          constante busca por aprender e aplicar novas tecnologias. Tenho
          experiência na construção de sistemas, com foco em desenvolvimento web
          e mobile, além de um interesse em outras áreas, utilizando tecnologias
          como React, JavaScript, TypeScript, React Native, Java, SQL, entre
          outras. Com o objetivo de me manter atualizada, estou sempre
          explorando novos desafios e buscando melhorar minha capacidade de
          criar experiências mais intuitivas e impactantes para os usuários.
          Vamos juntos criar experiências digitais que fazem a diferença?
        </AboutText>
        <SocialLinks aria-label="Links sociais">
          <SocialLink
            href="https://www.linkedin.com/in/larissabenvenuti/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no LinkedIn"
            theme={{ isDarkTheme }}
          >
            LinkedIn
          </SocialLink>
          <SocialLink
            href="https://github.com/larissabenvenuti"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil no GitHub"
            theme={{ isDarkTheme }}
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
