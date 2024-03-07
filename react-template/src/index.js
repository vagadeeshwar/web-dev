import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./GlobalStyle";

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
