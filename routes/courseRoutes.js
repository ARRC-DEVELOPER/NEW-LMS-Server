import Express from "express";

// importing controllers
import { createCourse, getAllCourses } from "../controllers/courseController.js";

export default Express.Router()
    .get('/getAllCourses', getAllCourses)
    .post("/createCourse", createCourse);
