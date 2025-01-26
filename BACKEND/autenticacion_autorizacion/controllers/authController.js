const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByUsername } = require("../models/userModel");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  try {
    const user = await findUserByUsername(username);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return res.status(200).json({ token, message: "Inicio de sesión exitoso" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { login };
