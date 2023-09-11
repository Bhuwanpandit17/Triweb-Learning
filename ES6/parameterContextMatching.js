 // parameter context matching

 function printDataType([name,age]){
    console.log("name is ", name);
    console.log("Age is ", age);
 }

 printDataType(["Bhuwan", 24]);

 function printDataType({name:ename, age:eage}){
    console.log("name is ", ename);
    console.log("Age is ", eage);
 }

 printDataType({name:"Bhuwan",age:24});