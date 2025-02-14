const express = require('express');
const { updateUserById, getUserById } = require('../controllers/userController');

const router = express.Router();

// 🔹 Ruta para obtener usuario por ID
router.get('/:id', getUserById);

// 🔹 Ruta para actualizar usuario por ID
router.put('/:id', updateUserById);

module.exports = router;
