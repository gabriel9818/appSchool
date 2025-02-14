module.exports = (sequelize, DataTypes) => {
  return sequelize.define('User', {
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
    tableName: 'Users', // Nombre real en la BD
    timestamps: false,
  });
};
