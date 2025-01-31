const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Actualizar un usuario por ID
const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, email, password, rol } = req.body;

    // Buscar usuario por ID
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    let hashedPassword = user.password;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    // Actualizar usuario
    await user.update({ nombre, email, password: hashedPassword, rol });

    res.status(200).json({ message: 'Usuario actualizado exitosamente', user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { updateUserById };
