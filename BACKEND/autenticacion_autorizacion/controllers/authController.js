const { User } = require('../models');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/jwt');

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

    res.status(200).json({ message: 'Autenticación exitosa', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { login };
