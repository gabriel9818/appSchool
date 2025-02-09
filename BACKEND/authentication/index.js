const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;

// 🔹 Habilitar CORS
app.use(cors({ origin: "http://localhost:4000", credentials: true }));

// Middleware
app.use(bodyParser.json());

// Rutas
app.use("/api/auth", authRoutes);

// Arrancar el servidor
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
