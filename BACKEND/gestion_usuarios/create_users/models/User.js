const { DataTypes } = require('sequelize');
const sequelize = require('./index').sequelize; // Asegurar la importación correcta

const User = sequelize.define('User', {
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
  password: { // 🔹 Se añadió el campo password al modelo
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.ENUM('profesor', 'usuario', 'administrador'),
    allowNull: false,
  },
});

module.exports = User;
