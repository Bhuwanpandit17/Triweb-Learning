import express from 'express';
import mongoose from 'mongoose';
import { Request, Response, NextFunction } from "express";
import userRoute from './routes/user';
import authenticationRoute from './routes/authentication';
import ProjectError from './helper/error';
import quizRoute from './routes/quiz';

//userRoute
const app = express();

interface ReturnResponse {
  status: "success" | "error";
  message: string;
  data: {} | [];
}

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

// Global variable declerataion
declare global {
    namespace Express{
        interface Request{
            userId:String;
        }
    }
}

// app.get('/',(req,res)=>{
//     res.send("Hello how are you");
    
// })


//Redirect /user to userRoute
app.use('/user',userRoute);

//Redirect /user to userRoute
app.use('/authentication',authenticationRoute);

//Redirect / quiz 
app.use('/quiz',quizRoute);

app.use((err:ProjectError, req: Request, res: Response, next: NextFunction)=>{
    //send email
    //Logger
    let message:string;
    let statusCode:number
  
    if(!!err.statusCode && err.statusCode <500){
         message =err.message;
        statusCode = err.statusCode;
    }else{
        message = "Something went wrong please try after sometimes";
        statusCode = 500;
    }
    let resp: ReturnResponse = { status: "error", message, data: {} };
    if(!!err.data){
        resp.data = err.data;
    }
    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
  })



  //Server connection

  const serverRun = async ()=>{
    try {
        await mongoose.connect(connectionString);
        app.listen(process.env.PORT,()=>{
            console.log("Server is Connected");
        });

    } catch (error) {
         console.error("Error connecting to the server:", error);
        }
    }

    serverRun();


