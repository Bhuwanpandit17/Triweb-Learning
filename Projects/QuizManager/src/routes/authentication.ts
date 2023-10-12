// Redirect request to particular method or controller
import express from "express";
import {
  registerUser,
  loginUser,
  isUserExist,
} from "../controller/authentication";
import { body } from "express-validator";
const router = express.Router();

//POST/authentication/
router.post( "/",
  [
    body('name')
      .trim()
      .not()
      .isEmpty()
      .isLength({ min: 3 })
      .withMessage("please enter a valid name, minimum 3 character long"),
    body('email')
      .trim()
      .isEmail()
      .custom(async (email:string) => {
        return isUserExist(email)
          .then((status) => {
            if (status) {
              return Promise.reject("User already exit !");
            }
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      })
      .normalizeEmail(),
    body("password")
      .trim()
      .isLength({ min: 5 })
      .withMessage("Enter at least 5 charcter long password"),
    body("confirm_password")
      .trim()
      .custom((value, { req }) => {
        if (value != req.body.password) {
          return Promise.reject("Password mismatch");
        }
        return true;
      }),
  ],
  registerUser
);

//POST /authentication/login
router.post("/login", loginUser);

export default router;
