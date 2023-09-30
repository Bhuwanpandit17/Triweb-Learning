const {addUserToDB} = require('../models/user')



const registerUser = (req, res)=>{
    // validation of data
    // fetch data
const  userName = "Bhuwan";
const password = "Password";

const result = addUserToDB(userName, password);
res.send(result);

}

module.exports = {registerUser};