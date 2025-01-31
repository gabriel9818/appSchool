import express from "express";
import gradeRoutes from "./routes/gradeRoutes";

const app = express();
app.use(express.json());

app.use("/api/v1", gradeRoutes);

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
