const express = require('express');
const { getAllUsers, getUserById } = require('../controllers/userController');

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', getAllUsers);

// Ruta para obtener un usuario por ID
router.get('/:id', getUserById);

module.exports = router;
