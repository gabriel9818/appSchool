const { DataTypes } = require('sequelize');
const { sequelize } = require('./index');

const User = sequelize.define('Users', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('profesor', 'usuario', 'administrador'),
    allowNull: false,
  },
}, {
  tableName: 'Users', // Asegurar que coincide con la base de datos
  timestamps: false,
});

module.exports = User;
