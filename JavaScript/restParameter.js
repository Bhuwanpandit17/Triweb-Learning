

function multipleArguments(M, ...arg){
    arg.forEach((element)=>{
        console.log(M*element);
    })


}


multipleArguments(2,4,3,5,3,63,6);