import express from "express";
import gradeRoutes from "./routes/gradeRoutes"; // Sin extensión `.js`

const app = express();
app.use(express.json());

app.use("/api/v1", gradeRoutes); // Ruta principal

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
