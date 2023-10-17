import express from 'express';
const router = express.Router();
import { startExam, submitExam } from '../controller/exam';




//GET /exam/quizId
router.get("/:quizId",startExam);

//POST /exam 

router.post("/", submitExam);




export default router;