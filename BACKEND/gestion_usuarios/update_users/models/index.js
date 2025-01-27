const { sequelize } = require('../../create_users/models/index'); // Conexión a la base de datos
const User = require('../../create_users/models/User'); // Modelo User del microservicio create_users

module.exports = { sequelize, User };
