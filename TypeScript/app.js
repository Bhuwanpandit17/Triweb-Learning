
const express = require('express');
const userRoute = require('./routes/user');


const app = express();

// app.get('/hello',(req, res)=>{
//     res.send("hi from server hahaha");
// });


// app.get('/',(req, res)=>{
// res.send("hello from server eheh");
// });


app.use('/user',userRoute);



app.listen(process.env.PORT);