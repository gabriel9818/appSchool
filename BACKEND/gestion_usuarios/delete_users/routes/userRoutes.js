const express = require('express');
const { deleteUserById } = require('../controllers/userController');

const router = express.Router();

// Ruta para eliminar un usuario por ID
router.delete('/:id', deleteUserById);

module.exports = router;
