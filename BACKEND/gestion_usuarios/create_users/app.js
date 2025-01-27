const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear solicitudes JSON
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);

// Sincronizar la base de datos y arrancar el servidor
sequelize.sync({ force: false }) // Cambia a `true` si deseas reiniciar la base de datos en cada ejecución
  .then(() => {
    console.log('Database connected successfully.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
