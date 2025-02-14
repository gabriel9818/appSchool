const { User } = require('../models');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
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
      attributes: ['id', 'nombre', 'email', 'password', 'rol'] // 🔹 Asegurar que la consulta incluya password
    });

    if (!user) {
      console.log("❌ Usuario no encontrado");
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    console.log(`✅ Usuario encontrado: ${user.email}`);
    res.status(200).json(user);
  } catch (error) {
    console.error("❌ Error al buscar usuario:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllUsers, getUserByEmail }; // 🔹 Exportación corregida
