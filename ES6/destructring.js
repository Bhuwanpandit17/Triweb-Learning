
// array matching
let arr = [1,2,3,4,5,6];
let [a,b]= arr;

console.log("first element a: ", a);
console.log("second element b:",b);
[b,a] = [a,b];

console.log("arr is :",arr);
console.log("first element a:" , a);
console.log("second element b:", b);

// object  matching, shorthand notation

function getStudent(){
    let student = {
        name:"bhuwan",
        age:"24",
        level:"Bit"
    }
    return student;
}

var {name, age, level} = getStudent();
console.log(name, age, level);

//object matching , Deep matching

function getData(){
    let obj = {
        ename:"bhuwan",
        salary:100000,
        location:{
            city:"kathmandu"
        }
    }
    return obj;
}

let {ename: employeeName, salary: employeeSalary, location:{city:employeeCity}} = getData();
console.log("Ename: ", employeeName, ",Salary:",employeeSalary, ",Location: ",employeeCity);


