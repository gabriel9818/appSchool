import { Router } from "express";
import { addGrade } from "../controllers/gradeController.js";

const router = Router();

router.post("/grades", addGrade);

export default router;
