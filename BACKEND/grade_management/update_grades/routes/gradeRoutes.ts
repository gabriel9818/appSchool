import { Router } from "express";
import { updateGrade } from "../controllers/gradeUpdateController";

const router = Router();

router.put("/grades/:id", updateGrade); // Ruta para actualizar una calificación

export default router;
