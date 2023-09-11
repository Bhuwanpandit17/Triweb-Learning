

//spread parameter
// Array case
// let arr = [1,2,3,4,5,6,7,8,9];

// let arr1 = [11,12];

// let combined = [...arr,...arr1];
// console.log(combined);

//object case

let objStudent = {name:"Amir",age:18}

let objStudent1 = {...objStudent,city:"kathmandu"};

console.log("objStudent",objStudent);
console.log("objStudent1",objStudent1);

objStudent1.name = "Haari";
console.log("new objstudent1",objStudent1);

console.log("again objStudent",objStudent);


