// Send data to / form database through model
import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";

interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {};
}
//Post
const registerUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;

  try {
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
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

//Login module
const loginUser = async (req:Request, res:Response) => {
  let resp: ReturnResponse;
try {
    const email = req.body.email;
    //Find user with email
    const user = await User.findOne({email});
    // if(!user){
    //      resp = { status: "error", message: "No email found", data: {} };
    //      res.send(resp);
    // }else{
    //     resp = { status: "success", message: "user email found", data: { user: user } };
    //     res.send(resp);
    // }
    //Verify password using bcrypt
     const password = req.body.password;
     
    if(!user){
         resp = { status: "error", message: "User doesnot match", data: {} };
         res.status(401).send(resp);
    }else{
      const status = await bcrypt.compare(password, user.password);
      //then  decide
      if (status) {
        resp = { status: "success", message: "password  match", data: {} };
        // res.send(resp);
      } else {
        resp = { status: "error", message: "password doesnot match", data: {} };
       
      }
       res.send(resp);
       
     
    }
} catch (error) {
    console.log(error);
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

// Get user
const getUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;

  try {
    const userId = req.params.userId;
    const user = await User.findById(userId, { name: 1, email: 2 });
    if (!user) {
      resp = { status: "error", message: "No user found", data: {} };
      res.send(resp);
    } else {
      resp = { status: "success", message: "user found", data: { user: user } };
      res.send(resp);
    }
  } catch (error) {
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

//Put

const updateUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;
  try {
    const userId = req.body._id;
    const user = await User.findById(userId, { name: 1 });
    //console.log(user);
    if (!user) {
      resp = { status: "error", message: "No user found", data: {} };
      res.send(resp);
    } else {
      user.name = req.body.name;
      await user.save();
      resp = {
        status: "success",
        message: "user Updated",
        data: { user: user },
      };
      res.send(resp);
    }
  } catch (error) {
    console.log(error);
    resp = { status: "error", message: "Something went wrong", data: {} };
    res.status(500).send(resp);
  }
};

export { registerUser, getUser, updateUser, loginUser };
