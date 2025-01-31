import { Router } from "express";
import { getAllGrades } from "../controllers/gradeReadController.js";

const router = Router();

// Ruta para obtener todas las calificaciones
router.get("/grades", getAllGrades);

export default router;
