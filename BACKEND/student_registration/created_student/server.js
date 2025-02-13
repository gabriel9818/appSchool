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
        title: "Student Registration API",
        description: "API for managing student registrations",
        version: "1.0.0",
      },
    },
  })
);

// Register student routes
studentRoutes(app);

// Root endpoint
app.get("/", () => "Welcome to the Created Student Microservice!");

// Start the server
app.listen(process.env.APP_PORT || 8085);

console.log(`✅ Server running on http://localhost:${process.env.APP_PORT || 8085}`);
console.log(`📄 Swagger docs available at http://localhost:${process.env.APP_PORT || 8085}/swagger`);
