

function addNumber(){
    let sum=0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        sum = sum + element;
        
    }
    console.log(sum)
}

addNumber(1,3,5,67,5,4,3);
addNumber(5,34,3,6,3,3);

// converting argument in array

function addNumber(){
    let sum = 0;
    let arr = Array.from(arguments);
    arr.forEach(element => {
        sum = sum + element;
    });
    console.log(sum);
}

addNumber(2,3,4,5,6,7,8);