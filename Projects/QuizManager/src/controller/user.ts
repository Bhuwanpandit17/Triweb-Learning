// Send data to / form database through model
import {Request, Response, NextFunction} from 'express';

const registerUser = (req:Request, res:Response, next:NextFunction) =>{
    console.log(req.body);
    console.log("Registration done");
    res.send("Registration done");
}

export{registerUser};