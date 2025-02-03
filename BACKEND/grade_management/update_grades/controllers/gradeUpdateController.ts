import type { Request, Response } from "express";
import pool from "../db/database";

export const updateGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { student_id, subject, grade } = req.body;

        if (!id || !student_id || !subject || !grade) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        const result = await pool.query(
            "UPDATE grades SET student_id = $1, subject = $2, grade = $3 WHERE id = $4 RETURNING *",
            [student_id, subject, grade, id]
        );

        if (result.rowCount === 0) {
            res.status(404).json({ message: "Grade not found" });
            return;
        }

        res.status(200).json({ message: "Grade updated successfully", updatedGrade: result.rows[0] });
    } catch (error: any) {
        res.status(500).json({ message: "Error updating grade", error: error.message });
    }
};
