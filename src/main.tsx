import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import "./global.css";

/**
 * Typescript:
 *  - Ferramenta de tipagem estática para o Javascript
 *  - Tipagem estática: Mecanismo para evitar erros ENQUANTO estamos desenvolvendo o app
 */

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
