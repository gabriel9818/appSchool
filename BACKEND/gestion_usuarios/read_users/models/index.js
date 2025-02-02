const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Configurar la conexión a la base de datos users
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false,
});

// Importar el modelo User
const User = require('./User')(sequelize);

module.exports = { sequelize, User };
