const express = require('express');
const { createUser } = require('../controllers/userController');

const router = express.Router();

// Endpoint para crear un usuario
router.post('/create', createUser); // 🔹 Se asegura que la ruta coincide con el cliente

module.exports = router;
