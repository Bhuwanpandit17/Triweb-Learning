
function square(num){

    function getSquare(n1){
        function innerGetSquare(n2){
            console.log(n2*n2);
        }

        innerGetSquare(n1)
       
    }
     getSquare(num);

}

square(5);
 