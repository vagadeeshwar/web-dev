import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding:0;
  }
  html,
  body,
  #__next,
  #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    text-align:center;
  }
  img,
  picture,
  video,
  canvas,
  svg,
  button {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  #root,
  #__next {
    isolation: isolate;
  }

  :root{

  }
  body{

  }
`;

export default GlobalStyle;
