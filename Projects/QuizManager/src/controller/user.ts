// Send data to / form database through model
import {Request, Response, NextFunction} from 'express';
import User from '../models/user';

interface ReturnResponse{
    status:"success"|"error",
    message:string,
    data:{}
}
 //Post 
const registerUser = async(req:Request, res:Response) =>{
    let resp:ReturnResponse;
try{
    const user = new User(req.body);
    const result = await user.save();
  // To model
   if (!result){
    resp = {status:"error", message:"No result found", data:{}};
    res.send(resp)
   }else{
    resp = {status:"success", message:"Registration done", data:{userId:result._id}};
    res.send(resp);
   }
}catch(error){
    resp = {status:"error", message:"Something went wrong", data:{}};
    res.status(500).send(resp);
}
}
// Get user
const getUser =async (req: Request, res: Response) =>{
 let resp:ReturnResponse;

 try{
    const userId= req.params.userId;
    const user = await User.findById(userId,{name:1, email:2})
    if(!user){
        resp = {status:"error", message:"No user found", data:{}};
         res.send(resp)
    }else{
         resp = {status:"success", message:"user found", data:{user:user}};
        res.send(resp);
    }

}catch(error){
    resp = {status:"error", message:"Something went wrong", data:{}};
    res.status(500).send(resp);
}
 }

//Put

 const updateUser = async (req: Request , res: Response) =>{
   let resp:ReturnResponse;
    try {
            const userId = req.body._id;
            const user = await User.findById(userId,{name:1});
            //console.log(user);
    if(!user){
          
            resp = {status:"error", message:"No user found", data:{}};
            res.send(resp)

    }else{  user.name = req.body.name;
            await user.save();
            resp ={status:"success", message:"user Updated", data:{user:user}};
            res.send(resp); 
            
    }
    } catch (error) {
        resp = {status:"error", message:"Something went wrong", data:{}};
        res.status(500).send(resp);
    }

  }


export{registerUser, getUser, updateUser}