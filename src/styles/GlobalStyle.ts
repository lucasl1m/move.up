import { createGlobalStyle } from "styled-components";
import { theme } from "./themes";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.colors.surface};
    color: #666;
  }

  body, input, button, textarea {
    font: 400 1rem "Inter", sans-serif;
  }

  button { 
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }
`;
