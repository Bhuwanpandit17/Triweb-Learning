import express from 'express';
import {createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz} from '../controller/quiz';
import { isAuthenticated } from "../middleware/isAuth";
import { body } from "express-validator";


const router = express.Router();

//create
//POST /quiz/
router.post(
  "/",
  isAuthenticated,
  [
    body("name")
      .trim()
      .notEmpty()
      .isLength({ min: 5 })
      .withMessage("please enter a valid name, minimum 5 character long"),
      body('question_list')
      .custom(question_list =>{
        if(question_list.length == 0){
            return Promise.reject("Enter atleast 1 question");
        }
        return true;
      }),
      body('answers')
      .custom(answers =>{
        if(Object.keys(answers).length==0){
            return Promise.reject("Answer should not be empty");
        }
        return true;
      })
  ],
  createQuiz
);


//get 
//GET /quiz/:id
router.get("/:quizId", isAuthenticated, getQuiz);

//update
//PUT /quiz
router.put(
  "/",
  isAuthenticated,
  [
    body("name")
      .trim()
      .notEmpty()
      .isLength({ min: 5 })
      .withMessage("please enter a valid name, minimum 5 character long"),
    body("question_list").custom((question_list) => {
      if (question_list.length == 0) {
        return Promise.reject("Enter atleast 1 question");
      }
      return true;
    }),
    body("answers").custom((answers) => {
      if (Object.keys(answers).length == 0) {
        return Promise.reject("Answer should not be empty");
      }
      return true;
    }),
  ],
  updateQuiz
);


//Delete
//DELETE quiz/:quizId

router.delete("/:quizId",isAuthenticated, deleteQuiz);

//Publish
//PATCH quiz/:quizId

router.patch("/publish", isAuthenticated, publishQuiz);






export default router;