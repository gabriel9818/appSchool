import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Panel Principal</h1>
      <div className="dashboard-buttons">
        <button className="dashboard-btn">Gestionar Usuarios</button>
        <button className="dashboard-btn">Gestión de Cursos</button>
        <button className="dashboard-btn">Gestión de Horarios</button>
        <button className="dashboard-btn">Gestión de Eventos</button>
        <button className="dashboard-btn">Generación de Reportes</button>
        <button className="dashboard-btn">Gestión de Calificaciones</button>
      </div>
    </div>
  );
};

export default Dashboard;

