const { sequelize } = require('../../create_users/models/index'); // Importa la conexión existente
const User = require('../../create_users/models/User'); // Importa el modelo de usuario

module.exports = { sequelize, User }; // Exporta la conexión y el modelo

