import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./userManagement.css"; // Usamos los mismos estilos

const UserForm = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    password: "", // 🔹 Agregamos campo de contraseña
    rol: "usuario",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://13.216.145.69:3000/api/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.ok) {
        alert("✅ Usuario agregado correctamente");
        navigate("/users"); // Redirige a la lista de usuarios
      } else {
        setError(data.error || "Error al agregar usuario");
      }
    } catch (error) {
      console.error("❌ Error en la solicitud:", error);
      setError("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Agregar Nuevo Usuario</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input
          type="text"
          required
          value={user.nombre}
          onChange={(e) => setUser({ ...user, nombre: e.target.value })}
        />

        <label>Email:</label>
        <input
          type="email"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <label>Contraseña:</label>
        <input
          type="password"
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <label>Rol:</label>
        <select
          value={user.rol}
          onChange={(e) => setUser({ ...user, rol: e.target.value })}
        >
          <option value="usuario">Usuario</option>
          <option value="administrador">Administrador</option>
          <option value="profesor">Profesor</option>
        </select>

        <button type="submit" className="btn submit-btn" disabled={loading}>
          {loading ? "Guardando..." : "Guardar"}
        </button>
        <button type="button" className="btn back-btn" onClick={() => navigate("/users")}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default UserForm;
