//default parameter values

function addTwoNumber(n1,n2=5){
    return n1 + n2;
}

let sum1 = addTwoNumber(1,4);
console.log("The sum of number",sum1);

let sum2 = addTwoNumber(1);
console.log("The sum of number",sum2);
