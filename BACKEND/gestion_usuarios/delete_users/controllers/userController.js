const { User } = require('../models');

// Eliminar un usuario por su ID
const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;

    // Buscar el usuario antes de eliminarlo
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Eliminar el usuario
    await user.destroy();
    res.status(200).json({ message: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { deleteUserById };
