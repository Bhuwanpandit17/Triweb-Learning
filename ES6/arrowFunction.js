// Expression bodies
let arr = [1,2,3,4,5,6];
const arr1 = arr.map(e=>e*2);
console.log(arr1)

//Example 3

const retobj = (uname,age)=>({uname:uname, age:age});

console.log(retobj("Bhuwan",24));

//Statement bodies

let arrr = [2,3,4,5,6,7,8];
arrr.forEach((e)=>{
console.log(e);
})