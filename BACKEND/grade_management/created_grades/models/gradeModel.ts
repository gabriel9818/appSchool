import pool from "../db/database";

export async function createGrade(student_id: number, subject: string, grade: number) {
    const query = `
        INSERT INTO grades (student_id, subject, grade)
        VALUES ($1, $2, $3) RETURNING *;
    `;
    const values = [student_id, subject, grade];
    const { rows } = await pool.query(query, values);
    return rows[0];
}
