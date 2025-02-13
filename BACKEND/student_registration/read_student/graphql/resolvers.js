import db from "../db.js"; // Conexión a la base de datos

const resolvers = {
  Query: {
    getAllStudents: async () => {
      try {
        const [rows] = await db.execute("SELECT id, name FROM students");
        return rows;
      } catch (error) {
        console.error("Error fetching students:", error);
        return [];
      }
    },

    getStudentById: async (_, { id }) => {
      try {
        const [rows] = await db.execute("SELECT id, name FROM students WHERE id = ?", [id]);
        return rows.length > 0 ? rows[0] : null;
      } catch (error) {
        console.error("Error fetching student:", error);
        return null;
      }
    },
  },
};

export default resolvers;
