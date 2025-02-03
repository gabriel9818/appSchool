const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3004;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/update', userRoutes);

// Conectar a la base de datos y arrancar el servidor
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a la base de datos exitosa.');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar a la base de datos:', err);
  });
