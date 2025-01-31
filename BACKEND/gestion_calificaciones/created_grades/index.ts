import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gradeRoutes from "./routes/gradeRoutes";

dotenv.config();

const app = express();
const PORT = process.env.APP_PORT || 3000;

app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/v1", gradeRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

