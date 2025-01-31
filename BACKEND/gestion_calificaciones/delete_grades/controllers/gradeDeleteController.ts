import type { Request, Response } from "express";
import pool from "../db/database.js"; // Verifica que database.js existe y tiene export

export const deleteGrade = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;

        if (!id) {
            res.status(400).json({ message: "Grade ID is required" });
            return;
        }

        const result = await pool.query("DELETE FROM grades WHERE id = $1 RETURNING *", [id]);

        if (result.rowCount === 0) {
            res.status(404).json({ message: "Grade not found" });
            return;
        }

        res.status(200).json({ message: "Grade deleted successfully", deletedGrade: result.rows[0] });
    } catch (error: any) {
        res.status(500).json({ message: "Error deleting grade", error: error.message });
    }
};
