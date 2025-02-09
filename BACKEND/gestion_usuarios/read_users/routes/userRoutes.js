const express = require('express');
const { getAllUsers, getUserByEmail } = require('../controllers/userController'); // 🔹 Importación correcta

const router = express.Router();

// Ruta para obtener todos los usuarios
router.get('/', getAllUsers);

// Ruta para obtener un usuario por email 🔹 Corrección aquí
router.get('/email/:email', getUserByEmail); 

module.exports = router;

