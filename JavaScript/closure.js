







function getProductFunction(multipler){
    return function(num){
        return multipler*num;
    }
        

}

let double = getProductFunction(2);
let res1=double(4);
console.log(res1);


let triple = getProductFunction(3);
let res=double(5);
console.log(res);
