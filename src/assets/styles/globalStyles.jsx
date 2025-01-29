import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: Arial, sans-serif;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    body {
      padding: 0;
      font-size: 14px;
    }
  }
`;

export default GlobalStyle;
