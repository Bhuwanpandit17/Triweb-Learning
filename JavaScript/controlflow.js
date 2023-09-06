
// conditional statement
let n1= 3;
let  n2= 4;

if (n1>n2){
    console.log("n1 is greater");

}
else{
    console.log("n2 is greater");
}
// falsy value

if (false){
    console.log("in if 1");// control never reach here
}else{
    console.log("in else 1");
}

// undefined

let x;
if(x){
    console.log("in if 2");//control never rech here
}else{
    console.log("in else 2");
}

// null

if (null){
    console.log("in if 3");// control never reach here
}else{
    console.log("in else 3");//
}

//0

if(0){
    console.log("in if 5");// control never reach here
}else{
    console.log("in else 5");
}

// ""

if (""){
    console.log("in if 6")// control never reach here

}else{
    console.log("in else 6");
}

//

if(NaN==false){
    console.log("it was falsy value not false");// control never reach here
}else{
    console.log("surprise");
}