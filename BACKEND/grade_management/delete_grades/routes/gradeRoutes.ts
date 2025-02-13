import { Router } from "express";
import { deleteGrade } from "../controllers/gradeDeleteController.js";

const router = Router();

// 💡 Usa el método `delete` en vez de `post`

router.delete("/grades/:id", (req, res) => deleteGrade(req, res));

export default router;
