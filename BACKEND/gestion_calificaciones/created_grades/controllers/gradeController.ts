import type { Request, Response } from "express";
import { createGrade } from "../models/gradeModel";

export async function addGrade(req: Request, res: Response): Promise<void> {
    try {
        const { student_id, subject, grade } = req.body;

        if (!student_id || !subject || !grade) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }

        const newGrade = await createGrade(student_id, subject, grade);
        res.status(201).json({ message: "Grade created successfully", grade: newGrade });

    } catch (error) {
        const err = error as Error;
        res.status(500).json({ message: "Error creating grade", error: err.message });
    }
}

