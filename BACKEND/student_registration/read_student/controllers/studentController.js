import db from "../db.js";
import { Student } from "../models/student.js";

/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     description: Retrieves all students from the database.
 *     tags:
 *       - Students
 *     responses:
 *       200:
 *         description: A list of students
 *       500:
 *         description: Internal server error
 */
export const getAllStudents = async () => {
  try {
    const [rows] = await db.execute("SELECT * FROM students");

    const students = rows.map(
      (student) =>
        new Student(student.id, student.name, student.email, student.age, student.created_at)
    );

    return students;
  } catch (error) {
    console.error("❌ Error retrieving students:", error);
    return { error: "Internal server error", status: 500 };
  }
};

/**
 * @swagger
 * /students/{id}:
 *   get:
 *     summary: Get a student by ID
 *     description: Retrieves a specific student by ID.
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
 *         description: Student data
 *       404:
 *         description: Student not found
 *       500:
 *         description: Internal server error
 */
export const getStudentById = async ({ params }) => {
  try {
    const { id } = params;

    if (!id || isNaN(id)) {
      return { error: "Invalid student ID", status: 400 };
    }

    const [rows] = await db.execute("SELECT * FROM students WHERE id = ?", [id]);

    if (rows.length === 0) {
      return { error: "Student not found", status: 404 };
    }

    const student = new Student(rows[0].id, rows[0].name, rows[0].email, rows[0].age, rows[0].created_at);

    return student;
  } catch (error) {
    console.error("❌ Error retrieving student:", error);
    return { error: "Internal server error", status: 500 };
  }
};
