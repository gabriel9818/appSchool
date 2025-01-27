const { sequelize } = require('../gestion_usuarios/create_users/models/index'); // Ruta relativa a sequelize
const User = require('../gestion_usuarios/create_users/models/User'); // Ruta relativa al modelo User

module.exports = { sequelize, User };