import React from "react";
import { useTheme } from "../../contexts/ThemeProvider"; 
import { technologiesData } from "./data"; 
import { TechContainer, TechImage, TechItem, TechLink, TechList, TechTitle } from "./tech"; 

export const Tech = () => {
    const { isDarkTheme } = useTheme(); 

    return (
      <TechContainer>
        <TechTitle>Tecnologias que eu utilizo</TechTitle>

        <TechList aria-label="Lista de Tecnologias">
          {technologiesData.map((tech) => (
            <TechItem key={tech.name}>
              <h2>{tech.name}</h2>
              <TechLink
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Saiba mais sobre ${tech.name}`}
              >
                <TechImage
                  src={tech.image}
                  alt={`${tech.name} logo`}
                />
              </TechLink>
            </TechItem>
          ))}
        </TechList>
      </TechContainer>
    );
};
