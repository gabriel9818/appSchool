const User = require('../models/User');
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  try {
    const { nombre, email, password, rol } = req.body;

    // Validar el rol
    if (!['profesor', 'usuario', 'administrador'].includes(rol)) {
      return res.status(400).json({ error: 'Rol no válido' });
    }

    // Hash de la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear usuario
    const user = await User.create({
      nombre,
      email,
      password: hashedPassword,
      rol,
    });

    res.status(201).json({ message: 'Usuario creado exitosamente', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUser };
