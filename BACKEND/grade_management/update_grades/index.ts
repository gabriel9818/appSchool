import express from "express";
import dotenv from "dotenv";
import gradeRoutes from "./routes/gradeRoutes";

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 2003; 

console.log("⚙️ Configuración cargada:", process.env);
console.log(`🚀 Server running on port ${PORT}`);

app.use(express.json());
app.use("/api/v1", gradeRoutes);

app.listen(PORT, () => {
    console.log(`✅ Listening on port ${PORT}`);
});
