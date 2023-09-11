

// custom interpolation

function something(string, name, age){
    console.log("string", string)
    console.log("Name",name);
    console.log("Age",age);
};

let sname = "Bhuwan";
let age = 24;

something`Student's name is ${sname} and age is ${age}`;
