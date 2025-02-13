import { Elysia } from "elysia";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js";
import { swagger } from "@elysiajs/swagger";

// Load environment variables
dotenv.config();

// Create a new Elysia app
const app = new Elysia();

// Register Swagger documentation
app.use(
  swagger({
    documentation: {
      info: {
        title: "Delete Students API",
        description: "API for deleting students from the database",
        version: "1.0.0",
      },
    },
  })
);

// Register student routes
studentRoutes(app);

// Root endpoint
app.get("/", () => "Welcome to the Delete Students Microservice!");

// Start the server
app.listen(process.env.APP_PORT || 8086);

console.log(`✅ Server running on http://localhost:${process.env.APP_PORT || 8086}`);
console.log(`📄 Swagger docs available at http://localhost:${process.env.APP_PORT || 8086}/swagger`);
