// promise

function updateAge(age){
    return new Promise((resolve, reject) => {
        if(age>0){
            age = age +1;
        resolve(age);
        }else{
            reject("invalid age");
        }
        
    })
}
updateAge(-2).then((updateAge)=>{
    console.log("updated age is ", updateAge);

})
.catch((error)=>{
    console.log("error: Age is not updated")
})