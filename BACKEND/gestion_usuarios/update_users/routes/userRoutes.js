const express = require('express');
const { updateUserById } = require('../controllers/userController');

const router = express.Router();

// Ruta para actualizar un usuario por ID
router.put('/:id', updateUserById);

module.exports = router;
