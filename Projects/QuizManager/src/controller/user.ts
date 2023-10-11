// Send data to / form database through model
import { Request, Response, NextFunction } from "express";
import User from "../models/user";

interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {};
}

// Get user
const getUser = async (req: Request, res: Response) => {
  let resp: ReturnResponse;
  console.log(req.userId);

  try {
    const userId = req.params.userId;
    if(req.userId !=req.params.userId){
      const err = new Error ("You are not authorized")
      //err.statusCode
      throw err;
    }

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
    if (req.userId != req.body._id) {
      const err = new Error("You are not authorized");
      //err.statusCode
      throw err;
    }

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

export { getUser, updateUser };
