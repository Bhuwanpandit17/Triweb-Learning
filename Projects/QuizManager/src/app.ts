import express from 'express';
import mongoose from 'mongoose';

import userRoute from './routes/user';
import authenticationRoute from './routes/authentication';
//userRoute
const app = express();

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


mongoose.connect(connectionString)
.then((success)=> app.listen(process.env.PORT))
.catch((error)=>console.log(error))

