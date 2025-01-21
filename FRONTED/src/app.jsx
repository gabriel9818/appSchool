import React, { useState } from "react";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
