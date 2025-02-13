import express from "express";
import dotenv from "dotenv";
import gradeRoutes from "./routes/gradeRoutes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/v1", gradeRoutes);

const PORT = process.env.APP_PORT || 2003;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
