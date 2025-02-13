import { getAllStudents, getStudentById } from "../controllers/studentController.js";

export default (app) => {
  // Define the GET route for retrieving all students
  app.get("/students", getAllStudents);

  // Define the GET route for retrieving a student by ID
  app.get("/students/:id", getStudentById);
};
