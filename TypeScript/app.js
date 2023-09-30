
const express = require('express');


const app = express();

app.get('/hello',(req, res)=>{
    res.send("hi from server hahaha");
});


app.get('/',(req, res)=>{
res.send("hello from server eheh");
});


app.post('/post',(req , res)=>{
res.send("hello i am post method");
});


app.listen(3000);