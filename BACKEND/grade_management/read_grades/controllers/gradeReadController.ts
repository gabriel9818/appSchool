import type { Request, Response } from "express";
import pool from "../db/database.js"; // Verifica que el archivo existe y tiene export

export const getAllGrades = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await pool.query("SELECT * FROM grades");

        if (result.rowCount === 0) {
            res.status(404).json({ message: "No grades found" });
            return;
        }

        res.status(200).json({ message: "Grades retrieved successfully", grades: result.rows });
    } catch (error: any) {
        res.status(500).json({ message: "Error retrieving grades", error: error.message });
    }
};
