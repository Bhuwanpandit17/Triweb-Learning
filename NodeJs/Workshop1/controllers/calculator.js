
module.exports.add = ((req, res)=>{
   
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let sum = n1 + n2;
    res.send(`Sum of two number = ${sum}`);
});

 module.exports.subtract= ((req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let Difference = n1 - n2;
    res.send(`Subtract of two number = ${Difference}`);
});


   module.exports.multiply = ((req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let Product = n1 * n2;
    res.send(`Product of two number = ${Product}`);
});

 module.exports.divide = ((req, res)=>{
    let n1 = req.body.num1;
    let n2 = req.body.num2;
    let quotient = n1 / n2;
    res.send(`Quotient of two number = ${quotient}`);
});


