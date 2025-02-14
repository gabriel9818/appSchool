const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  logging: false,
});


const User = require('./User')(sequelize, Sequelize.DataTypes);


sequelize.sync()
  .then(() => console.log('✅ Modelos sincronizados correctamente.'))
  .catch((err) => console.error('❌ Error al sincronizar modelos:', err));


module.exports = { sequelize, User };
