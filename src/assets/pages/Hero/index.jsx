import React from "react";
import { HeroContainer, HeroTitle, HeroDescription } from "./hero";
import { useTheme } from "../../contexts/ThemeProvider";

export const Hero = () => {
  const { isDarkTheme } = useTheme();
  const backgroundColor = isDarkTheme ? "#000" : "#fff";
  const titleColor = isDarkTheme ? "#fff" : "#000";
  const descriptionColor = isDarkTheme ? "#ddd" : "#000";

  return (
    <HeroContainer
      id="home"
      style={{ backgroundColor }}
      aria-labelledby="heroTitle"
    >
      <div>
        <HeroTitle
          id="heroTitle"
          style={{ color: titleColor }}
          aria-label="Título principal"
        >
          Larissa Benvenuti
        </HeroTitle>
        <HeroDescription style={{ color: descriptionColor }}>
          Desenvolvedora front-end apaixonada por transformar ideias em soluções inovadoras e impactantes. Pronta para levar seu projeto ao próximo nível.
        </HeroDescription>
      </div>
    </HeroContainer>
  );
};
