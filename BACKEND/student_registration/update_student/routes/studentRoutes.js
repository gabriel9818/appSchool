import { updateStudent } from "../controllers/studentController.js";

export default (app) => {
  // Define the PUT route for updating a student
  app.put("/students/:id", updateStudent);
};
