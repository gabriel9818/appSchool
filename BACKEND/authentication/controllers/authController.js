const { User } = require('../models');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwt');

const axios = require('axios'); // Importamos axios para hacer la petición al microservicio de logs

// URL del microservicio de logs
const LOGS_SERVICE_URL = "http://localhost:4567/logs"; 

// Iniciar sesión
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Buscar al usuario por email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Comparar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Contraseña incorrecta' });
    }

    // Generar un token JWT
    const token = generateToken({ id: user.id, email: user.email, rol: user.rol });

    await axios.post(LOGS_SERVICE_URL, {
      user_id: user.id,
      action: 'Login',
      details: `El usuario ${user.email} inició sesión.`
    });

    res.status(200).json({ message: 'Autenticación exitosa', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login };
