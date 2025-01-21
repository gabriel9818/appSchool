import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles.css"; // Importa los estilos generales

// Renderiza el componente principal App en el elemento raíz
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
