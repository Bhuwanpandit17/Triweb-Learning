


// one way of doing of recurssion

function printNumSeries(num){
    if (num==0){
        return 0;
    }
    console.log(num);
    num--;
    printNumSeries(num)

}

printNumSeries(5);


//recursion using function expression

const printSeries =  function printNumSeries(num){
    if (num==0){
        return 0;
    }
    console.log(num);
    num--;
    printNumSeries(num)

}

printSeries(5);

//

const printSeries1 =  function printNumSeries(num){
    if (num==0){
        return 0;
    }
    console.log(num);
    num--;
    arguments.callee(num);
    //printNumSeries(num)

}
printSeries1(5);
