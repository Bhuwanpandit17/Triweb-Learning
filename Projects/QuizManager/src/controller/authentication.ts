// Send data to / form database through model
import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ProjectError from "../helper/error";
import {validationResult} from 'express-validator';

interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {};
}

//Post
const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let resp: ReturnResponse;

  try {
    //validation
    const validationError = validationResult(req);
    if(!validationError.isEmpty()){
      const err = new ProjectError("Validation failed!");
      err.statusCode = 422;
      err.data = validationError.array()
      throw err;
    }
    const email = req.body.email;
    const name = req.body.name;
    let password = await bcrypt.hash(req.body.password, 12);

    const user = new User({ email, name, password });
    const result = await user.save();
    // To model
    if (!result) {
      resp = { status: "error", message: "No result found", data: {} };
      res.send(resp);
    } else {
      resp = {
        status: "success",
        message: "Registration done",
        data: { userId: result._id },
      };
      res.send(resp);

    }
  } catch (error) {
    next(error);
  }
};

//Login module
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  let resp: ReturnResponse;
  try {
    const email = req.body.email;
    //Find user with email
    const user = await User.findOne({ email });
    if (!user) {
      const err = new ProjectError("No user exit");
      err.statusCode = 401;
      throw err;
    }

    const password = req.body.password;

    if (!user) {
      const err = new ProjectError("User is not found");
      err.statusCode = 401;
      throw err;
    } else {
      //Verify password using bcrypt
      const status = await bcrypt.compare(password, user.password);
      //then  decide
      if (status) {
        //jwt implementaion
        const token = jwt.sign({ userId: user._id }, "rojinakarki", {
          expiresIn: "3h",
        });

        resp = {
          status: "success",
          message: "password  match",
          data: { token },
        };
        //resp.send(resp);
      } else {
        const err = new ProjectError("Password doesnot match");
        err.statusCode = 401;
        throw err;
      }
      res.send(resp);
    }
  } catch (error) {
    next(error);
  }
};


const isUserExist = async (email:String) => {
  const user =  await User.findOne({email});

  if(!user){
    return false;
  }
  return true;
}

export { registerUser, loginUser , isUserExist};
