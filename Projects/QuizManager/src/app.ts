import express from 'express';
import mongoose from 'mongoose';

import userRoute from './routes/user'
//userRoute
const app = express();

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("Hello how are you");
    
// })

app.use('/user',userRoute);
//Redirect /user to userRoute

mongoose.connect(connectionString)
.then((success)=> app.listen(3000))
.catch((error)=>console.log(error))

