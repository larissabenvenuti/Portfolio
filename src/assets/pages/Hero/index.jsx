import React from "react";
import { HeroContainer, HeroTitle, HeroDescription } from "./hero";

export const Hero = () => {
  return (
    <HeroContainer id="home" aria-labelledby="heroTitle">
      <div>
        <HeroTitle id="heroTitle" aria-label="Título principal">
          Larissa Benvenuti
        </HeroTitle>
        <HeroDescription>
          Desenvolvedora web/mobile apaixonada por transformar ideias em soluções inovadoras e impactantes. Pronta para levar seu projeto ao próximo nível.
        </HeroDescription>
      </div>
    </HeroContainer>
  );
};
