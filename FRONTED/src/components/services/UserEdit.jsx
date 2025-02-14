import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./userManagement.css"; // Reutilizamos estilos

const UserEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ nombre: "", email: "", password: "", rol: "usuario" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  // 🔹 Obtener datos del usuario a editar
  const fetchUser = async () => {
    try {
      const response = await fetch(`http://98.85.176.95:3004/api/users/${id}`);

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error("Error al obtener usuario:", error);
      setError("No se pudo obtener el usuario. Verifica la conexión.");
    }
  };

  // 🔹 Función para actualizar usuario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`http://98.85.176.95:3004/api/users/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      alert("✅ Usuario actualizado correctamente");
      navigate("/users");
    } catch (error) {
      console.error("❌ Error en la actualización:", error);
      setError("No se pudo conectar con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Editar Usuario</h2>
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
          {loading ? "Guardando..." : "Actualizar"}
        </button>
        <button type="button" className="btn back-btn" onClick={() => navigate("/users")}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

export default UserEdit;
