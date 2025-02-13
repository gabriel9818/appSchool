import db from "../db.js";
import { Student } from "../models/student.js";

/**
 * @swagger
 * /students/{id}:
 *   delete:
 *     summary: Delete a student
 *     description: Removes a student from the database using their ID.
 *     tags:
 *       - Students
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The student ID
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       400:
 *         description: Invalid ID
 *       500:
 *         description: Internal server error
 */
export const deleteStudent = async ({ params }) => {
  try {
    const { id } = params;

    // Validate ID
    if (!id || isNaN(id)) {
      return { error: "Invalid student ID", status: 400 };
    }

    // Create a new student instance
    const student = new Student(id);

    // Delete from database
    const [result] = await db.execute("DELETE FROM students WHERE id = ?", [student.id]);

    if (result.affectedRows === 0) {
      return { error: "Student not found", status: 404 };
    }

    return { message: "Student deleted successfully" };
  } catch (error) {
    console.error("❌ Error deleting student:", error);
    return { error: "Internal server error", status: 500 };
  }
};
