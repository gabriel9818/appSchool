const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors'); 

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3002; // Asegurar que el puerto no entre en conflicto

app.use(cors({
  origin: "http://localhost:4000", // Permite peticiones desde tu frontend
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization"
}));

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/delete', userRoutes);

// Conectar a la base de datos y arrancar el servidor
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
