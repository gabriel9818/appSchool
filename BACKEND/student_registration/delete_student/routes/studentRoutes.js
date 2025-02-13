import { deleteStudent } from "../controllers/studentController.js";

export default (app) => {
  // Define the DELETE route for removing students
  app.delete("/students/:id", deleteStudent);
};
