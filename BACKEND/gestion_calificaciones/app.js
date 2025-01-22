const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config(); // Asegúrate de cargar el archivo .env

const createCalificaciones = require("./dominios_calificaciones/created_calificaciones");
const readCalificaciones = require("./dominios_calificaciones/read_calificaciones");
const updateCalificaciones = require("./dominios_calificaciones/update_calificaciones");
const deleteCalificaciones = require("./dominios_calificaciones/delete_calificaciones");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Registrar microservicios
app.use("/api/create", createCalificaciones);
app.use("/api/read", readCalificaciones);
app.use("/api/update", updateCalificaciones);
app.use("/api/delete", deleteCalificaciones);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

