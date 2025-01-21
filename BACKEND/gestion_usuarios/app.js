const express = require("express");
const bodyParser = require("body-parser");

const createUsers = require("./dominios_usuarios/created_users");
const readUsers = require("./dominios_usuarios/read_users");
const updateUsers = require("./dominios_usuarios/update_users");
const deleteUsers = require("./dominios_usuarios/delete_users");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Registrar microservicios
app.use("/api/create", createUsers);
app.use("/api/read", readUsers);
app.use("/api/update", updateUsers);
app.use("/api/delete", deleteUsers);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
