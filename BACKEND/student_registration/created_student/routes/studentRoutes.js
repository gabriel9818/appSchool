import { createStudent } from "../controllers/studentController.js";

export default (app) => {
  // Define the POST route for creating students
  app.post("/students", createStudent);
};
