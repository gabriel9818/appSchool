console.log('Ruta actual:', __dirname);
console.log('Intentando importar desde:', require.resolve('../../gestion_usuarios/create_users/models/index'));

const { sequelize } = require('../../gestion_usuarios/create_users/models/index');
const User = require('../../gestion_usuarios/create_users/models/User');

module.exports = { sequelize, User };


