const { User } = require('../models');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll(); // Obtener todos los usuarios
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    console.log(`🔹 Buscando usuario con email: ${email}`);

    const user = await User.findOne({ 
      where: { email },
      attributes: ['id', 'nombre', 'email', 'password', 'rol'] // 🔹 Asegurar que la consulta devuelva la contraseña
    });

    if (!user) {
      console.log("User no found");
      return res.status(404).json({ error: 'User no found' });
    }

    console.log(`Correct: ${user.email}`);
    res.status(200).json(user);
  } catch (error) {
    console.error(" Mistake in search user:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllUsers, getUserByEmail };
