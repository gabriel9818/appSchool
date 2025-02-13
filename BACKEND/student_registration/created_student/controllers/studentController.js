import db from "../db.js";
import { Student } from "../models/student.js";

/**
 * @swagger
 * /students:
 *   post:
 *     summary: Create a new student
 *     description: Adds a new student to the database.
 *     tags:
 *       - Students
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "John Doe"
 *               email:
 *                 type: string
 *                 example: "johndoe@example.com"
 *               age:
 *                 type: integer
 *                 example: 22
 *     responses:
 *       201:
 *         description: Student created successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
export const createStudent = async ({ request }) => {
    try {
      // Ensure the request has a body
      if (!request.body) {
        return { error: "Missing request body", status: 400 };
      }
  
      // Read the JSON body correctly
      const bodyText = await request.text();
      const { name, email, age } = JSON.parse(bodyText);
  
      // Validate input
      if (!name || !email || !age) {
        return { error: "All fields (name, email, age) are required", status: 400 };
      }
  
      // Insert into database
      const [result] = await db.execute(
        "INSERT INTO students (name, email, age) VALUES (?, ?, ?)",
        [name, email, age]
      );
  
      return { message: "Student created successfully", studentId: result.insertId };
    } catch (error) {
      console.error("❌ Error creating student:", error);
      return { error: "Internal server error", status: 500 };
    }
  };
  

