const { User } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// 🔹 Nueva función para buscar por email
const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllUsers, getUserById, getUserByEmail };
