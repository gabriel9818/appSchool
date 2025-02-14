import React, { useEffect, useState } from "react";
import { FaTrash, FaEdit, FaPlus, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./userManagement.css"; // Archivo CSS

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No hay token disponible");
        return;
      }

      const response = await fetch("http://44.207.13.64:3001/api/users", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.ok) {
        setUsers(data);
      } else {
        console.error("Error al obtener usuarios");
      }
    } catch (error) {
      console.error("Error de conexión con el servidor:", error);
    }
  };

  // 🔹 Función para eliminar usuario
  const deleteUser = async (id) => {
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) return;

    try {
      const response = await fetch(`http://98.85.176.95:3004/api/delete/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("✅ Usuario eliminado correctamente");
        fetchUsers(); // Recargar la lista de usuarios después de eliminar
      } else {
        console.error("Error al eliminar usuario");
      }
    } catch (error) {
      console.error("❌ Error de conexión con el servidor:", error);
    }
  };

  // 🔹 Función para navegar a la página de edición
  const editUser = (id) => {
    navigate(`/edit-user/${id}`);
  };

  return (
    <div className="user-management-container">
      <div className="header">
        <button className="btn back-btn" onClick={() => navigate("/")}>
          <FaArrowLeft /> Regresar
        </button>
        <h2>Gestión de Usuarios</h2>
        <button className="btn add-btn" onClick={() => navigate("/add-user")}>
          <FaPlus /> Agregar Usuario
        </button>
      </div>

      <input
        type="text"
        placeholder="Buscar por email..."
        className="search-bar"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) =>
              user.email.toLowerCase().includes(search.toLowerCase())
            )
            .map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.email}</td>
                <td>{user.rol}</td>
                <td className="actions">
                  <button className="edit-btn" onClick={() => editUser(user.id)}>
                    <FaEdit />
                  </button>
                  <button className="delete-btn" onClick={() => deleteUser(user.id)}>
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
