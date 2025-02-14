import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import UserManagement from "./components/services/UserManagement";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  return (
    <Router>
      <Routes>
        {!token ? (
          <Route path="*" element={<Login onLogin={setToken} />} />
        ) : (
          <>
            <Route path="/" element={<Dashboard onLogout={() => setToken(null)} />} />
            <Route path="/users" element={<UserManagement />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
