const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

// Configuración de la conexión a la base de datos
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  logging: false // Opcional: Desactivar logs de SQL en la consola
});

// Importar modelos
const User = require('./User')(sequelize);

module.exports = { sequelize, User };
