import React, { useState, useEffect } from "react";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // Función para manejar el login y guardar el token
  const handleLogin = (token) => {
    setToken(token);
    localStorage.setItem("token", token); // Guarda el token en localStorage
  };

  // Función para cerrar sesión
  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token"); // Elimina el token al cerrar sesión
  };

  return (
    <div>
      {token ? (
        <Dashboard onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
