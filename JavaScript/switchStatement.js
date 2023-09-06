let  daynum = 4;

switch(daynum){
    case 0 :
        console.log("Sunday");
        break;
     case 1 :
        console.log("Monday");
        break;
     case 2 :
        console.log("Tuesday");
        break;
     case 3 :
        console.log("Wednesday");
        break;
     case 4 :
        console.log("Thursday");
        break;
     case 5 :
        console.log("Friday");
        break;
     case 6 :
        console.log("Saturday");
        break;
    default:
        console.log("Enter the number between 0 and 6");
        break;
}
console.log("out of switch");

console.log("------------------------------------------");


let leaveDay = 1;

switch(leaveDay){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("working day");
       break;

    case 0:
    case 6:
        console.log("Holiday");
        break;

     default:
        console.log("Enter number between 0-6");
        break;
    }
