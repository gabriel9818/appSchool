const axios = require("axios"); // Para hacer la petición a read_users
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt");

// URL de los microservicios
const LOGS_SERVICE_URL = process.env.LOGS_SERVICE_URL || "http://localhost:4567/logs";
const READ_USERS_SERVICE_URL = process.env.READ_USERS_SERVICE_URL || "http://44.207.13.64:3001/api/users/email"; 

// Iniciar sesión
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(`🔹 Consultando usuario en: ${READ_USERS_SERVICE_URL}/${email}`);

    // Consultar el microservicio read_users para verificar si el usuario existe
    const response = await axios.get(`${READ_USERS_SERVICE_URL}/${email}`);

    if (!response.data) {
      console.log("❌ Usuario no encontrado");
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const user = response.data; // El usuario ya está en response.data

    console.log(`✅ Usuario encontrado: ${user.email}`);

    // Comparar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("❌ Contraseña incorrecta");
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Generar un token JWT
    const token = generateToken({ id: user.id, email: user.email, rol: user.rol });

    console.log(`🔹 Token generado para: ${user.email}`);

    // Registrar acción en el microservicio de logs
    try {
      await axios.post(LOGS_SERVICE_URL, {
        user_id: user.id,
        action: "Login",
        details: `El usuario ${user.email} inició sesión.`,
      });
      console.log("✅ Acción registrada en logs");
    } catch (logError) {
      console.error("⚠️ No se pudo registrar en logs:", logError.message);
    }

    res.status(200).json({ message: "Autenticación exitosa", token });
  } catch (error) {
    console.error("❌ Error en el login:", error.message);

    // Si el error es de Axios (ejemplo, fallo en la conexión con read_users)
    if (error.response) {
      console.error(`❌ Error de Axios: ${error.response.status} - ${error.response.data}`);
      return res.status(error.response.status).json({ error: error.response.data });
    }

    res.status(500).json({ error: "Error interno del servidor" });
  }
};

module.exports = { login };
