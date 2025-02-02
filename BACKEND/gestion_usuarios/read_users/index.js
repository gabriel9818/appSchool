const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

// Cargar variables de entorno del paquete
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001; // Usa un puerto diferente al de create_users

// Middleware s
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);

// Conectar a la base de datos y arrancar el servidor 1
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
