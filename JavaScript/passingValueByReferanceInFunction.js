

function updateName(student){
    student.name= 'Hi' + student.name;
    console.log(student);
}

let objs = {name:"Bhuwan"}
updateName(objs);
console.log("old object is", objs);// pass by reference