import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Arial, sans-serif;
    font-size: 16px;
  }
  
  * {
    box-sizing: border-box;
  }

  h1, h2, h3, p, ul, li, figure {
    margin: 0;
    padding: 0;
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

  .container {
    padding: 20px;
  }

  h1, h2, h3 {
    font-size: 1.5rem;
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
