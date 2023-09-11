
//Example 1
// var a =5;

// console.log(a);

// a =7;
// console.log(a);

// example 2

// const a =5;
// console.log(a);

// a = 7; TypeError: Assignment to constant variable.
// console.log(a);

//Example 3

const obj = {name:"Bhuwan", age:24};
console.log(obj);

// obj = {name:"Pandit", age:34}; //TypeError: Assignment to constant variable.
// console.log(obj);

obj.name = "Pandit";
obj.age = 45;
console.log(obj);
