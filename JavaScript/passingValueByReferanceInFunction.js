

function updateName(student){
    student.name= 'Hi' + student.name;
    console.log(student);
}

let objs = {name:"Bhuwan"}
updateName(objs);
console.log("old object is", objs);// pass by reference


// pass by referance array


function addOne(arr){

}
let arr1=[1,3,4,5,6,78,8,8];

addOne(arr1);

console.log("old array is", arr1);
