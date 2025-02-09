const axios = require("axios"); // Para hacer la petición a read_users
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

// URL de los microservicios
const LOGS_SERVICE_URL = process.env.LOGS_SERVICE_URL || "http://localhost:4567/logs";
const READ_USERS_SERVICE_URL = process.env.READ_USERS_SERVICE_URL || "http://44.207.13.64:3001/api/users"; 

// Iniciar sesión
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Consultar el microservicio read_users para verificar si el usuario existe
    const response = await axios.get(`${READ_USERS_SERVICE_URL}/users/${email}`);


    if (!response.data || !response.data.user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const user = response.data.user;

    // Comparar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Generar un token JWT
    const token = generateToken({ id: user.id, email: user.email, rol: user.rol });

    // Registrar acción en el microservicio de logs
    await axios.post(LOGS_SERVICE_URL, {
      user_id: user.id,
      action: "Login",
      details: `El usuario ${user.email} inició sesión.`,
    });

    res.status(200).json({ message: "Autenticación exitosa", token });
  } catch (error) {
    console.error("❌ Error en el login:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login };
