


function btnListener(e){
const Fname = document.getElementById("fname").value;
const Lname = document .getElementById("lname").value;
const Email = document.getElementById("email").value;
const Pnumber = document.getElementById('contact').value;
const Age = document.getElementById('age').value;
const Resume = document.getElementById('resume').value;

if (Fname==""){
    console.log("First name cannot be empty");
    e.preventDefault();
    return;

}else if (Lname==""){
     console.log("Last name cannot be empty");
     e.preventDefault();
     return;

}if(Email===""){
    console.log("Email field is required");
    e.preventDefault();

}else if (!isvalidEmail(Email)){
    console.log("email is not valid");
    //e.preventDefault();

}if(Pnumber===0){
    console.log("Number is not valid");
    e.preventDefault();
    
}else if (!isValidNumber(Pnumber)) {
    console.log("The number is invalid");
    e.preventDefault();
    return;
    
} if (Age<0){
    console.log("Please enter the age in month");
    e.preventDefault();
}
if (Resume === "") {
        console.log("Resume field is required");
        e.preventDefault();
        return;
    }
}

 function isValidNumber(number) {
    const numericRegex = /^[0-9]+$/; 
    return numericRegex.test(number) && number.length === 10; 
}

function isvalidEmail(email){
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

let btn = document.getElementById('butn');
btn.addEventListener('click',btnListener);