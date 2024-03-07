import React from "react";
import { createRoot } from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import App from "./App";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html,
  body,
  #__next,
  #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
  }
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  * {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  #root,
  #__next {
    isolation: isolate;
  }

  :root{
    --black:#1e1e1e;
    --grey:#3b3b3b;
  }

  body{
    background-color:var(--grey);
  }
`;

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <GlobalStyle></GlobalStyle>
    <App />
  </React.StrictMode>
);
