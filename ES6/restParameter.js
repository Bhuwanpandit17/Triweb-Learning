

function passSomeNumber(...number){
    // console.log(number);
    let sum =0;
    number.forEach((e)=>{
        sum = sum+e;
    })
   return sum;
}

let res = passSomeNumber(2,3,4,5,6,7,8,8,9)
console.log(res);