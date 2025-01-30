import React from "react";
import { HeroContainer, HeroTitle, HeroDescription } from "./hero";
import { useTheme } from "../../contexts/ThemeProvider";

export const Hero = () => {
  const { isDarkTheme } = useTheme();

  return (
    <HeroContainer
      id="home"
      style={{ backgroundColor: isDarkTheme ? "#333" : "#fff" }}
    >
      <div>
        <HeroTitle style={{ color: isDarkTheme ? "#fff" : "#000" }}>
          Larissa Benvenuti
        </HeroTitle>
        <HeroDescription style={{ color: isDarkTheme ? "#ddd" : "#333" }}>
          Desenvolvedora full-stack apaixonada por transformar ideias em
          soluções inovadoras e impactantes. Pronta para levar seu projeto ao
          próximo nível.
        </HeroDescription>
      </div>
    </HeroContainer>
  );
};
