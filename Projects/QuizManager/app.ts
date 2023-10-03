import express from 'express';
import userRoute from './src/routes/user'
//userRoute
const app = express();

app.use(express.json());

// app.get('/',(req,res)=>{
//     res.send("Hello how are you");
    
// })

app.use('/user',userRoute);
//Redirect /user to userRoute
app.listen(3000);