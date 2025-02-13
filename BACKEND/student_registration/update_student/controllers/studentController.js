import db from "../db.js";
import { Student } from "../models/student.js";

/**
 * @swagger
 * /students/{id}:
 *   put:
 *     summary: Update a student's information
 *     description: Updates a student's name, email, and age in the database.
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               age:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Student not found
 *       500:
 *         description: Internal server error
 */
export const updateStudent = async ({ params, request }) => {
  try {
    const { id } = params;
    const { name, email, age } = await request.json();

    if (!id || isNaN(id)) {
      return { error: "Invalid student ID", status: 400 };
    }

    if (!name || !email || !age) {
      return { error: "All fields (name, email, age) are required", status: 400 };
    }

    const student = new Student(id, name, email, age);

    const [result] = await db.execute(
      "UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?",
      [student.name, student.email, student.age, student.id]
    );

    if (result.affectedRows === 0) {
      return { error: "Student not found", status: 404 };
    }

    return { message: "Student updated successfully" };
  } catch (error) {
    console.error("❌ Error updating student:", error);
    return { error: "Internal server error", status: 500 };
  }
};
