const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userController');

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', getAllUsers);

// Ruta para obtener un usuario por ID
router.get('/:id', getUserById);

router.get("/users/:email", async (req, res) => {
    try {
      const user = await User.findOne({ where: { email: req.params.email } });
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      res.json({ user });
    } catch (error) {
      console.error("Error al buscar usuario:", error);
      res.status(500).json({ error: error.message });
    }
  });
  

module.exports = router;
