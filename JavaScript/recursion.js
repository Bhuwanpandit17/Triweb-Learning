
function printNumSeries(num){
    if (num==0){
        return 0;
    }
    console.log(num);
    num--;
    printNumSeries(num)

}

printNumSeries(5);