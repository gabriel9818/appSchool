import mysql from "mysql2/promise";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create database 
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test database connection
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("✅ Connected to MySQL database successfully!");
    connection.release();
  } catch (error) {
    console.error("❌ Error connecting to MySQL:", error);
  }
})();

export default db;
