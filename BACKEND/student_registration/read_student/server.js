import { Elysia } from "elysia";
import dotenv from "dotenv";
import studentRoutes from "./routes/studentRoutes.js";
import { swagger } from "@elysiajs/swagger";
import { createServer } from "http";
import { createYoga } from "graphql-yoga";
import { makeExecutableSchema } from "@graphql-tools/schema"; // ✅ Se agrega para corregir el error
import { typeDefs } from "./graphql/schema.js";
import resolvers from "./graphql/resolvers.js";

// Load environment variables
dotenv.config();

// Create a new Elysia app
const app = new Elysia();

// Register Swagger documentation
app.use(
  swagger({
    documentation: {
      info: {
        title: "Read Students API",
        description: "API for retrieving students from the database",
        version: "1.0.0",
      },
    },
  })
);

// Register student routes
studentRoutes(app);

// Root endpoint
app.get("/", () => "Welcome to the Read Students Microservice!");

// Start the Elysia server
app.listen(process.env.APP_PORT || 8087);

console.log(`Server running on http://18.210.147.186:${process.env.APP_PORT || 8087}`);
console.log(`📄 Swagger docs available at http://18.210.147.186:${process.env.APP_PORT || 8087}/swagger`);

// ✅ Corrección de GraphQL Yoga
const schema = makeExecutableSchema({ typeDefs, resolvers }); // Se usa makeExecutableSchema para evitar errores

const yoga = createYoga({ schema });

const server = createServer(yoga);

server.listen(4000, () => {
  console.log("✅ GraphQL server running at http://18.210.147.186:4000/graphql");
});
