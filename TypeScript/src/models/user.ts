

const addUserToDB = (userName:string, password:string)=>{
    console.log(userName, password);
    return "user Registration done"

}

interface User{
    id:number,
    uname:string,
    password:string,
    age:number,
}

const updateUserData = (objUser:User)=>{

    console.log(objUser.uname)
    return "Update done";

}


export {addUserToDB, updateUserData};