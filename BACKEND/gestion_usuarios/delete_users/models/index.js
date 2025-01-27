const { sequelize } = require('../../create_users/models/index'); // Importa la conexión desde create_users
const User = require('../../create_users/models/User'); // Importa el modelo User desde create_users

module.exports = { sequelize, User }; // Exporta conexión y modelo
