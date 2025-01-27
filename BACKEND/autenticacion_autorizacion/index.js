const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const authRoutes = require('./routes/authRoutes');
const { secretKey } = require('./utils/jwt');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/auth', authRoutes);

// Conectar a la base de datos y arrancar el servidor
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
    console.log(`JWT Secret Key: ${secretKey}`); // Imprimir la clave secreta (solo para desarrollo)
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  