import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import UserManagement from "./components/services/UserManagement";
import UserForm from "./components/services/UserForm";
import UserEdit from "./components/services/UserEdit";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/add-user" element={<UserForm />} />
        <Route path="/edit-user/:id" element={<UserEdit />} />
      </Routes>
    </Router>
  );
};

export default App;
