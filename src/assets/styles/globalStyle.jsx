import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

body[data-theme='light'] {
  background-color: #ffffff;
  color: #000000;
}

body[data-theme='dark'] {
  background-color: #000000;
  color: #ffffff;
}

h1, h2, h3, p, ul, li, figure {
  margin: 0;
  padding: 0;
}

.container {
  padding: 20px;
}

h1, h2, h3 {
  font-size: 1.5rem;
}

@media (max-width: 768px) {
  body {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 13px;
  }
}

@media (max-width: 320px) {
  body {
    font-size: 12px;
  }

  h1 {
    font-size: 1.3rem;
  }
}
`;
